import {AnyAction} from 'redux';
import ACTION_TYPE from './ACTION_TYPE';
import {Issue} from '../../../../../Class';

export function loadingAction(): AnyAction
{
    return {
        type: ACTION_TYPE.LOADING,
    };
}

export function loadedAction(issue: Readonly<Issue>): AnyAction
{
    return {
        type: ACTION_TYPE.LOADED,
        issue,
    };
}

export function modifyAction(issue: Readonly<Partial<Issue>>): AnyAction
{
    return {
        type: ACTION_TYPE.MODIFY,
        issue,
    };
}