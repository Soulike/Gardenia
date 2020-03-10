import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import SettingsRouter from './SubRouter/Settings';
import Loading from '../../../Page/Loading';
import RequireLogin from '../../../Component/RequireLogin';

const Repository = React.lazy(() => import('../../../Page/Repository'));

export default () =>
{
    /**
     * 为了让 Repository 组件能拿到匹配 path 信息，只能采用这种写法。注意 Repository 路由必须放在最后，否则会首先匹配它
     * */
    return (
        <Switch>
            <Suspense fallback={<Loading />}>
                <Route path={[
                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.ISSUE],
                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.ISSUES],
                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CREATE_ISSUE],
                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.PULL_REQUEST],
                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.PULL_REQUESTS],
                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMPARE],
                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMMIT],
                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMMITS],
                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.BRANCHES],
                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.SETTINGS],
                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CODE],
                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.REPOSITORY],
                ]} render={props =>
                {
                    return (
                        <Repository {...props}>
                            <Switch>
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.ISSUE]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.ISSUE]}
                                       exact={true} />
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.ISSUES]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.ISSUES]}
                                       exact={true} />
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.PULL_REQUEST]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.PULL_REQUEST]}
                                       exact={true} />
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.PULL_REQUESTS]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.PULL_REQUESTS]}
                                       exact={true} />
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMPARE]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.COMPARE]}
                                       exact={true} />
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMMIT]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.COMMIT]}
                                       exact={true} />
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.COMMITS]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.COMMITS]}
                                       exact={true} />
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.BRANCHES]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.BRANCHES]}
                                       exact={true} />
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.SETTINGS]}
                                       component={SettingsRouter} />
                                <Route path={[
                                    PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CREATE_ISSUE],
                                ]} render={RequireLoginRoute} />
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CODE]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.CODE]}
                                       exact={true} />
                            </Switch>
                        </Repository>);
                }} />
            </Suspense>
        </Switch>
    );
};

function RequireLoginRoute()
{
    return (
        <RequireLogin>
            <Switch>
                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CREATE_ISSUE]}
                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.CREATE_ISSUE]}
                       exact={true} />
            </Switch>
        </RequireLogin>
    );
}