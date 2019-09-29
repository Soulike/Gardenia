import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Commit, Repository as RepositoryClass} from '../../Class';
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
    setBranch: (branch: string) => any
}

interface State
{
    repository: RepositoryClass,
    branches: Array<string>,
    commitCount: number,
    lastCommit: Commit,
    loading: boolean,
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
            lastCommit: new Commit('', '', '', '', ''),
            loading: true,
        };
    }


    async componentDidMount()
    {
        const {match: {params: {username, repository: name}}} = this.props;
        const [repository, branches, commitCountWrapper, lastCommit] = await Promise.all([
            RepositoryInfo.repository(username, name),
            RepositoryInfo.branch(username, name),
            RepositoryInfo.commitCount(username, name, 'HEAD'),
            RepositoryInfo.lastCommit(username, name, 'HEAD'),
        ]);
        if (repository !== null)
        {
            this.setState({repository});
            const {name, description} = repository;
            document.title = `${name} - ${description.length === 0 ? 'Git Demo' : description}`;
        }
        if (branches !== null)
        {
            const {setBranch} = this.props;
            this.setState({branches});
            setBranch(branches[0]);
        }
        if (commitCountWrapper !== null)
        {
            this.setState({commitCount: commitCountWrapper.commitCount});
        }
        if (lastCommit !== null)
        {
            this.setState({lastCommit});
        }
        this.setState({loading: false});
    }

    render()
    {
        const {repository, commitCount, branches, lastCommit, loading} = this.state;
        return (
            <View repository={repository}
                  commitCount={commitCount}
                  loading={loading}
                  branches={branches}
                  lastCommit={lastCommit} />
        );
    }
}

const mapDispatchToProps = {
    setBranch: setBranchAction,
};

export default withRouter(connect(null, mapDispatchToProps)(Repository));