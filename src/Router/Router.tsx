import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from '../Component/NotFound';
import App from '../Page/App/View';

export default () =>
{
    return (
        <BrowserRouter>
            <Switch>
                <Route component={App} />
                <Route render={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};