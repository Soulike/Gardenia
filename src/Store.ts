import {applyMiddleware, combineReducers, compose, createStore, Middleware} from 'redux';
// import 所有 Reducer
import {Reducer as RootReducer} from './Component/Root';
import {Reducer as RepositoryReducer} from './Page/Repository';

// Store 中的初始值，根据开发需要进行改变
const initValues = {
    Root: {
        isLoggedIn: false,
    },
    Repository: {
        branch: '',
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
    Repository: RepositoryReducer,
});

export default createStore(Reducer, initValues, storeEnhancers);