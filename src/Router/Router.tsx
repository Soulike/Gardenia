import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from '../Component/NotFound';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from './CONFIG';
import RepositoryRouter from './SubRouter/Repository';
import GroupRouter from './SubRouter/Group';
import SettingRouter from './SubRouter/Setting';
import Loading from '../Component/Loading';
import RequireLogin from '../Component/RequireLogin';

const Root = React.lazy(() => import('../Component/Root'));

export default () =>
{
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Root>
                    <Switch>
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]}
                               component={PAGE_ID_TO_COMPONENT[PAGE_ID.NOT_FOUND]}
                               exact={true} />
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]}
                               component={PAGE_ID_TO_COMPONENT[PAGE_ID.INDEX]}
                               exact={true} />
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]}
                               component={PAGE_ID_TO_COMPONENT[PAGE_ID.LOGIN]}
                               exact={true} />
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REGISTER]}
                               component={PAGE_ID_TO_COMPONENT[PAGE_ID.REGISTER]}
                               exact={true} />
                        <RequireLogin>
                            <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.CREATE_REPOSITORY]}
                                   component={PAGE_ID_TO_COMPONENT[PAGE_ID.CREATE_REPOSITORY]}
                                   exact={true} />
                            <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.CREATE_GROUP]}
                                   component={PAGE_ID_TO_COMPONENT[PAGE_ID.CREATE_GROUP]}
                                   exact={true} />
                            <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.SETTING]}
                                   render={SettingRouter} />
                        </RequireLogin>
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.PERSONAL_CENTER]}
                               component={PAGE_ID_TO_COMPONENT[PAGE_ID.PERSONAL_CENTER]}
                               exact={true} />
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.REPOSITORY]}
                               render={RepositoryRouter} />
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.GROUP]}
                               render={GroupRouter} />
                        <Route component={NotFound} />
                    </Switch>
                </Root>
            </Suspense>
        </BrowserRouter>
    );
};