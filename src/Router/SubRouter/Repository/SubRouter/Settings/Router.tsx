import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../../../../../CONFIG';
import Loading from '../../../../../Page/Loading';
import RequireLogin from '../../../../../Component/RequireLogin';

const Settings = React.lazy(() => import('../../../../../Page/Repository/Page/Settings'));

export default () =>
{
    // 注意：OPTIONS 必须在最下面，否则会被优先匹配
    return (
        <RequireLogin>
            <Switch>
                <Suspense fallback={<Loading />}>
                    <Route path={[
                        PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.GROUPS],
                        PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS],
                        PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.OPTIONS],
                    ]} render={props => (
                        <Settings {...props}>
                            <Switch>
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.GROUPS]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.SETTINGS.GROUPS]}
                                       exact={true} />
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.SETTINGS.COLLABORATORS]}
                                       exact={true} />
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.OPTIONS]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.SETTINGS.OPTIONS]}
                                       exact={true} />
                            </Switch>
                        </Settings>
                    )} />
                </Suspense>
            </Switch>
        </RequireLogin>
    );
};