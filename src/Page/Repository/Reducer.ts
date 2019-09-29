import {Reducer} from 'redux';
import {SET_BRANCH} from './Action/ACTION_TYPE';

const reducer: Reducer = (state, action) =>
{
    const {type} = action;
    switch (type)
    {
        case SET_BRANCH:
        {
            const {branch} = action;
            return {
                ...state,
                branch,
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