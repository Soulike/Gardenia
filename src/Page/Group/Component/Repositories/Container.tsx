import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {Repository} from '../../../../Class';
import {Group as GroupApi} from '../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IGroup>
{

}

interface IState
{
    repositories: Repository[],
    loading: boolean
}

class Repositories extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            repositories: [],
            loading: true,
        };
    }

    async componentDidMount()
    {
        await this.loadRepositories();
    }

    loadRepositories = async () =>
    {
        const {match: {params: {id}}} = this.props;
        this.setState({loading: true});
        const repositories = await GroupApi.repositories({id: Number.parseInt(id)});
        if (repositories !== null)
        {
            this.setState({repositories: [...repositories]});
        }
        this.setState({loading: false});
    };


    render()
    {
        const {repositories, loading} = this.state;
        return (<View repositories={repositories} loading={loading} />);
    }
}

export default withRouter(Repositories);