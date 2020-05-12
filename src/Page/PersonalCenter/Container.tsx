import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../Router';
import qs from 'querystring';
import {TabsProps} from 'antd/lib/tabs';
import CONFIG from '../../CONFIG';
import Repositories from './Component/Repositories';
import Groups from './Component/Groups';
import Collaborations from './Component/Collaborations';
import Stars from './Component/Stars';
import {Profile as ProfileApi} from '../../Api/Profile';
import {promisify} from 'util';
import {Tab} from './Interface';

interface IProps extends RouteComponentProps<RouterInterface.IPersonalCenter> {}

interface IState
{
    activeTabKey: string,
    isOwnProfile: boolean,
}

class PersonalCenter extends PureComponent<Readonly<IProps>, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            activeTabKey: '',
            isOwnProfile: false,
        };
    }

    async componentDidMount()
    {
        this.setTitle();
        await this.loadIsOwnProfile();
        this.setActiveTabKey();
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {location: {search}, match: {params: {username}}} = this.props;
        const {location: {search: prevSearch}, match: {params: {username: prevUsername}}} = prevProps;
        if (search !== prevSearch)
        {
            this.setActiveTabKey();
        }
        if (username !== prevUsername)
        {
            await this.componentDidMount();
        }
    }

    loadIsOwnProfile = async () =>
    {
        const {match: {params: {username}}} = this.props;
        const profile = await ProfileApi.get();
        if (profile === null || username !== profile.username)
        {
            await this.setStatePromise({isOwnProfile: false});
        }
        else
        {
            await this.setStatePromise({isOwnProfile: true});
        }
    };

    setTitle = () =>
    {
        const {match: {params: {username}}} = this.props;
        document.title = `${username} - ${CONFIG.NAME}`;
    };

    setActiveTabKey = () =>
    {
        const {location: {search}} = this.props;
        const {tab} = qs.decode(search.slice(1));
        if (typeof tab === 'undefined')
        {
            this.setState({activeTabKey: 'repositories'});  // 参考 render 里面 tabs 数组内容的 key
        }
        else if (Array.isArray(tab))
        {
            this.setState({activeTabKey: tab[0]});
        }
        else
        {
            this.setState({activeTabKey: tab});
        }
    };

    onTabChange: TabsProps['onChange'] = activeKey =>
    {
        const {history} = this.props;
        history.push(`?tab=${activeKey}`);
        this.setState({activeTabKey: activeKey});
    };

    render()
    {
        const {activeTabKey, isOwnProfile} = this.state;
        const tabs: Readonly<Readonly<Tab>[]> = [
            {
                key: 'repositories',
                title: '仓库',
                component: <Repositories showCreateRepositoryButton={isOwnProfile} />,
            },
            {
                key: 'collaborations',
                title: '合作仓库',
                component: <Collaborations showAddCollaborationButton={isOwnProfile} />,
            },
            {
                key: 'stars',
                title: 'Stars',
                component: <Stars />,
            },
            {
                key: 'groups',
                title: '小组',
                component: <Groups showCreateGroupButton={isOwnProfile} />,
            },
        ];
        return (<View isOwnProfile={isOwnProfile}
                      tabs={tabs}
                      activeTabKey={activeTabKey}
                      onTabChange={this.onTabChange} />);
    }
}

export default withRouter(PersonalCenter);