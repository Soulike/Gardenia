import {AnyAction, Reducer} from 'redux';
import {IPullRequestState} from '../../../../Store';
import ACTION_TYPE from './Action/ACTION_TYPE';
import {PullRequest} from '../../../../Class';

const reducer: Reducer<IPullRequestState, AnyAction> = (state, action) =>
{
    const {type} = action;
    switch (type)
    {
        case ACTION_TYPE.LOADING:
        {
            return {
                ...state!,
                loading: true,
            };
        }
        case ACTION_TYPE.LOADED:
        {
            const {pullRequest} = action;
            return {
                ...state!,
                pullRequest,
                loading: false,
            };
        }
        case ACTION_TYPE.MODIFY:
        {
            const {pullRequest: prePullRequest} = state!;
            const {pullRequest} = action;
            return {
                ...state!,
                pullRequest: PullRequest.from({
                    ...prePullRequest,
                    ...pullRequest,
                }),
            };
        }
        default:
        {
            return {
                ...state!,
            };
        }
    }
};

export default reducer;