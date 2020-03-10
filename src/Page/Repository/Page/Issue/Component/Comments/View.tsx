import React from 'react';
import Style from './Style.module.scss';
import {IssueComment} from '../../../../../../Class';
import {ButtonProps} from 'antd/lib/button';
import {Button, Spin} from 'antd';
import Comment from '../../../../Component/Comment';

interface IProps
{
    issueCreatorUsername: string;
    comments: IssueComment[];
    onLoadMoreClick: ButtonProps['onClick'];
    loading: boolean;
}

function Comments(props: IProps)
{
    const {comments, onLoadMoreClick, loading, issueCreatorUsername} = props;
    return (
        <div className={Style.Comments}>
            <Spin spinning={loading}>
                <div className={Style.commentsWrapper}>
                    {
                        comments.map(({id, username, content, creationTime, modificationTime}) =>
                            <div className={Style.commentWrapper} key={id}>
                                <Comment topicCreatorUsername={issueCreatorUsername}
                                         username={username}
                                         content={content}
                                         modificationTime={modificationTime}
                                         creationTime={creationTime} />
                            </div>)
                    }
                </div>
                <div className={Style.loadMoreButtonWrapper}>
                    <Button type={'primary'}
                            onClick={onLoadMoreClick}
                            loading={loading}
                            disabled={loading}>加载更多</Button>
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(Comments);