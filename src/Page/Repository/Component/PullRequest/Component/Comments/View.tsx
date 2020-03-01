import React from 'react';
import {PullRequest, PullRequestComment} from '../../../../../../Class';
import Style from './Style.module.scss';
import Comment from './Component/Comment';
import {Spin} from 'antd';

interface IProps
{
    pullRequest: Pick<PullRequest, 'sourceRepositoryUsername' | 'creationTime' | 'modificationTime' | 'content'>;
    pullRequestComments: PullRequestComment[];
    loading: boolean;
}

function Comments(props: IProps)
{
    const {
        pullRequest: {sourceRepositoryUsername, modificationTime, content, creationTime},
        pullRequestComments, loading,
    } = props;
    return (
        <div className={Style.Comments}>
            <Spin spinning={loading}>
                <div className={Style.commentWrapper}>
                    <Comment pullRequestComment={{
                        username: sourceRepositoryUsername,
                        content,
                        modificationTime,
                        creationTime,
                    }} pullRequest={{sourceRepositoryUsername}} />
                </div>
                {
                    pullRequestComments.map(({id, username, content, creationTime, modificationTime}) => (
                        <div className={Style.commentWrapper} key={id}>
                            <Comment pullRequestComment={{username, content, modificationTime, creationTime}}
                                     pullRequest={{sourceRepositoryUsername}} />
                        </div>
                    ))
                }
            </Spin>
        </div>
    );
}

export default React.memo(Comments);