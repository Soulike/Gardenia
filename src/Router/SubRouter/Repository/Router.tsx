import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import SettingsRouter from './SubRouter/Settings';

const Repository = React.lazy(() => import('../../../Component/Repository'));

export default () =>
{
    /**
     * 为了让 Repository 组件能拿到匹配 path 信息，只能采用这种写法。注意 Repository 路由必须放在最后，否则会首先匹配它
     * */
    return (
        <BrowserRouter>
            <Route path={[
                PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.ISSUES],
                PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.PULL_REQUESTS],
                PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.SETTINGS],
                PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CODE],
                PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.REPOSITORY],
            ]} render={props =>
            {
                return (
                    <Repository {...props}>
                        <Switch>
                            <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.ISSUES]}
                                   component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.ISSUES]}
                                   exact={true} />
                            <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.PULL_REQUESTS]}
                                   component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.PULL_REQUESTS]}
                                   exact={true} />
                            <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.SETTINGS]}
                                   component={SettingsRouter} />
                            <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.CODE]}
                                   component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.CODE]}
                                   exact={true} />
                        </Switch>
                    </Repository>);
            }} />
        </BrowserRouter>
    );
};