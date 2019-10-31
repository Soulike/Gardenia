import React, {PureComponent} from 'react';
import View from './View';
import {Group} from '../../../../Class';
import {RouteComponentProps, withRouter} from 'react-router';
import {Interface as RouterInterface} from '../../../../Router';
import {Account as AccountApi} from '../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IPersonalCenter> {}

interface IState
{
    groups: Group[],
    administratingGroups?: Group[],
    loading: boolean,
}

class Groups extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            groups: [],
            administratingGroups: [],
            loading: true,
        };
    }

    async componentDidMount()
    {
        await Promise.all([
            this.loadGroups(),
            this.loadAdministratingGroups(),
        ]);
    }

    loadGroups = async () =>
    {
        const {match: {params: {username}}} = this.props;
        this.setState({loading: true});
        const groups = await AccountApi.getGroups(username);
        if (groups !== null)
        {
            this.setState({groups});
        }
        this.setState({loading: false});
    };

    loadAdministratingGroups = async () =>
    {
        const {match: {params: {username}}} = this.props;
        this.setState({loading: true});
        const groups = await AccountApi.getAdministratingGroups(username);
        if (groups !== null)
        {
            this.setState({administratingGroups: groups});
        }
        this.setState({loading: false});
    };

    render()
    {
        const {groups, loading, administratingGroups} = this.state;
        return (<View groups={groups} loading={loading} administratingGroups={administratingGroups} />);
    }
}

export default withRouter(Groups);