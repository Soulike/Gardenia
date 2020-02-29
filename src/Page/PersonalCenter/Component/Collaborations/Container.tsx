import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {Repository} from '../../../../Class';
import {Collaborator as CollaboratorApi} from '../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IPersonalCenter> {}

interface IState
{
    repositories: Repository[];
    loading: boolean;
}

class Collaborations extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            repositories: [],
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadRepositories();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username}}} = this.props;
        const {match: {params: {username: prevUsername}}} = prevProps;
        if (username !== prevUsername)
        {
            await this.componentDidMount();
        }
    }

    loadRepositories = async () =>
    {
        const {match: {params: {username}}} = this.props;
        const result = await CollaboratorApi.getCollaboratingRepositories({username});
        if (result !== null)
        {
            const {repositories} = result;
            this.setState({repositories});
        }
    };

    render()
    {
        const {repositories, loading} = this.state;
        return (<View repositories={repositories} loading={loading} />);
    }
}

export default withRouter(Collaborations);