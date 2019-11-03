import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {RouteComponentProps} from 'react-router';
import {Function as RouterFunction, Interface as RouterInterface} from '../../Router';
import {TabsProps} from 'antd/lib/tabs';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Router/CONFIG';
import {Group as GroupClass} from '../../Class';
import {Group as GroupApi} from '../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IGroup>
{
    children: ReactNode
}

interface IState
{
    tabActiveKey: string,
    group: GroupClass,
    loading: boolean,
    isAdmin: boolean,
}

class Group extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            tabActiveKey: PAGE_ID.GROUP.REPOSITORIES,
            group: new GroupClass(0, ''),
            loading: true,
            isAdmin: false,
        };
    }

    async componentDidMount()
    {
        this.setTabActiveKey();
        this.setState({loading: true});
        await Promise.all([
            this.loadGroup(),
            this.loadIsAdmin(),
        ]);
        this.setState({loading: false});
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {path}} = this.props;
        const {match: {path: prevPath}} = prevProps;
        if (path !== prevPath)
        {
            this.setTabActiveKey();
        }
    }

    loadGroup = async () =>
    {
        const {match: {params: {id}}} = this.props;
        const group = await GroupApi.info({id: Number.parseInt(id)});
        if (group !== null)
        {
            this.setState({group});
        }
    };

    loadIsAdmin = async () =>
    {
        const {match: {params: {id}}} = this.props;
        const isAdminWrapper = await GroupApi.isAdmin({id: Number.parseInt(id)});
        if (isAdminWrapper !== null)
        {
            const {isAdmin} = isAdminWrapper;
            this.setState({isAdmin});
        }
    };

    setTabActiveKey = () =>
    {
        const {match: {path}} = this.props;
        switch (path)
        {
            case PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.REPOSITORIES]:
            {
                this.setState({tabActiveKey: PAGE_ID.GROUP.REPOSITORIES});
                break;
            }
            case PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.MEMBERS]:
            {
                this.setState({tabActiveKey: PAGE_ID.GROUP.MEMBERS});
                break;
            }
            case PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.SETTINGS]:
            {
                this.setState({tabActiveKey: PAGE_ID.GROUP.SETTINGS.SETTINGS});
                break;
            }
        }
    };

    onTabChange: TabsProps['onChange'] = activeKey =>
    {
        const {match: {params: {id}}, history} = this.props;
        switch (activeKey)
        {
            case PAGE_ID.GROUP.REPOSITORIES:
            {
                history.push(RouterFunction.generateGroupRepositoriesRoute({id}));
                break;
            }
            case PAGE_ID.GROUP.MEMBERS:
            {
                history.push(RouterFunction.generateGroupMembersRoute({id}));
                break;
            }
            case PAGE_ID.GROUP.SETTINGS.SETTINGS:
            {
                history.push(RouterFunction.generateGroupSettingsRoute({id}));
                break;
            }
        }
        this.setState({tabActiveKey: activeKey});
    };

    render()
    {
        const {tabActiveKey, group, loading, isAdmin} = this.state;
        const {children} = this.props;
        return (<View onTabChange={this.onTabChange}
                      tabActiveKey={tabActiveKey}
                      group={group}
                      loading={loading} isAdmin={isAdmin}>{children}</View>);
    }
}

export default Group;