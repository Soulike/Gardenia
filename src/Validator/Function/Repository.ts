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

export function issueComment(comment: string): boolean
{
    return Repository.ISSUE_COMMENT.test(comment);
}

export function pullRequestComment(comment: string): boolean
{
    return Repository.PULL_REQUEST_COMMENT.test(comment);
}

export function codeCommentContent(content: string): boolean
{
    return Repository.CODE_COMMENT_CONTENT.test(content);
}