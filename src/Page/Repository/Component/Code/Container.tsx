import React, {PureComponent} from 'react';
import View from './View';
import {Repository as RepositoryClass} from '../../../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {RepositoryInfo} from '../../../../Api/RepositoryInfo';

interface Props extends RouteComponentProps<RouterInterface.Repository>
{
    repository: RepositoryClass,
}

interface State
{
    branches: Array<string>,
    commitCount: number,
    isEmpty: boolean,
    loading: boolean,
}

class Code extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            branches: [],
            commitCount: 0,
            isEmpty: false, // 是否是空仓库
            loading: true,
        };
    }

    async componentDidMount()
    {
        const {match: {params: {username, repository: repositoryName}}} = this.props;
        this.setState({loading: true});
        const commitCountWrapper = await RepositoryInfo.commitCount(username, repositoryName, 'HEAD');
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
        const branches = await RepositoryInfo.branch(username, repositoryName);
        if (branches !== null)
        {
            this.setState({branches});
        }
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
    {
        const {match: {params: {branch: preBranch}}} = prevProps;
        const {match: {params: {branch}}} = this.props;
        if (preBranch !== branch)    // 分支切换，重新获取提交相关信息
        {
            const {match: {params: {username, repository: name, branch}}} = this.props;
            const commitCountWrapper = await RepositoryInfo.commitCount(username, name, branch ? branch : 'HEAD');
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
        const {branches, commitCount, isEmpty, loading} = this.state;
        const {repository, match: {params: {objectType}}} = this.props;
        return (<View isEmpty={isEmpty}
                      repository={repository}
                      commitCount={commitCount}
                      branches={branches}
                      objectType={objectType!} loading={loading} />);
    }

}

export default withRouter(Code);