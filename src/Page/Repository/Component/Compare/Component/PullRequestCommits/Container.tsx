import React, {PureComponent} from 'react';
import View from './View';
import {Commit} from '../../../../../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../Router';
import {RepositoryInfo} from '../../../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare> {}

interface IState
{
    commits: Commit[];
    loading: boolean;
}

class PullRequestCommits extends PureComponent<IProps, IState>
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

    loadCommits = async () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                    username: targetRepositoryUsername, repository: targetRepositoryName, targetRepositoryBranch,
                },
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

export default withRouter(PullRequestCommits);