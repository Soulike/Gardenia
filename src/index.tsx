import 'react-app-polyfill/stable';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';
import './ModuleConfig';
import './GlobalStyle';
import {ConfigProvider} from 'antd';
import {Provider} from 'react-redux';
import zhCN from 'antd/es/locale/zh_CN';
import * as serviceWorker from './serviceWorker';
import Loading from './Page/Loading';

const Router = React.lazy(() => import('./Router'));

ReactDOM.render(
    <Suspense fallback={<Loading />}>
        <Provider store={Store}>
            <ConfigProvider locale={zhCN}>
                <Router />
            </ConfigProvider>
        </Provider>
    </Suspense>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
