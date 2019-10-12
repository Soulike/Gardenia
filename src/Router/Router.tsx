import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from '../Component/NotFound';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from './CONFIG';

const Root = React.lazy(() => import('../Component/Root'));

export default () =>
{
    return (
        <BrowserRouter>
            <Switch>
                <Root>
                    <Switch>
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]}
                               component={PAGE_ID_TO_COMPONENT[PAGE_ID.INDEX]}
                               exact={true} />
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]}
                               component={PAGE_ID_TO_COMPONENT[PAGE_ID.LOGIN]}
                               exact={true} />
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REGISTER]}
                               component={PAGE_ID_TO_COMPONENT[PAGE_ID.REGISTER]}
                               exact={true} />
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.CREATE_REPOSITORY]}
                               component={PAGE_ID_TO_COMPONENT[PAGE_ID.CREATE_REPOSITORY]}
                               exact={true} />
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.PERSONAL_CENTER]}
                               component={PAGE_ID_TO_COMPONENT[PAGE_ID.PERSONAL_CENTER]}
                               exact={true} />
                        <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.PERSONAL_CENTER]}
                               component={PAGE_ID_TO_COMPONENT[PAGE_ID.PERSONAL_CENTER]}
                               exact={true} />
                        <Route path={Object.values(PAGE_ID.REPOSITORY).map(pageId => PAGE_ID_TO_ROUTE[pageId])}
                               component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.REPOSITORY]}
                               exact={true} />
                    </Switch>
                </Root>
                <Route render={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};