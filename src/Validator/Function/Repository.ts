import {Repository} from '../REGEXP';

export function name(name: string): boolean
{
    return Repository.NAME.test(name);
}

export function issueTitle(title: string): boolean
{
    return Repository.ISSUE_TITLE.test(title);
}

export function pullRequestTitle(title: string): boolean
{
    return Repository.PULL_REQUEST_TITLE.test(title);
}