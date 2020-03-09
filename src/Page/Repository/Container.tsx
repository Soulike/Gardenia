import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {RouteComponentProps} from 'react-router-dom';
import {Profile, Repository as RepositoryClass} from '../../Class';
import {Issue as IssueApi, Profile as ProfileApi, PullRequest as PullRequestApi, RepositoryInfo} from '../../Api';
import {Function as RouterFunction, Interface as RouterInterface} from '../../Router';
import {TabsProps} from 'antd/lib/tabs';
import TAB_KEY from './TAB_KEY';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Router/CONFIG';
import {connect} from 'react-redux';
import {IRootState, IState as StoreState} from '../../Store';
import CONFIG from '../../CONFIG';
import {ISSUE_STATUS, PULL_REQUEST_STATUS} from '../../CONSTANT';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode
    | RouterInterface.IRepositoryIssues
    | RouterInterface.IRepositoryPullRequests
    | RouterInterface.IRepositorySettings>
{
    isLoggedIn: IRootState['isLoggedIn'],
    children: ReactNode
}

interface IState
{
    repository: RepositoryClass,
    loading: boolean,
    tabActiveKey: TAB_KEY,
    visitorProfile: Profile | null,
    forkFrom: Readonly<Pick<RepositoryClass, 'username' | 'name'>> | null;
    openPullRequestAmount: number;
    openIssueAmount: number;
}

class Repository extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            repository: new RepositoryClass('', '', '', true),
            loading: true,
            tabActiveKey: TAB_KEY.CODE,
            visitorProfile: null,
            forkFrom: null,
            openPullRequestAmount: 0,
            openIssueAmount: 0,
        };
    }

    async componentDidMount()
    {
        const {isLoggedIn} = this.props;
        this.setTitle();
        this.setTabActiveKey();
        this.setState({loading: true});
        await Promise.all([
            this.loadRepository(),
            this.loadForkFrom(),
            this.loadOpenPullRequestAmount(),
            this.loadOpenIssueAmount(),
        ]);
        if (isLoggedIn)
        {
            await this.loadVisitorProfile();
        }
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {
            location: {pathname},
            isLoggedIn, match:
                {params: {repository, username}},
        } = this.props;
        const {
            location: {pathname: prevPathName},
            isLoggedIn: preIsLoggedIn,
            match: {params: {repository: prevRepository, username: prevUsername}},
        } = prevProps;
        if (repository !== prevRepository || username !== prevUsername)
        {
            await this.componentDidMount();
        }
        if (pathname !== prevPathName)
        {
            this.setTabActiveKey();
        }
        if (isLoggedIn && !preIsLoggedIn)
        {
            await this.loadVisitorProfile();
        }
    }

    setTitle = () =>
    {
        const {match: {params: {username, repository: name}}} = this.props;
        document.title = `${username}/${name} - ${CONFIG.NAME}`;
    };

    loadOpenIssueAmount = async () =>
    {
        const {match: {params: {username, repository: name}}} = this.props;
        const amountWrapper = await IssueApi.getAmountByRepository(
            {username, name}, ISSUE_STATUS.OPEN,
        );
        if (amountWrapper !== null)
        {
            const {amount} = amountWrapper;
            this.setState({openIssueAmount: amount});
        }
    };

    loadOpenPullRequestAmount = async () =>
    {
        const {match: {params: {username, repository: name}}} = this.props;
        const amountWrapper = await PullRequestApi.getPullRequestAmount({username, name}, PULL_REQUEST_STATUS.OPEN);
        if (amountWrapper !== null)
        {
            const {amount} = amountWrapper;
            this.setState({openPullRequestAmount: amount});
        }
    };

    loadRepository = async () =>
    {
        const {match: {params: {username, repository: repositoryName}}} = this.props;
        const repository = await RepositoryInfo.repository({username}, {name: repositoryName});
        // 设置仓库基本信息
        if (repository !== null)
        {
            this.setState({repository});
        }
    };

    loadForkFrom = async () =>
    {
        const {match: {params: {username, repository: repositoryName}}} = this.props;
        const result = await RepositoryInfo.forkFrom({username, name: repositoryName});
        if (result !== null)
        {
            const {repository} = result;
            this.setState({forkFrom: repository});
        }
    };

    loadVisitorProfile = async () =>
    {
        const visitorProfile = await ProfileApi.get();
        if (visitorProfile !== null)
        {
            this.setState({
                visitorProfile,
            });
        }
    };

    setTabActiveKey = () =>
    {
        const {match: {path}} = this.props;
        const {REPOSITORY: {REPOSITORY, CODE, ISSUES, ISSUE, PULL_REQUESTS, PULL_REQUEST, SETTINGS}} = PAGE_ID;
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
            case PAGE_ID_TO_ROUTE[ISSUE]:
            case PAGE_ID_TO_ROUTE[ISSUES]:
            {
                this.setState({
                    tabActiveKey: TAB_KEY.ISSUES,
                });
                break;
            }
            case PAGE_ID_TO_ROUTE[PULL_REQUEST]:
            case PAGE_ID_TO_ROUTE[PULL_REQUESTS]:
            {
                this.setState({
                    tabActiveKey: TAB_KEY.PULL_REQUESTS,
                });
                break;
            }
            case PAGE_ID_TO_ROUTE[SETTINGS.SETTINGS]:
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
                history.push(RouterFunction.generateRepositoryCodeRoute({username, repository: name}));
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
        const {
            repository, loading, tabActiveKey, visitorProfile, forkFrom,
            openPullRequestAmount, openIssueAmount,
        } = this.state;
        const {children, isLoggedIn} = this.props;
        return (
            <View showSettings={isLoggedIn && visitorProfile !== null && repository.username === visitorProfile.username}
                  repository={repository}
                  loading={loading}
                  onTabChange={this.onTabChange}
                  tabActiveKey={tabActiveKey}
                  forkFrom={forkFrom}
                  openPullRequestAmount={openPullRequestAmount}
                  openIssueAmount={openIssueAmount}>
                {children}
            </View>
        );
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {Root: {isLoggedIn}} = state;
    return {isLoggedIn};
};

export default connect(mapStateToProps)(Repository);