import React from 'react';
import {Commit, Repository} from '../../../../../../Class';
import CommitTimeline from '../../../../Component/CommitTimeline';
import {Button, Spin} from 'antd';
import Style from './Style.module.scss';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    sourceRepository: Pick<Repository, 'username' | 'name'>;
    commits: Commit[];
    loading: boolean;
    onLoadMoreButtonClick: ButtonProps['onClick'];
}

function PullRequestCommit(props: IProps)
{
    const {commits, loading, sourceRepository, onLoadMoreButtonClick} = props;
    return (
        <div className={Style.PullRequestCommits}>
            <Spin spinning={loading}>
                <CommitTimeline commits={commits} repository={sourceRepository} />
                <div className={Style.loadMoreButtonWrapper}>
                    <Button disabled={loading} loading={loading} onClick={onLoadMoreButtonClick}>加载更早的提交历史</Button>
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(PullRequestCommit);