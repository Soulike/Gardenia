import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../Router';
import {Tab} from './Interface';
import qs from 'querystring';
import {TabsProps} from 'antd/lib/tabs';
import Repositories from './Component/Repositories';
import Groups from './Component/Groups';

interface IProps extends RouteComponentProps<RouterInterface.IPersonalCenter> {}

interface IState
{
    activeTabKey: string,
}

class PersonalCenter extends PureComponent<IProps, IState>
{
    private static TABS: Tab[] = [
        {
            key: 'repositories',
            title: '仓库',
            component: <Repositories />,
        },
        {
            key: 'groups',
            title: '小组',
            component: <Groups />,
        },
    ];

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            activeTabKey: '',
        };
    }

    componentDidMount()
    {
        this.setActiveTabKey();
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {location: {search}} = this.props;
        const {location: {search: prevSearch}} = prevProps;
        if (search !== prevSearch)
        {
            this.setActiveTabKey();
        }
    }

    setActiveTabKey = () =>
    {
        const {location: {search}} = this.props;
        const {tab} = qs.decode(search.slice(1));
        if (typeof tab === 'undefined')
        {
            this.setState({activeTabKey: PersonalCenter.TABS[0].key});
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
        const {activeTabKey} = this.state;
        return (<View tabs={PersonalCenter.TABS} activeTabKey={activeTabKey} onTabChange={this.onTabChange} />);
    }
}

export default withRouter(PersonalCenter);