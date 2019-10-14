import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {MenuItem} from './Interface';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Router/CONFIG';
import {RouteComponentProps} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../Router';

interface Props extends RouteComponentProps<RouterInterface.RepositorySettings>
{
    children: ReactNode,
}

interface State
{
    activeItemKey: string,
    menuItems: MenuItem[],
}

class Settings extends PureComponent<Props, State>
{
    constructor(props: Props)
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

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
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
                    title: '选项',
                    key: PAGE_ID.REPOSITORY.SETTINGS.OPTIONS,
                    to: RouterFunction.generateRepositorySettingsOptionsRoute({username, repository}),
                },
                {
                    title: '团队',
                    key: PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS,
                    to: RouterFunction.generateRepositoryCollaboratorsRoute({username, repository}),
                },
                {
                    title: '分支',
                    key: PAGE_ID.REPOSITORY.SETTINGS.BRANCHES,
                    to: RouterFunction.generateRepositoryBranchesRoute({username, repository}),
                },
            ],
        });
    };

    setActiveMenuItemKey = () =>
    {
        const {match: {path}} = this.props;
        switch (path)
        {
            case PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.OPTIONS]:
            {
                this.setState({activeItemKey: PAGE_ID.REPOSITORY.SETTINGS.OPTIONS});
                break;
            }
            case PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS]:
            {
                this.setState({activeItemKey: PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS});
                break;
            }
            case PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.BRANCHES]:
            {
                this.setState({activeItemKey: PAGE_ID.REPOSITORY.SETTINGS.BRANCHES});
                break;
            }
            default:
            {
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