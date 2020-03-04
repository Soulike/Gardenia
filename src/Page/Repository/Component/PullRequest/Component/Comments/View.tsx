import React from 'react';
import {PullRequest, PullRequestComment} from '../../../../../../Class';
import Style from './Style.module.scss';
import Comment from './Component/Comment';
import {Alert, Spin} from 'antd';
import {PULL_REQUEST_STATUS} from '../../../../../../CONSTANT';
import OperationButton from './Component/OperationButton';
import {LoadingOutlined} from '@ant-design/icons';

interface IProps
{
    pullRequest: Pick<PullRequest, 'sourceRepositoryUsername' | 'creationTime' | 'modificationTime' | 'content' | 'status'>;
    pullRequestComments: PullRequestComment[];
    loading: boolean;
    isMergeable: boolean;
}

function Comments(props: IProps)
{
    const {
        pullRequest: {sourceRepositoryUsername, modificationTime, content, creationTime, status},
        pullRequestComments, loading, isMergeable,
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
            {
                status === PULL_REQUEST_STATUS.OPEN ? (
                    <div className={Style.isMergeableWrapper}>
                        {
                            loading ? <Alert type={'warning'}
                                             icon={<LoadingOutlined />}
                                             showIcon={true}
                                             message={'正在检查是否可以自动合并'} /> :
                                isMergeable
                                    ? <Alert type={'success'} showIcon={true} message={'没有冲突，可以自动合并'} />
                                    : <Alert type={'error'} showIcon={true} message={'存在冲突，不能自动合并'} />
                        }
                    </div>
                ) : null
            }
            <div className={Style.operationButtonWrapper}>
                <OperationButton isMergeable={isMergeable} />
            </div>
        </div>
    );
}

export default React.memo(Comments);