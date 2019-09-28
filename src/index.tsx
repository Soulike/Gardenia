import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux';
import Store from './Store';
import Loading from './Component/Loading';
import './ModuleConfig';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import * as serviceWorker from './serviceWorker';

const Router = React.lazy(() => import('./Router'));

ReactDOM.render(
    <Suspense fallback={<Loading />}>
        <Provider store={Store}>
            <LocaleProvider locale={zhCN}>
                <Router />
            </LocaleProvider>
        </Provider>
    </Suspense>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
