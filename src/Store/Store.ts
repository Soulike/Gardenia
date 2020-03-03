import {applyMiddleware, combineReducers, compose, createStore, Middleware} from 'redux';
import {IState} from './Interface';
// import 所有 Reducer
import {Reducer as RootReducer} from '../Component/Root';
import {Reducer as PullRequestReducer} from '../Page/Repository/Component/PullRequest';
import {PullRequest} from '../Class';
import {PULL_REQUEST_STATUS} from '../CONSTANT';

// Store 中的初始值，根据开发需要进行改变
const initValues: IState = {
    Root: {
        isLoggedIn: false,
    },
    PullRequest: {
        pullRequest: new PullRequest(0, 0, '', '', '', '', '', '', 0, 0, ',', '', PULL_REQUEST_STATUS.CLOSED),
        loading: true,
    },
};

// 所有中间件放在此处
const middleWares: Array<Middleware> = [];

const storeEnhancers = compose(
    applyMiddleware(...middleWares),
);

// 所有 Reducer 放在此处
const Reducer = combineReducers({
    Root: RootReducer,
    PullRequest: PullRequestReducer,
});

export default createStore(Reducer, initValues, storeEnhancers);