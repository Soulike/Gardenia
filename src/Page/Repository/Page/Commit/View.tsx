import React from 'react';
import Style from './Style.module.scss';
import {Commit as CommitClass, FileDiff} from '../../../../Class';
import {Button, Spin} from 'antd';
import CommitInfoCard from './Component/CommitInfoCard';
import Diff from '../../Component/Diff';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    commit: CommitClass;
    diff: FileDiff[];
    diffAmount: number;
    loading: boolean;
    onLoadMoreButtonClick: ButtonProps['onClick'];
}

function Commit(props: IProps)
{
    const {loading, diff, commit, diffAmount, onLoadMoreButtonClick} = props;
    return (
        <div className={Style.Commit}>
            <Spin spinning={loading}>
                <div className={Style.commitInfoCardWrapper}>
                    <CommitInfoCard commit={commit} />
                </div>
                <div className={Style.diffWrapper}>
                    <Diff fileDiffs={diff} fileDiffAmount={diffAmount} />
                    <div className={Style.loadMoreButtonWrapper}>
                        <Button disabled={loading}
                                loading={loading}
                                onClick={onLoadMoreButtonClick}
                                size={'large'} type={'primary'}>加载更多文件更改</Button>
                    </div>
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(Commit);