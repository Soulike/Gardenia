import {Action} from 'redux';
import ActionType from './ACTION_TYPE';

export function setLoggedInAction(): Action<ActionType>
{
    return {
        type: ActionType.SET_LOGGED_IN,
    };
}

export function setLoggedOutAction(): Action<ActionType>
{
    return {
        type: ActionType.SET_LOGGED_OUT,
    };
}