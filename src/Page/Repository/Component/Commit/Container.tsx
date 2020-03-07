import React, {PureComponent} from 'react';
import View from './View';
import {Commit as CommitClass, FileDiff} from '../../../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {RepositoryInfo} from '../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCommit> {}

interface IState
{
    commit: CommitClass;
    diff: FileDiff[];
    diffAmount: number;
    loading: boolean;
}

class Commit extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            commit: new CommitClass('', '', 'a@b.com', 0, '', ''),
            diff: [],
            diffAmount: 0,
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await Promise.all([
            this.loadCommit(),
            this.loadCommitDiffAmount(),
            this.loadCommitDiff(),
        ]);
        this.setState({loading: false});
    }

    loadCommit = async () =>
    {
        const {match: {params: {username, repository: repositoryName, commitHash}}} = this.props;
        const result = await RepositoryInfo.commit({username, name: repositoryName}, commitHash);
        if (result !== null)
        {
            const {commit} = result;
            this.setState({commit});
        }
    };

    loadCommitDiff = async () =>
    {
        const {match: {params: {username, repository: repositoryName, commitHash}}} = this.props;
        const result = await RepositoryInfo.commitDiff({username, name: repositoryName}, commitHash);
        if (result !== null)
        {
            const {diff} = result;
            this.setState({diff});
        }
    };

    loadCommitDiffAmount = async () =>
    {
        const {match: {params: {username, repository: repositoryName, commitHash}}} = this.props;
        const result = await RepositoryInfo.commitDiffAmount({username, name: repositoryName}, commitHash);
        if (result !== null)
        {
            const {amount} = result;
            this.setState({diffAmount: amount});
        }
    };

    render()
    {
        const {commit, diff, loading, diffAmount} = this.state;
        return (<View commit={commit} diff={diff} loading={loading} diffAmount={diffAmount} />);
    }
}

export default withRouter(Commit);