import React, {PureComponent} from 'react';
import View from './View';
import {RepositoryInfo} from '../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {Branch, Commit} from '../../../../Class';
import {notification} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import {promisify} from 'util';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCommits> {}

interface IState
{
    branches: Readonly<Branch[]>;
    tags: Readonly<string[]>;
    loading: boolean;
    commits: Commit[];
}

class Commits extends PureComponent<IProps, IState>
{
    private static COMMIT_AMOUNT_PER_PAGE = 50;
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            branches: [],
            tags: [],   // TODO: tag 获取
            loading: false,
            commits: [],
        };
    }

    async componentDidMount()
    {
        await this.init();
        await this.setStatePromise({loading: true});
        await this.loadBranches();
        await this.loadMoreCommits();
        await this.setStatePromise({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username, repository: repositoryName, branch}}} = this.props;
        const {match: {params: {username: prevUsername, repository: prevRepositoryName, branch: prevBranch}}} = prevProps;
        if (username !== prevUsername || repositoryName !== prevRepositoryName)
        {
            await this.componentDidMount();
        }
        else if (branch !== prevBranch)
        {
            await this.setStatePromise({loading: true, commits: []});
            await this.loadMoreCommits();
            await this.setStatePromise({loading: false});
        }
    }

    init = async () =>
    {
        await this.setStatePromise({branches: [], tags: [], commits: []});
    };

    loadBranches = async () =>
    {
        const {match: {params: {username, repository: repositoryName}}} = this.props;
        const result = await RepositoryInfo.branches({username, name: repositoryName});
        if (result !== null)
        {
            const {branches} = result;
            await this.setStatePromise({branches});
        }
    };

    loadMoreCommits = async () =>
    {
        const {match: {params: {username, repository: repositoryName, branch, path}}} = this.props;
        let result: { commits: Commit[] } | null;
        const {commits} = this.state;
        if (typeof path === 'string')
        {
            result = await RepositoryInfo.fileCommitHistory({
                username,
                name: repositoryName,
            }, path, branch, commits.length, Commits.COMMIT_AMOUNT_PER_PAGE);
        }
        else
        {
            result = await RepositoryInfo.commitHistory({
                username,
                name: repositoryName,
            }, branch, commits.length, Commits.COMMIT_AMOUNT_PER_PAGE);
        }
        if (result !== null)
        {
            const {commits: moreCommits} = result;
            if (moreCommits.length === 0)
            {
                notification.success({message: '已加载所有提交历史'});
            }
            else
            {
                await this.setStatePromise({commits: [...commits, ...moreCommits]});
            }
        }
    };

    onLoadMoreButtonClick: ButtonProps['onClick'] = async () =>
    {
        await this.setStatePromise({loading: true});
        await this.loadMoreCommits();
        await this.setStatePromise({loading: false});
    };

    render()
    {
        const {branches, loading, commits, tags} = this.state;
        const {match: {params: {repository: repositoryName, path, username}}} = this.props;
        return (<View onLoadMoreButtonClick={this.onLoadMoreButtonClick} branches={branches}
                      loading={loading}
                      commits={commits} tags={tags}
                      path={path}
                      repository={{username, name: repositoryName}} />);
    }
}

export default withRouter(Commits);