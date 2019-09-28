import {Action} from 'redux';
import {SET_LOGGED_IN, SET_LOGGED_OUT} from './ACTION_TYPE';

export function setLoggedInAction(): Action
{
    return {
        type: SET_LOGGED_IN,
    };
}

export function setLoggedOutAction(): Action
{
    return {
        type: SET_LOGGED_OUT,
    };
}