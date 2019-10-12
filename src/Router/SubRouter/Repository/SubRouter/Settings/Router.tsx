import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';

export default () =>
{
    return (
        <Switch>
            <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.SETTINGS]}
                   component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.SETTINGS.SETTINGS]}
                   exact={true} />
        </Switch>
    );
};