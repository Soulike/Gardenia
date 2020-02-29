import React, {PureComponent} from 'react';
import {Commit, PullRequest} from '../../../../../../Class';
import View from './View';
import {RepositoryInfo} from '../../../../../../Api';

interface IProps
{
    pullRequest: PullRequest,
}

interface IState
{
    commits: Commit[],
    loading: boolean,
}

class Commits extends PureComponent<IProps, IState>
{
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
        this.setState({loading: true});
        await this.loadCommits();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {pullRequest} = this.props;
        const {pullRequest: prevPullRequest} = prevProps;
        if (pullRequest !== prevPullRequest)
        {
            await this.componentDidMount();
        }
    }

    loadCommits = async () =>
    {
        const {
            pullRequest: {
                sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                targetRepositoryUsername, targetRepositoryName, targetRepositoryBranch,
            },
        } = this.props;
        const commitsWrapper = await RepositoryInfo.forkCommitHistory(
            {username: sourceRepositoryUsername, name: sourceRepositoryName},
            sourceRepositoryBranch,
            {username: targetRepositoryUsername, name: targetRepositoryName},
            targetRepositoryBranch);
        if (commitsWrapper !== null)
        {
            const {commits} = commitsWrapper;
            this.setState({commits});
        }
    };

    render()
    {
        const {commits, loading} = this.state;
        return (<View commits={commits} loading={loading} />);
    }
}

export default Commits;