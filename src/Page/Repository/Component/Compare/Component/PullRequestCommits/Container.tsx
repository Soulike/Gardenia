import React, {PureComponent} from 'react';
import View from './View';
import {Commit} from '../../../../../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../Router';
import {RepositoryInfo} from '../../../../../../Api';
import {ButtonProps} from 'antd/lib/button';
import {notification} from 'antd';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare> {}

interface IState
{
    commits: Commit[];
    loading: boolean;
}

class PullRequestCommits extends PureComponent<IProps, IState>
{
    private static COMMIT_AMOUNT_PER_PAGE = 50;

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            commits: [],
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true, commits: []});
        await this.loadMoreCommits();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {
            match: {
                params: {
                    username: targetRepositoryUsername, repository: targetRepositoryName,
                    targetRepositoryBranch,
                    sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                },
            },
        } = this.props;
        const {
            match: {
                params: {
                    username: prevTargetRepositoryUsername, repository: prevTargetRepositoryName,
                    targetRepositoryBranch: prevTargetRepositoryBranch,
                    sourceRepositoryUsername: prevSourceRepositoryUsername,
                    sourceRepositoryName: prevSourceRepositoryName,
                    sourceRepositoryBranch: prevSourceRepositoryBranch,
                },
            },
        } = prevProps;
        if (targetRepositoryUsername !== prevTargetRepositoryUsername
            || targetRepositoryName !== prevTargetRepositoryName
            || targetRepositoryBranch !== prevTargetRepositoryBranch
            || sourceRepositoryUsername !== prevSourceRepositoryUsername
            || sourceRepositoryName !== prevSourceRepositoryName
            || sourceRepositoryBranch !== prevSourceRepositoryBranch)
        {
            await this.componentDidMount();
        }
    }

    loadMoreCommits = async () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                    username: targetRepositoryUsername, repository: targetRepositoryName, targetRepositoryBranch,
                },
            },
        } = this.props;
        const {commits} = this.state;
        const commitsWrapper = await RepositoryInfo.forkCommitHistory(
            {username: sourceRepositoryUsername, name: sourceRepositoryName},
            sourceRepositoryBranch,
            {username: targetRepositoryUsername, name: targetRepositoryName},
            targetRepositoryBranch,
            commits.length, PullRequestCommits.COMMIT_AMOUNT_PER_PAGE);
        if (commitsWrapper !== null)
        {
            const {commits: moreCommits} = commitsWrapper;
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
        const {commits, loading} = this.state;
        return (<View onLoadMoreButtonClick={this.onLoadMoreButtonClick} commits={commits} loading={loading} />);
    }
}

export default withRouter(PullRequestCommits);