import React, {PureComponent} from 'react';
import View from './View';
import {Profile} from '../../../../../../../../Class';
import {Collaborator as CollaboratorApi} from '../../../../../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../../../Router';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings> {}

interface IState
{
    profiles: Profile[],
    loading: boolean
}

class CollaboratorList extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            profiles: [],
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadCollaborators();
        this.setState({loading: false});
    }

    loadCollaborators = async () =>
    {
        const {match: {params: {username, repository: name}}} = this.props;
        const result = await CollaboratorApi.getCollaborators({username, name});
        if (result !== null)
        {
            const {collaborators} = result;
            this.setState({profiles: collaborators});
        }
    };

    render()
    {
        const {profiles, loading} = this.state;
        return (<View profiles={profiles} loading={loading} />);
    }
}

export default withRouter(CollaboratorList);