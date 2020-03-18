import React, {PureComponent} from 'react';
import View from './View';
import {Group} from '../../../../Class';
import {RouteComponentProps, withRouter} from 'react-router';
import {Interface as RouterInterface} from '../../../../Router';
import {Group as GroupApi} from '../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IPersonalCenter> {}

interface IState
{
    groups: Group[],
    administratingGroups?: Group[],
    loading: boolean,
}

class Groups extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
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

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username}}} = this.props;
        const {match: {params: {username: prevUsername}}} = prevProps;
        if (username !== prevUsername)
        {
            await this.componentDidMount();
        }
    }

    loadGroups = async () =>
    {
        const {match: {params: {username}}} = this.props;
        this.setState({loading: true});
        const groups = await GroupApi.getByAccount({username});
        if (groups !== null)
        {
            this.setState({groups: [...groups]});
        }
        this.setState({loading: false});
    };

    loadAdministratingGroups = async () =>
    {
        const {match: {params: {username}}} = this.props;
        this.setState({loading: true});
        const groups = await GroupApi.getAdministratingByAccount({username});
        if (groups !== null)
        {
            this.setState({administratingGroups: [...groups]});
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