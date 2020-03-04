import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {IMenuItem} from './Interface';
import {PAGE_ID} from '../../../../Router/CONFIG';
import {RouteComponentProps} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../Router';
import {BranchesOutlined, ProjectOutlined, SettingOutlined, TeamOutlined} from '@ant-design/icons';

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
        await this.initMenuItems();
        this.setActiveMenuItemKey();
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {path: prePath}} = prevProps;
        const {match: {path}} = this.props;
        if (prePath !== path)
        {
            this.setActiveMenuItemKey();
        }
    }

    initMenuItems = async () =>
    {
        return new Promise(resolve =>
        {
            const {match: {params: {username, repository}}} = this.props;
            this.setState({
                menuItems: [
                    {
                        icon: <SettingOutlined />,
                        title: '选项',
                        key: PAGE_ID.REPOSITORY.SETTINGS.OPTIONS,
                        to: RouterFunction.generateRepositorySettingsOptionsRoute({username, repository}),
                    },
                    {
                        icon: <ProjectOutlined />,
                        title: '合作者',
                        key: PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS,
                        to: RouterFunction.generateRepositorySettingsCollaboratorsRoute({username, repository}),
                    },
                    {
                        icon: <BranchesOutlined />,
                        title: '分支',
                        key: PAGE_ID.REPOSITORY.SETTINGS.BRANCHES,
                        to: RouterFunction.generateRepositorySettingsBranchesRoute({username, repository}),
                    },
                    {
                        icon: <TeamOutlined />,
                        title: '小组',
                        key: PAGE_ID.REPOSITORY.SETTINGS.GROUPS,
                        to: RouterFunction.generateRepositorySettingsGroupsRoute({username, repository}),
                    },
                ],
            }, resolve);
        });
    };

    setActiveMenuItemKey = () =>
    {
        const {location: {pathname}} = this.props;
        const {menuItems} = this.state;
        for (const {to, key} of menuItems)
        {
            if (to === pathname)
            {
                this.setState({
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