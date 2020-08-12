import React, {Component} from 'react';
import View from './View';
import {RepositoryInfo} from '../../../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {ObjectType} from '../../../../../../CONSTANT';
import {Commit} from '../../../../../../Class';
import {CONFIG, Interface as RouterInterface} from '../../../../../../Router';
import {promisify} from 'util';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode> {}

interface IState
{
    fileList: Array<{ type: ObjectType, path: string, commit: Commit }>,
    lastCommit: Commit,
    loading: boolean,
    masterBranchName: string,
}

class FileList extends Component<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            fileList: [],
            lastCommit: new Commit('', '', '', 0, '', ''),
            loading: true,
            masterBranchName: '',
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadMasterBranchName();
        // 这两个请求不能合并，因为 directory 的返回时间过长
        await this.loadLastCommit();
        await this.loadDirectory();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username: prevUsername, repositoryName: prevRepository, commitHash: preBranch, path: prePath}}} = prevProps;
        const {match: {params: {username, repositoryName, commitHash, path}}} = this.props;
        if (prevUsername !== username || prevRepository !== repositoryName)
        {
            await this.componentDidMount();
        }
        else if (preBranch !== commitHash)
        {
            this.setState({loading: true});
            await Promise.all([
                this.loadDirectory(),
                this.loadLastCommit(),
            ]);
            this.setState({loading: false});
        }
        else if (prePath !== path)
        {
            this.setState({loading: true});
            await this.loadDirectory();
            this.setState({loading: false});
        }
    }

    loadMasterBranchName = async () =>
    {
        return new Promise(async resolve =>
        {
            const {match: {params: {username, repositoryName}}} = this.props;
            const result = await RepositoryInfo.branches({username, name: repositoryName});
            if (result !== null)
            {
                const {branches} = result;
                let masterBranchName = '';
                for (const {name, isDefault} of branches)
                {
                    if (isDefault)
                    {
                        masterBranchName = name;
                        break;
                    }
                }
                this.setState({masterBranchName}, () => resolve());
            }
        });
    };

    loadDirectory = async () =>
    {
        const {match: {params: {username, repositoryName: name, path, commitHash}}, history} = this.props;
        const {masterBranchName} = this.state;
        const fileList = await RepositoryInfo.directory(
            {username}, {name},
            commitHash ? commitHash : masterBranchName,
            path === undefined ? '' : path + '/');
        if (fileList !== null)
        {
            await this.setStatePromise({fileList: [...fileList]});
        }
        else
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    };

    loadLastCommit = async () =>
    {
        return new Promise(async resolve =>
        {
            const {match: {params: {username, repositoryName: name, commitHash, path}}} = this.props;
            const {masterBranchName} = this.state;
            const lastCommit = await RepositoryInfo.lastBranchCommit(
                {username}, {name}, commitHash ? commitHash : masterBranchName, path);
            if (lastCommit !== null)
            {
                this.setState({lastCommit}, () => resolve());
            }
            else
            {
                resolve();
            }
        });
    };

    render()
    {
        const {fileList, lastCommit, loading, masterBranchName} = this.state;
        const {match: {params: {path}}} = this.props;
        return (<View fileList={fileList} masterBranchName={masterBranchName}
                      lastCommit={lastCommit}
                      loading={loading}
                      showPreviousFolderItem={path !== undefined && path !== '.'} />);
    }
}

export default withRouter(FileList);