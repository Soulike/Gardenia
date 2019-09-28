import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from '../Component/NotFound';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../CONFIG/PAGE';

const Root = React.lazy(() => import('../Component/Root'));

export default () =>
{
    return (
        <BrowserRouter>
            <Switch>
                <Root>
                    {
                        Object.values(PAGE_ID).map(pageId => <Route path={PAGE_ID_TO_ROUTE[pageId]}
                                                                    component={PAGE_ID_TO_COMPONENT[pageId]}
                                                                    exact={true}
                                                                    key={pageId} />)
                    }
                </Root>
                <Route render={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};