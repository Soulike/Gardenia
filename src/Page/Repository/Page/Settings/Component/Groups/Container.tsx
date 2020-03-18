import React, {PureComponent} from 'react';
import View from './View';
import {Group} from '../../../../../../Class';
import {Interface as RouterInterface} from '../../../../../../Router';
import {Group as GroupApi} from '../../../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import eventEmitter from './EventEmitter';
import {GROUP_LIST_UPDATED} from './EVENT';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings> {}

interface IState
{
    groups: Group[],
    loading: boolean,
}

class Groups extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            groups: [],
            loading: true,
        };
    }

    async componentDidMount()
    {
        await this.loadGroups();
        eventEmitter.on(GROUP_LIST_UPDATED, this.loadGroups);
    }

    componentWillUnmount()
    {
        eventEmitter.removeListener(GROUP_LIST_UPDATED, this.loadGroups);
    }

    loadGroups = async () =>
    {
        const {match: {params: {username, repository: name}}} = this.props;
        this.setState({loading: true});
        const groups = await GroupApi.getByRepository({username, name});
        if (groups !== null)
        {
            this.setState({groups: [...groups]});
        }
        this.setState({loading: false});
    };

    render()
    {
        const {groups, loading} = this.state;
        return (<View groups={groups} loading={loading} />);
    }
}

export default withRouter(Groups);