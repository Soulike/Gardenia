import React from 'react';
import CommitTimeline from '../../../../Component/CommitTimeline';
import {Commit, Repository} from '../../../../../../Class';
import {Button, Spin} from 'antd';
import Style from './Style.module.scss';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    sourceRepository: Pick<Repository, 'username' | 'name'>,
    commits: Commit[],
    loading: boolean,
    onLoadMoreButtonClick: ButtonProps['onClick'];
}

function Commits(props: IProps)
{
    const {commits, loading, sourceRepository, onLoadMoreButtonClick} = props;
    return (
        <div className={Style.Commits}>
            <Spin spinning={loading}>
                <CommitTimeline commits={commits} repository={sourceRepository} />
                <div className={Style.loadMoreButtonWrapper}>
                    <Button disabled={loading} loading={loading} onClick={onLoadMoreButtonClick}>加载更早的提交历史</Button>
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(Commits);