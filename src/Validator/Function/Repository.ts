import {Repository} from '../REGEXP';
import {IValidatorFunction} from '../Interface';

export const name: IValidatorFunction = name =>
{
    if (typeof name !== 'string')
    {
        return false;
    }
    else
    {
        return Repository.NAME.test(name);
    }
};

export const issueTitle: IValidatorFunction = title =>
{
    if (typeof title !== 'string')
    {
        return false;
    }
    else
    {
        return Repository.ISSUE_TITLE.test(title);
    }
};

export const pullRequestTitle: IValidatorFunction = title =>
{
    if (typeof title !== 'string')
    {
        return false;
    }
    else
    {
        return Repository.PULL_REQUEST_TITLE.test(title);
    }
};

export const issueComment: IValidatorFunction = comment =>
{
    if (typeof comment !== 'string')
    {
        return false;
    }
    else
    {
        return Repository.ISSUE_COMMENT.test(comment);
    }
};

export const pullRequestComment: IValidatorFunction = comment =>
{
    if (typeof comment !== 'string')
    {
        return false;
    }
    else
    {
        return Repository.PULL_REQUEST_COMMENT.test(comment);
    }
};

export const codeCommentContent: IValidatorFunction = content =>
{
    if (typeof content !== 'string')
    {
        return false;
    }
    else
    {
        return Repository.CODE_COMMENT_CONTENT.test(content);
    }
};