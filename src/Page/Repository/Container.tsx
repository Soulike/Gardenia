import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Repository as RepositoryClass} from '../../Class';
import {Profile as ProfileApi, RepositoryInfo} from '../../Api';
import {Function as RouterFunction, Interface as RouterInterface} from '../../Router';
import {TabsProps} from 'antd/lib/tabs';
import TAB_KEY from './TAB_KEY';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Router/CONFIG';
import {connect} from 'react-redux';
import {RootState, State as StoreState} from '../../Store';

interface Props extends RouteComponentProps<RouterInterface.Repository | RouterInterface.RepositoryIssues | RouterInterface.RepositoryPullRequests | RouterInterface.RepositorySettings>
{
    isLoggedIn: RootState['isLoggedIn'],
}

interface State
{
    repository: RepositoryClass,
    loading: boolean,
    tabActiveKey: TAB_KEY,
    showSettings: boolean,
}

class Repository extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            repository: new RepositoryClass('', '', '', true),
            loading: true,
            tabActiveKey: TAB_KEY.CODE,
            showSettings: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        this.setTabActiveKey();
        await this.setRepository();
        const {isLoggedIn} = this.props;
        if (isLoggedIn)
        {
            await this.setShowSettings();
        }
        this.setState({loading: false});
    }

    setRepository = async () =>
    {
        const {match: {params: {username, repository: name}}} = this.props;
        const repository = await RepositoryInfo.repository(username, name);
        // 设置仓库基本信息
        if (repository !== null)
        {
            const {name, description} = repository;
            document.title = `${name} - ${description.length === 0 ? 'Git Demo' : description}`;
            this.setState({repository});
        }
    };

    setShowSettings = async () =>
    {
        const {repository} = this.state;
        const visitorProfile = await ProfileApi.get();
        if (visitorProfile !== null)
        {
            this.setState({
                showSettings: visitorProfile.username === repository.username,
            });
        }
    };

    async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
    {
        const {location: {pathname}, isLoggedIn} = this.props;
        const {location: {pathname: prevPathName}, isLoggedIn: preIsLoggedIn} = prevProps;
        if (pathname !== prevPathName)
        {
            this.setTabActiveKey();
        }
        if (isLoggedIn && !preIsLoggedIn)
        {
            await this.setShowSettings();
        }
    }

    setTabActiveKey = () =>
    {
        const {match: {path}} = this.props;
        const {REPOSITORY: {REPOSITORY, CODE, ISSUES, PULL_REQUESTS, SETTINGS}} = PAGE_ID;
        switch (path)
        {
            case PAGE_ID_TO_ROUTE[CODE]:
            case PAGE_ID_TO_ROUTE[REPOSITORY]:
            {
                this.setState({
                    tabActiveKey: TAB_KEY.CODE,
                });
                break;
            }
            case PAGE_ID_TO_ROUTE[ISSUES]:
            {
                this.setState({
                    tabActiveKey: TAB_KEY.ISSUES,
                });
                break;
            }
            case PAGE_ID_TO_ROUTE[PULL_REQUESTS]:
            {
                this.setState({
                    tabActiveKey: TAB_KEY.PULL_REQUESTS,
                });
                break;
            }
            case PAGE_ID_TO_ROUTE[SETTINGS]:
            {
                this.setState({
                    tabActiveKey: TAB_KEY.SETTINGS,
                });
                break;
            }
        }
    };

    onTabChange: TabsProps['onChange'] = activeKey =>
    {
        const {history} = this.props;
        const {repository: {username, name}} = this.state;
        switch (activeKey)
        {
            case TAB_KEY.CODE:
            {
                history.push(RouterFunction.generateRepositoryRoute({username, repository: name}));
                break;
            }
            case TAB_KEY.ISSUES:
            {
                history.push(RouterFunction.generateRepositoryIssuesRoute({username, repository: name}));
                break;
            }
            case TAB_KEY.PULL_REQUESTS:
            {
                history.push(RouterFunction.generateRepositoryPullRequestsRoute({username, repository: name}));
                break;
            }
            case TAB_KEY.SETTINGS:
            {
                history.push(RouterFunction.generateRepositorySettingsRoute({username, repository: name}));
                break;
            }
            default:
            {
                return;
            }
        }
    };

    render()
    {
        const {repository, loading, tabActiveKey, showSettings} = this.state;
        // 显示设置的条件：登录，且仓库属于当前用户
        return (
            <View showSettings={showSettings} repository={repository}
                  loading={loading} onTabChange={this.onTabChange} tabActiveKey={tabActiveKey} />
        );
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {Root: {isLoggedIn}} = state;
    return {isLoggedIn};
};

export default withRouter(connect(mapStateToProps)(Repository));