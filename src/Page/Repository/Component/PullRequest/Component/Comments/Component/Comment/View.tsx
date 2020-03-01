import React from 'react';
import Style from './Style.module.scss';
import {PullRequest, PullRequestComment} from '../../../../../../../../Class';
import {Date} from '../../../../../../../../Function';
import MarkdownPreviewer from '../../../../../../../../Component/MarkdownPreviewer';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../../../../../../../Router';
import {Tag} from 'antd';

interface IProps
{
    pullRequest: Pick<PullRequest, 'sourceRepositoryUsername'>,
    pullRequestComment: Pick<PullRequestComment, 'username' | 'content' | 'creationTime' | 'modificationTime'>;
}

function Comment(props: IProps)
{
    const {pullRequestComment: {username, content, creationTime, modificationTime}, pullRequest: {sourceRepositoryUsername}} = props;
    return (
        <div className={Style.Comment}>
            <div className={Style.header}>
                <div className={Style.usernameAndCreationTime}>
                    <Link to={RouterFunction.generatePersonalCenterRoute({username})}>
                        <b>{username}</b>
                    </Link>
                    {
                        username === sourceRepositoryUsername ?
                            <Tag color={'blue'} className={Style.tag}>创建者</Tag> : null
                    }
                    <div className={Style.creationTime}>
                        于 {Date.parseTimestampToDate(creationTime)} 评论
                    </div>
                </div>
                <div className={Style.modificationTime}>
                    最后编辑于 {Date.parseTimestampToDate(modificationTime)}
                </div>
            </div>
            <div className={Style.content}>
                {content ? <MarkdownPreviewer markdown={content} /> : <i>没有提供描述。</i>}
            </div>
        </div>
    );
}

export default React.memo(Comment);