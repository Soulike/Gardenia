import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import SettingsRouter from './SubRouter/Settings';
import Loading from '../../../Page/Loading';

const Group = React.lazy(() => import('../../../Page/Group'));

export default () =>
{
    /**
     * 为了让 Groups 组件能拿到匹配 path 信息，只能采用这种写法。注意 Groups 路由必须放在最后，否则会首先匹配它
     * */
    return (
        <Suspense fallback={<Loading />}>
            <Route path={[
                PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.REPOSITORIES],
                PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.MEMBERS],
                PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.SETTINGS],
                PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.REPOSITORIES],
                PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.GROUP],
            ]} render={props =>
            {
                return (
                    <Group {...props}>
                        <Switch>
                            <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.REPOSITORIES]}
                                   component={PAGE_ID_TO_COMPONENT[PAGE_ID.GROUP.REPOSITORIES]}
                                   exact={true} />
                            <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.MEMBERS]}
                                   component={PAGE_ID_TO_COMPONENT[PAGE_ID.GROUP.MEMBERS]}
                                   exact={true} />
                            <Route path={[
                                PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.SETTINGS],
                                PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.SETTINGS.REPOSITORIES],
                            ]}
                                   render={SettingsRouter}
                                   exact={true} />
                            <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.GROUP.GROUP]}
                                   component={PAGE_ID_TO_COMPONENT[PAGE_ID.GROUP.GROUP]}
                                   exact={true} />
                        </Switch>
                    </Group>);
            }} />
        </Suspense>
    );
};