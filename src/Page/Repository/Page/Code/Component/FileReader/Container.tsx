import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Commit} from '../../../../../../Class';
import {RepositoryInfo} from '../../../../../../Api';
import {basename} from 'path';
import {CONFIG, Interface as RouterInterface} from '../../../../../../Router';
import {File} from '../../../../../../Function';

const {PAGE_ID_TO_ROUTE, PAGE_ID} = CONFIG;

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode> {}

interface IState
{
    isBinary: boolean,
    isOversize: boolean,
    lastCommit: Commit,
    loading: boolean,
    fileContent: string,
}

class FileReader extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            isBinary: false,
            isOversize: false,
            lastCommit: new Commit('', '', '', 0, '', ''),
            loading: true,
            fileContent: '',
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadLastCommit();
        await this.loadFileInfo();
        const {isBinary, isOversize} = this.state;
        if (!isBinary && !isOversize)
        {
            await this.loadFileContent();
        }
        this.setState({loading: false});
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
        return new Promise(async resolve =>
        {
            const {match: {params: {username, repository: name, path, branch}}} = this.props;
            const lastCommit = await RepositoryInfo.lastBranchCommit({username}, {name}, branch!, path);
            if (lastCommit !== null)
            {
                this.setState({lastCommit}, () => resolve());
            }
        });
    };

    loadFileInfo = async () =>
    {
        return new Promise(async resolve =>
        {
            const {lastCommit: {commitHash}} = this.state;
            const {match: {params: {username, repository: name, path}}, history} = this.props;
            const fileInfo = await RepositoryInfo.fileInfo({username}, {name}, path!, commitHash);
            if (fileInfo !== null)
            {
                const {exists, size, isBinary} = fileInfo;
                if (!exists)
                {
                    history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
                }
                else
                {
                    if (!isBinary && size! > 1024 * 1024)   // 不是二进制文件，但大小超过 1M
                    {
                        this.setState({isOversize: true, isBinary: isBinary!}, () => resolve());
                    }
                    else
                    {
                        this.setState({isOversize: false, isBinary: isBinary!}, () => resolve());
                    }
                }
            }
        });
    };

    loadFileContent = async () =>
    {
        const {match: {params: {username, repository, path}}} = this.props;
        const {lastCommit: {commitHash}} = this.state;
        const rawFile = await RepositoryInfo.rawFile({username}, {name: repository}, path!, commitHash);
        if (rawFile !== null)
        {
            this.setState({fileContent: await File.transformBlobToString(rawFile)});
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

    render()
    {
        const {match: {params: {path}}} = this.props;
        const {isBinary, isOversize, lastCommit, loading, fileContent} = this.state;
        const fileName = this.getFileNameFromPath(path!);

        return (
            <View fileContent={fileContent}
                  isBinary={isBinary} isOversize={isOversize} lastCommit={lastCommit}
                  fileName={fileName} loading={loading}
                  onRawFileButtonClick={this.onRawFileButtonClick} />
        );

    }
}

export default withRouter(FileReader);