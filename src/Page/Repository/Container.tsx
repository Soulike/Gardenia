import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Profile, Repository as RepositoryClass} from '../../Class';
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
    visitorProfile?: Profile
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
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        this.setTabActiveKey();
        await Promise.all([
            this.setRepository(),
            this.setVisitorProfile(),
        ]);
        this.setState({loading: false});
    }

    setRepository = async () =>
    {
        const {match: {params: {username, repository: name}}} = this.props;
        const repository = await RepositoryInfo.repository(username, name);
        // 设置仓库基本信息
        if (repository !== null)
        {
            this.setState({repository});
            const {name, description} = repository;
            document.title = `${name} - ${description.length === 0 ? 'Git Demo' : description}`;
        }
    };

    setVisitorProfile = async () =>
    {
        const {isLoggedIn} = this.props;
        if (isLoggedIn)
        {
            const visitorProfile = await ProfileApi.get();
            if (visitorProfile !== null)
            {
                this.setState({visitorProfile});
            }
        }
    };

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
    {
        const {location: {pathname}} = this.props;
        const {location: {pathname: prevPathName}} = prevProps;
        if (pathname !== prevPathName)
        {
            this.setTabActiveKey();
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
        const {repository, loading, tabActiveKey, visitorProfile} = this.state;
        const {isLoggedIn} = this.props;
        // 显示设置的条件：登录，且仓库属于当前用户
        const showSettings = isLoggedIn && visitorProfile !== undefined && visitorProfile.username === repository.username;
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