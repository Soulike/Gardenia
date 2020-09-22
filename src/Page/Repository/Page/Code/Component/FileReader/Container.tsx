import React, {HTMLAttributes, PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CodeComment, Commit} from '../../../../../../Class';
import {CodeComment as CodeCommentApi, RepositoryInfo} from '../../../../../../Api';
import {Interface as RouterInterface} from '../../../../../../Router';
import {File} from '../../../../../../Function';
import {promisify} from 'util';
import {DrawerProps} from 'antd/lib/drawer';
import eventEmitter, {EVENT} from './Event';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../../../CONFIG';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode> {}

interface IState
{
    isBinary: boolean,
    isOversize: boolean,
    lastCommit: Commit,
    loading: boolean,
    fileContent: Blob,
    fileSize: number,
    codeComments: CodeComment[],

    drawerVisible: DrawerProps['visible'];
    drawerCode: string;
    drawerLineNumber: number;
}

class FileReader extends PureComponent<Readonly<IProps>, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            isBinary: false,
            isOversize: false,
            lastCommit: new Commit('', '', '', 0, '', ''),
            loading: true,
            fileContent: new Blob(),
            fileSize: 0,
            codeComments: [],

            drawerCode: '',
            drawerLineNumber: 1,
            drawerVisible: false,
        };
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        await this.loadLastCommit();
        await Promise.all([
            this.loadFileInfo(),
            this.loadCodeComments(),
        ]);
        const {isBinary, isOversize} = this.state;
        if (!isBinary && !isOversize)
        {
            await this.loadFileContent();
        }
        await this.setStatePromise({loading: false});

        eventEmitter.on(EVENT.CODE_COMMENT_CHANGE, this.onCodeCommentChange);
    }

    componentWillUnmount()
    {
        eventEmitter.removeListener(EVENT.CODE_COMMENT_CHANGE, this.onCodeCommentChange);
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {location: {pathname}} = this.props;
        const {location: {pathname: prePathname}} = prevProps;
        if (pathname !== prePathname)
        {
            await this.componentDidMount();
        }
    }

    loadLastCommit = async () =>
    {
        const {match: {params: {username, repositoryName: name, path, commitHash}}} = this.props;
        const lastCommit = await RepositoryInfo.lastBranchCommit({username}, {name}, commitHash!, path);
        if (lastCommit !== null)
        {
            await this.setStatePromise({lastCommit});
        }
    };

    loadFileInfo = async () =>
    {
        const {lastCommit: {commitHash}} = this.state;
        const {match: {params: {username, repositoryName: name, path}}, history} = this.props;
        const fileInfo = await RepositoryInfo.fileInfo({username}, {name}, path!, commitHash);
        if (fileInfo !== null)
        {
            const {exists, size, isBinary} = fileInfo;
            if (!exists)
            {
                return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
            }
            else
            {
                await this.setStatePromise({fileSize: size!});
                if (!isBinary && size! > 5 * 1024 * 1024)   // 不是二进制文件，但大小超过 5M
                {
                    await this.setStatePromise({isOversize: true, isBinary: isBinary!});
                }
                else
                {
                    await this.setStatePromise({isOversize: false, isBinary: isBinary!});
                }
            }
        }
    };

    loadFileContent = async () =>
    {
        const {match: {params: {username, repositoryName, path}}} = this.props;
        const {lastCommit: {commitHash}} = this.state;
        const rawFile = await RepositoryInfo.rawFile({username}, {name: repositoryName}, path!, commitHash);
        if (rawFile !== null)
        {
            await this.setStatePromise({fileContent: rawFile});
        }
    };

    loadCodeComments = async () =>
    {
        const {match: {params: {username, repositoryName, path}}} = this.props;
        const {lastCommit: {commitHash}} = this.state;
        const codeCommentsWrapper = await CodeCommentApi.get({
            repositoryUsername: username,
            repositoryName,
            filePath: path!,
        }, commitHash);
        if (codeCommentsWrapper !== null)
        {
            const {codeComments} = codeCommentsWrapper;
            await this.setStatePromise({codeComments});
        }
    };

    onCodeCommentChange = async () =>
    {
        await this.setStatePromise({loading: true});
        await this.loadCodeComments();
        await this.setStatePromise({loading: false});
    };

    onCodeLineClickFactory: (lineNumber: number) => HTMLAttributes<HTMLTableRowElement>['onClick'] = lineNumber =>
    {
        return async () =>
        {
            await this.setStatePromise({drawerLineNumber: lineNumber});
            const {fileContent} = this.state;
            const codeLines = (await File.transformBlobToString(fileContent)).split('\n');
            await this.setStatePromise({drawerCode: codeLines[lineNumber - 1].trim(), drawerVisible: true});
        };
    };

    onDrawerClose: DrawerProps['onClose'] = async () =>
    {
        await this.setStatePromise({drawerVisible: false});
    };

    render()
    {
        const {
            isBinary, isOversize, lastCommit, loading, fileContent, fileSize, codeComments,
            drawerVisible, drawerLineNumber, drawerCode,
        } = this.state;
        const hasCommentLineNumbers = codeComments.map(({columnNumber}) => columnNumber);

        return (
            <View fileSize={fileSize}
                  fileContent={fileContent}
                  isBinary={isBinary}
                  isOversize={isOversize}
                  lastCommit={lastCommit}
                  loading={loading}
                  hasCommentLineNumbers={hasCommentLineNumbers}
                  onCodeLineClickFactory={this.onCodeLineClickFactory}
                  drawerCode={drawerCode}
                  drawerLineNumber={drawerLineNumber}
                  drawerVisible={drawerVisible} onDrawerClose={this.onDrawerClose} />
        );

    }
}

export default withRouter(FileReader);