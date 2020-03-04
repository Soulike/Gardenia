import {PullRequest} from '../Class';

export interface IState
{
    readonly Root: IRootState;
    readonly PullRequest: IPullRequestState
}

export interface IRootState
{
    readonly isLoggedIn: boolean
}

export interface IPullRequestState
{
    readonly pullRequest: PullRequest,
    readonly loading: boolean,
}