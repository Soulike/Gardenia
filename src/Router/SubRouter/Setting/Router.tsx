import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import Loading from '../../../Component/Loading';
import RequireLogin from '../../../Component/RequireLogin';

const Setting = React.lazy(() => import('../../../Page/Setting'));

export default () =>
{
    /**
     * 为了让 Setting 组件能拿到匹配 path 信息，只能采用这种写法。
     * */
    return (
        <RequireLogin>
            <Switch>
                <Suspense fallback={<Loading />}>
                    <Route path={[
                        PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.SETTING],
                        PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.PROFILE],
                        PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.AVATAR],
                    ]} render={props =>
                    {
                        return (
                            <Setting {...props}>
                                <Switch>
                                    <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.SETTING]}
                                           component={PAGE_ID_TO_COMPONENT[PAGE_ID.SETTING.SETTING]}
                                           exact={true} />
                                    <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.PROFILE]}
                                           component={PAGE_ID_TO_COMPONENT[PAGE_ID.SETTING.PROFILE]}
                                           exact={true} />
                                    <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.AVATAR]}
                                           component={PAGE_ID_TO_COMPONENT[PAGE_ID.SETTING.AVATAR]}
                                           exact={true} />
                                </Switch>
                            </Setting>);
                    }} />
                </Suspense>
            </Switch>
        </RequireLogin>
    );
};