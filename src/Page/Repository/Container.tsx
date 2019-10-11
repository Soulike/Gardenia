import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Repository as RepositoryClass} from '../../Class';
import {RepositoryInfo} from '../../Api';
import {Function as RouterFunction, Interface as RouterInterface} from '../../Router';
import {TabsProps} from 'antd/lib/tabs';
import TAB_KEY from './TAB_KEY';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Router/CONFIG';

interface Props extends RouteComponentProps<RouterInterface.Repository | RouterInterface.RepositoryIssues | RouterInterface.RepositoryPullRequests | RouterInterface.RepositorySettings> {}

interface State
{
    repository: RepositoryClass,
    loading: boolean,
    tabActiveKey: TAB_KEY
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
        const {match: {params: {username, repository: name}, path}} = this.props;
        this.setTabActiveKey(path);
        this.setState({loading: true});
        const repository = await RepositoryInfo.repository(username, name);
        this.setState({loading: false});
        // 设置仓库基本信息
        if (repository !== null)
        {
            this.setState({repository});
            const {name, description} = repository;
            document.title = `${name} - ${description.length === 0 ? 'Git Demo' : description}`;
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
    {
        const {location: {pathname}, match: {path}} = this.props;
        const {location: {pathname: prevPathName}} = prevProps;
        if (pathname !== prevPathName)
        {
            this.setTabActiveKey(path);
        }
    }

    setTabActiveKey = (path: string) =>
    {
        const {REPOSITORY, REPOSITORY_ISSUES, REPOSITORY_PULL_REQUESTS, REPOSITORY_SETTINGS} = PAGE_ID;
        switch (path)
        {
            case PAGE_ID_TO_ROUTE[REPOSITORY]:
            {
                this.setState({
                    tabActiveKey: TAB_KEY.CODE,
                });
                break;
            }
            case PAGE_ID_TO_ROUTE[REPOSITORY_ISSUES]:
            {
                this.setState({
                    tabActiveKey: TAB_KEY.ISSUES,
                });
                break;
            }
            case PAGE_ID_TO_ROUTE[REPOSITORY_PULL_REQUESTS]:
            {
                this.setState({
                    tabActiveKey: TAB_KEY.PULL_REQUESTS,
                });
                break;
            }
            case PAGE_ID_TO_ROUTE[REPOSITORY_SETTINGS]:
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
        const {repository, loading, tabActiveKey} = this.state;
        return (
            <View repository={repository}
                  loading={loading} onTabChange={this.onTabChange} tabActiveKey={tabActiveKey} />
        );
    }
}

export default withRouter(Repository);