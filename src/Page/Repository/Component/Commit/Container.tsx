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
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadCommit();
        this.setState({loading: false});
    }

    loadCommit = async () =>
    {
        const {match: {params: {username, repository: repositoryName, commitHash}}} = this.props;
        const result = await RepositoryInfo.commit({username, name: repositoryName}, commitHash);
        if (result !== null)
        {
            const {commit, diff} = result;
            this.setState({commit, diff});
        }
    };

    render()
    {
        const {commit, diff, loading} = this.state;
        return (<View commit={commit} diff={diff} loading={loading} />);
    }
}

export default withRouter(Commit);