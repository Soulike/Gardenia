import {AnyAction, Reducer} from 'redux';
import {IIssueState} from '../../../../Store';
import ACTION_TYPE from './Action/ACTION_TYPE';
import {Issue} from '../../../../Class';

const reducer: Reducer<IIssueState, AnyAction> = (state, action) =>
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
            const {issue} = action;
            return {
                ...state!,
                issue,
                loading: false,
            };
        }
        case ACTION_TYPE.MODIFY:
        {
            const {issue: preIssue} = state!;
            const {issue} = action;
            return {
                ...state!,
                issue: Issue.from({
                    ...preIssue,
                    ...issue,
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