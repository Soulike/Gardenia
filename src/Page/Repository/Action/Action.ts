import {AnyAction} from 'redux';
import {SET_BRANCH} from './ACTION_TYPE';

export function setBranchAction(branch: string): AnyAction
{
    return {
        type: SET_BRANCH,
        branch,
    };
}