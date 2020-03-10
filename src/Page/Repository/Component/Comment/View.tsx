import React from 'react';
import Style from './Style.module.scss';
import {Date} from '../../../../Function';
import MarkdownPreviewer from '../../../../Component/MarkdownPreviewer';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../../../Router';
import {Tag} from 'antd';

interface IProps
{
    topicCreatorUsername: string;    // Issue 或 PR 的创建者 username
    username: string;
    content: string;
    creationTime: number;
    modificationTime: number;
}

function Comment(props: IProps)
{
    const {topicCreatorUsername, username, content, creationTime, modificationTime} = props;
    return (
        <div className={Style.Comment}>
            <div className={Style.header}>
                <div className={Style.usernameAndCreationTime}>
                    <Link to={RouterFunction.generatePersonalCenterRoute({username})}>
                        <b>{username}</b>
                    </Link>
                    {
                        username === topicCreatorUsername ?
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
                {content ? <MarkdownPreviewer markdown={content} loading={false} /> : <i>没有提供描述。</i>}
            </div>
        </div>
    );
}

export default React.memo(Comment);