import React from 'react';
import Style from './Style.module.scss';
import {Date} from '../../../../Function';
import MarkdownPreviewer from '../../../../Component/MarkdownPreviewer';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../../../Router';
import {Spin, Tag} from 'antd';
import {Profile} from '../../../../Class';
import Avatar from '../../../../Component/Avatar';

interface IProps
{
    topicCreatorUsername: string;    // Issue 或 PR 的创建者 username
    profile: Profile | null;
    loading: boolean;
    content: string;
    creationTime: number;
    modificationTime: number;
}

function Comment(props: IProps)
{
    const {topicCreatorUsername, content, creationTime, modificationTime, profile, loading} = props;
    return (
        <div className={Style.Comment}>
            <Spin spinning={loading}>
                {
                    profile === null ? null : (
                        <>
                            <div className={Style.header}>
                                <div className={Style.profileAndCreationTime}>
                                    <Link to={RouterFunction.generatePersonalCenterRoute({username: profile.username})}
                                          className={Style.profileWrapper}>
                                        <div className={Style.avatarWrapper}>
                                            <Avatar avatar={profile.avatar} />
                                        </div>
                                        <b>{profile.username}</b>
                                    </Link>
                                    {
                                        profile.username === topicCreatorUsername ?
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
                        </>)
                }
            </Spin>
        </div>
    );
}

export default React.memo(Comment);