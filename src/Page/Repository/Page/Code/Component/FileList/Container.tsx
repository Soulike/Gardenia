import React, {Component} from 'react';
import View from './View';
import {RepositoryInfo} from '../../../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {ObjectType} from '../../../../../../CONSTANT';
import {Commit} from '../../../../../../Class';
import {Interface as RouterInterface} from '../../../../../../Router';

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
        const {match: {params: {username: prevUsername, repository: prevRepository, branch: preBranch, path: prePath}}} = prevProps;
        const {match: {params: {username, repository, branch, path}}} = this.props;
        if (prevUsername !== username || prevRepository !== repository)
        {
            await this.componentDidMount();
        }
        else if (preBranch !== branch)
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
            const {match: {params: {username, repository: repositoryName}}} = this.props;
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
        return new Promise(async resolve =>
        {
            const {match: {params: {username, repository: name, path, branch}}} = this.props;
            const {masterBranchName} = this.state;
            const fileList = await RepositoryInfo.directory(
                {username}, {name},
                branch ? branch : masterBranchName,
                path === undefined ? '' : path + '/');
            if (fileList !== null)
            {
                this.setState({fileList: [...fileList]}, () => resolve());
            }
            else
            {
                resolve();
            }
        });
    };

    loadLastCommit = async () =>
    {
        return new Promise(async resolve =>
        {
            const {match: {params: {username, repository: name, branch, path}}} = this.props;
            const {masterBranchName} = this.state;
            const lastCommit = await RepositoryInfo.lastBranchCommit(
                {username}, {name}, branch ? branch : masterBranchName, path);
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
                      showPreviousFolderItem={path !== undefined} />);
    }
}

export default withRouter(FileList);