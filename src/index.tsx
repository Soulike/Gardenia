import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux';
import Store from './Store';
import Loading from './Component/Loading';
import * as serviceWorker from './serviceWorker';

const Router = React.lazy(() => import('./Router'));

ReactDOM.render(
    <Suspense fallback={<Loading />}>
        <Provider store={Store}>
            <Router />
        </Provider>
    </Suspense>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
