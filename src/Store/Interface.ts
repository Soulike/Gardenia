import {Issue, PullRequest} from '../Class';

export interface IState
{
    readonly Root: IRootState;
    readonly PullRequest: IPullRequestState;
    readonly Issue: IIssueState;
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

export interface IIssueState
{
    readonly issue: Issue,
    readonly loading: boolean,
}