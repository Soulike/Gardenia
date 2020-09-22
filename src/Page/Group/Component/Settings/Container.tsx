import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {IMenuItem} from './Interface';
import {RouteComponentProps} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../Router';
import {HomeOutlined, SettingOutlined} from '@ant-design/icons';
import {promisify} from 'util';
import {Group as GroupApi} from '../../../../Api';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';

interface IProps extends RouteComponentProps<RouterInterface.IGroupSettings>
{
    children: ReactNode,
}

interface IState
{
    activeItemKey: string,
    menuItems: IMenuItem[],
    loading: boolean,
}

class Settings extends PureComponent<Readonly<IProps>, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            menuItems: [],
            activeItemKey: PAGE_ID.REPOSITORY.SETTINGS.OPTIONS,
            loading: false,
        };
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        const isAdmin = await this.isAdmin();
        await this.setStatePromise({loading: false});
        if (isAdmin)
        {
            await Promise.all([
                this.initMenuItems(),
                this.setActiveMenuItemKey(),
            ]);
        }
        else
        {
            const {history} = this.props;
            return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.REPOSITORIES]);
        }
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {path: prePath, params: {id: prevId}}} = prevProps;
        const {match: {path, params: {id}}} = this.props;
        if (id !== prevId)
        {
            await this.componentDidMount();
        }
        else if (prePath !== path)
        {
            await this.setActiveMenuItemKey();
        }
    }

    initMenuItems = async () =>
    {
        const {match: {params: {id}}} = this.props;
        await this.setStatePromise({
            menuItems: [
                {
                    icon: <SettingOutlined />,
                    title: '设置',
                    key: PAGE_ID.GROUP.SETTINGS.OPTIONS,
                    to: RouterFunction.generateGroupSettingsRoute({id}),
                },
                {
                    icon: <HomeOutlined />,
                    title: '仓库管理',
                    key: PAGE_ID.GROUP.SETTINGS.REPOSITORIES,
                    to: RouterFunction.generateGroupSettingsRepositoriesRoute({id}),
                },
            ],
        });
    };

    isAdmin = async () =>
    {
        const {match: {params: {id}}} = this.props;
        const isAdminWrapper = await GroupApi.isAdmin({id: Number.parseInt(id)});
        if (isAdminWrapper !== null)
        {
            const {isAdmin} = isAdminWrapper;
            return isAdmin;
        }
        else
        {
            return false;
        }
    };

    setActiveMenuItemKey = async () =>
    {
        const {location: {pathname}} = this.props;
        const {menuItems} = this.state;
        for (const {to, key} of menuItems)
        {
            if (to === pathname)
            {
                await this.setStatePromise({
                    activeItemKey: key,
                });
                break;
            }
        }
    };

    render()
    {
        const {children} = this.props;
        const {activeItemKey, menuItems, loading} = this.state;
        return (
            <View loading={loading} menuItems={menuItems} activeItemKey={activeItemKey}>{children}</View>);
    }
}

export default Settings;