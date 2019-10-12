import {applyMiddleware, combineReducers, compose, createStore, Middleware} from 'redux';
import {State} from './Interface';
// import 所有 Reducer
import {Reducer as RootReducer} from '../Component/Root';

// Store 中的初始值，根据开发需要进行改变
const initValues: State = {
    Root: {
        isLoggedIn: false,
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
});

export default createStore(Reducer, initValues, storeEnhancers);