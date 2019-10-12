import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';
import Loading from '../../../../../Component/Loading';

export default () =>
{
    return (
        <Switch>
            <Suspense fallback={<Loading />}>
                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY.SETTINGS.SETTINGS]}
                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.REPOSITORY.SETTINGS.SETTINGS]}
                       exact={true} />
            </Suspense>
        </Switch>
    );
};