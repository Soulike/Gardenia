import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Repository as RepositoryClass} from '../../Class';
import {RepositoryInfo} from '../../Api';
import {setBranchAction} from './Action/Action';
import {connect} from 'react-redux';

interface Match
{
    username: string,
    repository: string,
}

interface Props extends RouteComponentProps<Match>
{
    branch: string,
    setBranch: (branch: string) => any
}

interface State
{
    repository: RepositoryClass,
    branches: Array<string>,
    commitCount: number,
    loading: boolean,
    isEmpty: boolean,
}

class Repository extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            repository: new RepositoryClass('', '', '', true),
            branches: [],
            commitCount: 0,
            loading: true,
            isEmpty: false, // 是否是空仓库
        };
    }


    async componentDidMount()
    {
        const {match: {params: {username, repository: name}}} = this.props;
        const [commitCountWrapper, repository] = await Promise.all([
            RepositoryInfo.commitCount(username, name, 'HEAD'),
            RepositoryInfo.repository(username, name),
        ]);
        // 设置仓库基本信息
        if (repository !== null)
        {
            this.setState({repository});
            const {name, description} = repository;
            document.title = `${name} - ${description.length === 0 ? 'Git Demo' : description}`;
        }
        // 查看 commit 次数是不是 0。如果是 0 就是空仓库，不再继续请求剩下的信息
        if (commitCountWrapper !== null)
        {
            const {commitCount} = commitCountWrapper;
            if (commitCount === 0)
            {
                this.setState({isEmpty: true, loading: false});
                return;
            }
            else
            {
                this.setState({commitCount});
            }
        }
        // 确定不是空仓库后再请求分支信息
        const branches = await RepositoryInfo.branch(username, name);
        if (branches !== null)
        {
            const {setBranch} = this.props;
            this.setState({branches});
            setBranch(branches[0]);
        }
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
    {
        const {branch: preBranch} = prevProps;
        const {branch} = this.props;
        if (preBranch !== branch)    // 分支切换，重新获取提交相关信息
        {
            const {match: {params: {username, repository: name}}, branch} = this.props;
            const commitCountWrapper = await RepositoryInfo.commitCount(username, name, branch);
            if (commitCountWrapper !== null)
            {
                const {commitCount} = commitCountWrapper;
                this.setState({commitCount});
            }
            this.setState({loading: false});
        }
    }

    render()
    {
        const {repository, commitCount, branches, loading, isEmpty} = this.state;
        return (
            <View repository={repository}
                  commitCount={commitCount}
                  loading={loading}
                  branches={branches}
                  isEmpty={isEmpty} />
        );
    }
}

const mapStateToProps = (state: any) =>
{
    const {Repository: {branch}} = state;
    return {branch};
};

const mapDispatchToProps = {
    setBranch: setBranchAction,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Repository));