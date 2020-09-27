import React, {ReactNode, useEffect, useLayoutEffect, useState} from 'react';
import View from './View';
import {useHistory, useParams, useRouteMatch} from 'react-router-dom';
import {Repository as RepositoryClass} from '../../Class';
import {Issue as IssueApi, PullRequest as PullRequestApi, Repository as RepositoryApi, RepositoryInfo} from '../../Api';
import {Function as RouterFunction, Interface as RouterInterface} from '../../Router';
import TAB_KEY from './TAB_KEY';
import {useSelector} from 'react-redux';
import {IRootState, IState as StoreState} from '../../Store';
import * as CONFIG from '../../CONFIG';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import {ISSUE_STATUS, PULL_REQUEST_STATUS} from '../../CONSTANT';
import {TabsProps} from 'antd/lib/tabs';

interface IProps
{
    children: ReactNode
}

function Repository(props: IProps)
{
    const [repository, setRepository] = useState(new RepositoryClass('', '', '', true));
    const [loading, setLoading] = useState(false);
    const [tabActiveKey, setTabActiveKey] = useState(TAB_KEY.CODE);
    const [forkFrom, setForkFrom] = useState<Readonly<Pick<RepositoryClass, 'username' | 'name'>> | null>(null);
    const [openPullRequestAmount, setOpenPullRequestAmount] = useState(0);
    const [openIssueAmount, setOpenIssueAmount] = useState(0);
    const [showSetting, setShowSetting] = useState(false);

    const history = useHistory();
    const {objectType, commitHash, username, repositoryName} = useParams<RouterInterface.IRepositoryCode
        & RouterInterface.IRepositoryIssues
        & RouterInterface.IRepositoryPullRequests
        & RouterInterface.IRepositorySettings>();
    const {path} = useRouteMatch<RouterInterface.IRepositoryCode
        & RouterInterface.IRepositoryIssues
        & RouterInterface.IRepositoryPullRequests
        & RouterInterface.IRepositorySettings>();
    const {isLoggedIn} = useSelector<StoreState, IRootState>(({Root}) => Root);

    // 检查 URL 合法性
    useEffect(() =>
    {
        const checkURLParameter = () =>
        {
            // 只要 objectType 存在，commitHash 一定存在。如果不满足则跳转到 404
            if (objectType !== undefined && commitHash === undefined)
            {
                history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
            }
        };

        checkURLParameter();
    }, [objectType, commitHash, history]);

    // 设置页面标题
    useEffect(() =>
    {
        document.title = `${username}/${repositoryName} - ${CONFIG.NAME}`;
    }, [username, repositoryName]);

    // 检查是否应该显示设置 TAB
    useLayoutEffect(() =>
    {
        const loadShouldShowOption = async () =>
        {
            const result = await RepositoryApi.shouldShowOptions({username, name: repositoryName});
            if (result !== null)
            {
                const {showOptions} = result;
                setShowSetting(showOptions);
            }
        };

        setLoading(true);
        loadShouldShowOption().finally(() => setLoading(false));
    }, [username, repositoryName, isLoggedIn]);

    // 设置当前的 TAB
    useLayoutEffect(() =>
    {
        const {REPOSITORY: {REPOSITORY, CODE, ISSUES, ISSUE, CREATE_ISSUE, PULL_REQUESTS, PULL_REQUEST, SETTINGS, CONFLICT}} = PAGE_ID;
        switch (path)
        {
            case PAGE_ID_TO_ROUTE[CODE]:
            case PAGE_ID_TO_ROUTE[REPOSITORY]:
            {
                setTabActiveKey(TAB_KEY.CODE);
                break;
            }
            case PAGE_ID_TO_ROUTE[CREATE_ISSUE]:
            case PAGE_ID_TO_ROUTE[ISSUE]:
            case PAGE_ID_TO_ROUTE[ISSUES]:
            {
                setTabActiveKey(TAB_KEY.ISSUES);
                break;
            }
            case PAGE_ID_TO_ROUTE[PULL_REQUEST]:
            case PAGE_ID_TO_ROUTE[PULL_REQUESTS]:
            case PAGE_ID_TO_ROUTE[CONFLICT]:
            {
                setTabActiveKey(TAB_KEY.PULL_REQUESTS);
                break;
            }
            case PAGE_ID_TO_ROUTE[SETTINGS.SETTINGS]:
            {
                setTabActiveKey(TAB_KEY.SETTINGS);
                break;
            }
        }
    }, [path]);

    // 加载仓库基本信息
    useEffect(() =>
    {
        const loadRepository = async () =>
        {
            const repository = await RepositoryInfo.repository({username}, {name: repositoryName});
            // 设置仓库基本信息
            if (repository !== null)
            {
                setRepository(repository);
            }
            else
            {
                return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
            }
        };

        setLoading(true);
        loadRepository().finally(() => setLoading(false));
    }, [username, repositoryName, history]);

    // 加载 fork 信息
    useEffect(() =>
    {
        const loadForkFrom = async () =>
        {
            const result = await RepositoryInfo.forkFrom({username, name: repositoryName});
            if (result !== null)
            {
                const {repository} = result;
                setForkFrom(repository);
            }
        };

        setLoading(true);
        loadForkFrom().finally(() => setLoading(false));
    }, [username, repositoryName]);

    // 加载 Open PR 的数量
    useEffect(() =>
    {
        const loadOpenPullRequestAmount = async () =>
        {
            const amountWrapper = await PullRequestApi.getPullRequestAmount({
                username,
                name: repositoryName,
            }, PULL_REQUEST_STATUS.OPEN);
            if (amountWrapper !== null)
            {
                const {amount} = amountWrapper;
                setOpenPullRequestAmount(amount);
            }
        };

        setLoading(true);
        loadOpenPullRequestAmount().finally(() => setLoading(false));
    }, [username, repositoryName]);

    // 加载 Open Issue 的数量
    useEffect(() =>
    {
        const loadOpenIssueAmount = async () =>
        {
            const amountWrapper = await IssueApi.getAmountByRepository(
                {username, name: repositoryName}, ISSUE_STATUS.OPEN,
            );
            if (amountWrapper !== null)
            {
                const {amount} = amountWrapper;
                setOpenIssueAmount(amount);
            }
        };

        setLoading(true);
        loadOpenIssueAmount().finally(() => setLoading(false));
    }, [username, repositoryName]);

    const onTabChange: TabsProps['onChange'] = activeKey =>
    {
        switch (activeKey)
        {
            case TAB_KEY.CODE:
            {
                return history.push(RouterFunction.generateRepositoryCodeRoute({username, repositoryName}));
            }
            case TAB_KEY.ISSUES:
            {
                return history.push(RouterFunction.generateRepositoryIssuesRoute({username, repositoryName}));
            }
            case TAB_KEY.PULL_REQUESTS:
            {
                return history.push(RouterFunction.generateRepositoryPullRequestsRoute({
                    username,
                    repositoryName,
                }));
            }
            case TAB_KEY.SETTINGS:
            {
                return history.push(RouterFunction.generateRepositorySettingsRoute({username, repositoryName}));
            }
            default:
            {
                return;
            }
        }
    };

    const {children} = props;
    return (
        <View showSettings={showSetting}
              repository={repository}
              loading={loading}
              onTabChange={onTabChange}
              tabActiveKey={tabActiveKey}
              forkFrom={forkFrom}
              openPullRequestAmount={openPullRequestAmount}
              openIssueAmount={openIssueAmount}>
            {children}
        </View>);
}

export default React.memo(Repository);