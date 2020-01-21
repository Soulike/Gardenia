import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';
import Loading from '../../../../../Component/Loading';
import RequireLogin from '../../../../../Component/RequireLogin';

const Settings = React.lazy(() => import('../../../../../Page/Group/Component/Settings'));

export default () =>
{
    // 注意：OPTIONS 必须在最下面，否则会被优先匹配
    return (
        <RequireLogin>
            <Switch>
                <Suspense fallback={<Loading />}>
                    <Route path={[
                        PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.OPTIONS],
                    ]} render={props => (
                        <Settings {...props}>
                            <Switch>
                                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.OPTIONS]}
                                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.GROUP.SETTINGS.OPTIONS]}
                                       exact={true} />
                            </Switch>
                        </Settings>
                    )} />
                </Suspense>
            </Switch>
        </RequireLogin>
    );
};