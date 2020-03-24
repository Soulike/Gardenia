import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {IMenuItem} from './Interface';
import {PAGE_ID} from '../../../../Router/CONFIG';
import {RouteComponentProps} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../Router';
import {SettingOutlined} from '@ant-design/icons';
import {promisify} from 'util';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings>
{
    children: ReactNode,
}

interface IState
{
    activeItemKey: string,
    menuItems: IMenuItem[],
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
        };
    }

    async componentDidMount()
    {
        await Promise.all([
            this.initMenuItems(),
            this.setActiveMenuItemKey(),
        ]);
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {path: prePath}} = prevProps;
        const {match: {path}} = this.props;
        if (prePath !== path)
        {
            await this.setActiveMenuItemKey();
        }
    }

    initMenuItems = async () =>
    {
        const {match: {params: {username, repository}}} = this.props;
        await this.setStatePromise({
            menuItems: [
                {
                    icon: <SettingOutlined />,
                    title: '设置',
                    key: PAGE_ID.REPOSITORY.SETTINGS.OPTIONS,
                    to: RouterFunction.generateRepositorySettingsOptionsRoute({username, repository}),
                },
            ],
        });
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
        const {activeItemKey, menuItems} = this.state;
        return (
            <View menuItems={menuItems} activeItemKey={activeItemKey}>{children}</View>);
    }
}

export default Settings;