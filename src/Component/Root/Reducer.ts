import {Reducer} from 'redux';
import {SET_LOGGED_IN, SET_LOGGED_OUT} from './Action/ACTION_TYPE';

const reducer: Reducer = (state, action) =>
{
    const {type} = action;
    switch (type)
    {
        case SET_LOGGED_IN:
        {
            return {
                ...state,
                isLoggedIn: true,
            };
        }
        case SET_LOGGED_OUT:
        {
            return {
                ...state,
                isLoggedIn: false,
            };
        }
        default:
        {
            return {
                ...state,
            };
        }
    }
};

export default reducer;