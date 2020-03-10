import React from 'react';
import {Commit} from '../../../../../../Class';
import CommitTimeline from '../../../../Component/CommitTimeline';
import {Button, Spin} from 'antd';
import Style from './Style.module.scss';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    commits: Commit[];
    loading: boolean;
    onLoadMoreButtonClick: ButtonProps['onClick'];
}

function PullRequestCommit(props: IProps)
{
    const {commits, loading, onLoadMoreButtonClick} = props;
    return (
        <div className={Style.PullRequestCommits}>
            <Spin spinning={loading}>
                <CommitTimeline commits={commits} />
                <div className={Style.loadMoreButtonWrapper}>
                    <Button disabled={loading} loading={loading} onClick={onLoadMoreButtonClick}>加载更早的提交历史</Button>
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(PullRequestCommit);