import {AnyAction} from 'redux';
import ActionType from './ACTION_TYPE';

export function setLoggedInAction(): AnyAction
{
    return {
        type: ActionType.SET_LOGGED_IN,
    };
}

export function setLoggedOutAction(): AnyAction
{
    return {
        type: ActionType.SET_LOGGED_OUT,
    };
}