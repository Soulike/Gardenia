import React, {PureComponent} from 'react';
import View from './View';
import {Branch, Repository as RepositoryClass} from '../../../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {RepositoryInfo} from '../../../../Api/RepositoryInfo';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode> {}

interface IState
{
    repository: RepositoryClass,
    branches: Readonly<Branch[]>,
    commitCount: number,
    loading: boolean,
}

class Code extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            repository: new RepositoryClass('', '', '', true),
            branches: [],
            commitCount: 0,
            loading: true,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadBranches();
        await Promise.all([
            this.loadRepository(),
            this.loadCommitCount(),
        ]);
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username: prevUsername, repository: prevRepository, branch: preBranch}}} = prevProps;
        const {match: {params: {username, repository, branch}}} = this.props;
        if (prevUsername !== username || prevRepository !== repository)
        {
            await this.componentDidMount();
        }
        else if (preBranch !== branch)    // 分支切换，重新获取提交相关信息
        {
            this.setState({loading: true});
            await this.loadCommitCount();
            this.setState({loading: false});
        }
    }

    loadRepository = async () =>
    {
        return new Promise(async resolve =>
        {
            const {match: {params: {username, repository: name}}} = this.props;
            const repository = await RepositoryInfo.repository({username}, {name});
            // 设置仓库基本信息
            if (repository !== null)
            {
                this.setState({repository}, () => resolve());
            }
        });
    };

    loadCommitCount = async () =>
    {
        return new Promise(async resolve =>
        {
            const {match: {params: {username, repository: repositoryName, branch}}} = this.props;
            const {branches} = this.state;
            let masterBranchName = '';
            if (!branch)
            {
                for (const {isDefault, name} of branches)
                {
                    if (isDefault)
                    {
                        masterBranchName = name;
                    }
                }
            }
            // 在仓库还没有提交的时候 commitHash 参数写什么都是无所谓的，所以即使是空字符串也不会出错
            const commitCountWrapper = await RepositoryInfo.commitCount(
                {username}, {name: repositoryName}, branch ? branch : masterBranchName);
            if (commitCountWrapper !== null)
            {
                const {commitCount} = commitCountWrapper;
                this.setState({commitCount}, () => resolve());
            }
        });
    };

    loadBranches = async () =>
    {
        return new Promise(async resolve =>
        {
            const {match: {params: {username, repository: repositoryName}}} = this.props;
            const result = await RepositoryInfo.branches({username, name: repositoryName});
            if (result !== null)
            {
                const {branches} = result;
                this.setState({branches}, () => resolve());
            }
        });
    };

    render()
    {
        const {repository, branches, commitCount, loading} = this.state;
        const {match: {params: {objectType}}} = this.props;
        return (<View repository={repository}
                      commitCount={commitCount}
                      branches={branches}
                      objectType={objectType!} loading={loading} />);
    }

}

export default withRouter(Code);