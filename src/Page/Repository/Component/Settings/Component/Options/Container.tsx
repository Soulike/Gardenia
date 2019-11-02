import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router';
import {Interface as RouterInterface} from '../../../../../../Router';
import {Repository} from '../../../../../../Class';
import {RepositoryInfo as RepositoryInfoApi} from '../../../../../../Api/RepositoryInfo';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings> {}

interface IState
{
    repository: Repository,
    loading: boolean,
}

class Options extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            repository: new Repository('', '', '', true),
            loading: true,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadRepository();
        this.setState({loading: false});
    }

    loadRepository = async () =>
    {
        const {match: {params: {repository, username}}} = this.props;
        const repositoryInfo = await RepositoryInfoApi.repository(username, repository);
        if (repositoryInfo !== null)
        {
            this.setState({repository: repositoryInfo});
        }
    };

    render()
    {
        const {repository, loading} = this.state;
        return (<View repository={repository} loading={loading} />);
    }
}

export default withRouter(Options);