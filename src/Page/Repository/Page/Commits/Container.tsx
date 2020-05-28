import React, {PureComponent} from 'react';
import View from './View';
import {RepositoryInfo} from '../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {Branch, Commit} from '../../../../Class';
import {notification} from 'antd';
import {ButtonProps} from 'antd/lib/button';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCommits> {}

interface IState
{
    branches: Readonly<Branch[]>;
    loading: boolean;
    commits: Commit[];
}

class Commits extends PureComponent<IProps, IState>
{
    private static COMMIT_AMOUNT_PER_PAGE = 50;

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            branches: [],
            loading: false,
            commits: [],
        };
    }

    async componentDidMount()
    {
        await this.init();
        this.setState({loading: true});
        await this.loadBranches();
        await this.loadMoreCommits();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {location: {pathname}} = prevProps;
        const {location: {pathname: prePathName}} = this.props;
        if (pathname !== prePathName)
        {
            await this.componentDidMount();
        }
    }

    init = async () =>
    {
        return new Promise(resolve =>
        {
            this.setState({branches: [], commits: []}, () => resolve());
        });
    };

    loadBranches = async () =>
    {
        const {match: {params: {username, repository: repositoryName}}} = this.props;
        const result = await RepositoryInfo.branches({username, name: repositoryName});
        if (result !== null)
        {
            const {branches} = result;
            this.setState({branches});
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
                this.setState({commits: [...commits, ...moreCommits]});
            }
        }
    };

    onLoadMoreButtonClick: ButtonProps['onClick'] = async () =>
    {
        await this.setState({loading: true});
        await this.loadMoreCommits();
        await this.setState({loading: false});
    };

    render()
    {
        const {branches, loading, commits} = this.state;
        const {match: {params: {repository: repositoryName, path, username}}} = this.props;
        return (<View onLoadMoreButtonClick={this.onLoadMoreButtonClick} branches={branches}
                      loading={loading}
                      commits={commits}
                      path={path}
                      repository={{username, name: repositoryName}} />);
    }
}

export default withRouter(Commits);