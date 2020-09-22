import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router';
import {Interface as RouterInterface} from '../../../../../../Router';
import {Repository} from '../../../../../../Class';
import {RepositoryInfo as RepositoryInfoApi} from '../../../../../../Api';
import {promisify} from 'util';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../../../CONFIG';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings> {}

interface IState
{
    repository: Repository,
    loading: boolean,
}

class Options extends PureComponent<Readonly<IProps>, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            repository: new Repository('', '', '', true),
            loading: true,
        };
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        await this.loadRepository();
        await this.setStatePromise({loading: false});
    }

    loadRepository = async () =>
    {
        const {match: {params: {repositoryName, username}}, history} = this.props;
        const repositoryInfo = await RepositoryInfoApi.repository({username}, {name: repositoryName});
        if (repositoryInfo !== null)
        {
            await this.setStatePromise({repository: repositoryInfo});
        }
        else
        {
            return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    };

    render()
    {
        const {repository, loading} = this.state;
        return (<View repository={repository} loading={loading} />);
    }
}

export default withRouter(Options);