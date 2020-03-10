import {AnyAction} from 'redux';
import ACTION_TYPE from './ACTION_TYPE';
import {PullRequest} from '../../../../../Class';

export function loadingAction(): AnyAction
{
    return {
        type: ACTION_TYPE.LOADING,
    };
}

export function loadedAction(pullRequest: Readonly<PullRequest>): AnyAction
{
    return {
        type: ACTION_TYPE.LOADED,
        pullRequest,
    };
}

export function modifyAction(pullRequest: Readonly<Partial<PullRequest>>): AnyAction
{
    return {
        type: ACTION_TYPE.MODIFY,
        pullRequest,
    };
}