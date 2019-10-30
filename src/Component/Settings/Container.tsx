import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {IMenuItem} from './Interface';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Router/CONFIG';
import {RouteComponentProps} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../Router';
import {Icon} from 'antd';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings>
{
    children: ReactNode,
}

interface IState
{
    activeItemKey: string,
    menuItems: IMenuItem[],
}

class Settings extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            menuItems: [],
            activeItemKey: PAGE_ID.REPOSITORY.SETTINGS.OPTIONS,
        };
    }

    componentDidMount()
    {
        this.initMenuItems();
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

    initMenuItems = () =>
    {
        const {match: {params: {username, repository}}} = this.props;
        this.setState({
            menuItems: [
                {
                    icon: <Icon type="setting" />,
                    title: '选项',
                    key: PAGE_ID.REPOSITORY.SETTINGS.OPTIONS,
                    to: RouterFunction.generateRepositorySettingsOptionsRoute({username, repository}),
                },
                {
                    icon: <Icon type="team" />,
                    title: '团队',
                    key: PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS,
                    to: RouterFunction.generateRepositoryCollaboratorsRoute({username, repository}),
                },
                {
                    icon: <Icon type="branches" />,
                    title: '分支',
                    key: PAGE_ID.REPOSITORY.SETTINGS.BRANCHES,
                    to: RouterFunction.generateRepositoryBranchesRoute({username, repository}),
                },
            ],
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