import React, {HTMLAttributes, PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CodeComment, Commit} from '../../../../../../Class';
import {CodeComment as CodeCommentApi, RepositoryInfo} from '../../../../../../Api';
import {basename} from 'path';
import {CONFIG, Interface as RouterInterface} from '../../../../../../Router';
import {File} from '../../../../../../Function';
import {promisify} from 'util';
import {DrawerProps} from 'antd/lib/drawer';

const {PAGE_ID_TO_ROUTE, PAGE_ID} = CONFIG;

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode> {}

interface IState
{
    isBinary: boolean,
    isOversize: boolean,
    lastCommit: Commit,
    loading: boolean,
    fileContent: string,
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
            fileContent: '',
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
        const {match: {params: {username, repository: name, path, branch}}} = this.props;
        const lastCommit = await RepositoryInfo.lastBranchCommit({username}, {name}, branch!, path);
        if (lastCommit !== null)
        {
            await this.setStatePromise({lastCommit});
        }
    };

    loadFileInfo = async () =>
    {
        const {lastCommit: {commitHash}} = this.state;
        const {match: {params: {username, repository: name, path}}, history} = this.props;
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
                if (!isBinary && size! > 1024 * 1024)   // 不是二进制文件，但大小超过 1M
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
        const {match: {params: {username, repository, path}}} = this.props;
        const {lastCommit: {commitHash}} = this.state;
        const rawFile = await RepositoryInfo.rawFile({username}, {name: repository}, path!, commitHash);
        if (rawFile !== null)
        {
            await this.setStatePromise({fileContent: await File.transformBlobToString(rawFile)});
        }
    };

    loadCodeComments = async () =>
    {
        const {match: {params: {username, repository, path}}} = this.props;
        const {lastCommit: {commitHash}} = this.state;
        const codeCommentsWrapper = await CodeCommentApi.get({
            repositoryUsername: username,
            repositoryName: repository,
            filePath: path!,
        }, commitHash);
        if (codeCommentsWrapper !== null)
        {
            const {codeComments} = codeCommentsWrapper;
            await this.setStatePromise({codeComments});
        }
    };

    onRawFileButtonClick = async () =>
    {
        const {match: {params: {username, repository, path}}} = this.props;
        const {lastCommit: {commitHash}} = this.state;
        const rawFile = await RepositoryInfo.rawFile({username}, {name: repository}, path!, commitHash);
        if (rawFile !== null)
        {
            this.startDownload(rawFile);
        }
    };

    startDownload = (blob: Blob) =>
    {
        const {match: {params: {path}}} = this.props;
        const url = URL.createObjectURL(blob);
        File.startDownload(url, basename(path!));
        URL.revokeObjectURL(url);
    };

    getFileNameFromPath = (path: string) =>
    {
        const pathSplit = path.split('/');
        return pathSplit[pathSplit.length - 1];
    };

    onCodeLineClickFactory: (lineNumber: number) => HTMLAttributes<HTMLTableRowElement>['onClick'] = lineNumber =>
    {
        return async () =>
        {
            await this.setStatePromise({drawerLineNumber: lineNumber});
            const {fileContent} = this.state;
            const codeLines = fileContent.split('\n');
            await this.setStatePromise({drawerCode: codeLines[lineNumber - 1], drawerVisible: true});
        };
    };

    onDrawerClose: DrawerProps['onClose'] = async () =>
    {
        await this.setStatePromise({drawerVisible: false});
    };

    render()
    {
        const {match: {params: {path}}} = this.props;
        const {
            isBinary, isOversize, lastCommit, loading, fileContent, fileSize, codeComments,
            drawerVisible, drawerLineNumber, drawerCode,
        } = this.state;
        const fileName = this.getFileNameFromPath(path!);
        const hasCommentLineNumbers = codeComments.map(({columnNumber}) => columnNumber);

        return (
            <View fileSize={fileSize}
                  fileContent={fileContent}
                  isBinary={isBinary}
                  isOversize={isOversize}
                  lastCommit={lastCommit}
                  fileName={fileName}
                  loading={loading}
                  onRawFileButtonClick={this.onRawFileButtonClick}
                  hasCommentLineNumbers={hasCommentLineNumbers}
                  onCodeLineClickFactory={this.onCodeLineClickFactory}
                  drawerCode={drawerCode}
                  drawerLineNumber={drawerLineNumber}
                  drawerVisible={drawerVisible} onDrawerClose={this.onDrawerClose} />
        );

    }
}

export default withRouter(FileReader);