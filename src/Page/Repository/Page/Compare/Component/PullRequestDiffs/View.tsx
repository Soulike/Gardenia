import React from 'react';
import {FileDiff} from '../../../../../../Class';
import {Button, Spin} from 'antd';
import Diff from '../../../../Component/Diff';
import {ButtonProps} from 'antd/lib/button';
import Style from './Style.module.scss';

interface IProps
{
    fileDiffs: FileDiff[];
    fileDiffAmount: number;
    loading: boolean;
    onLoadMoreButtonClick: ButtonProps['onClick'];
}

function PullRequestDiffs(props: IProps)
{
    const {fileDiffs, loading, fileDiffAmount, onLoadMoreButtonClick} = props;
    return (
        <div className={Style.PullRequestDiffs}>
            <Spin spinning={loading}>
                <Diff fileDiffs={fileDiffs} fileDiffAmount={fileDiffAmount} />
                <div className={Style.loadMoreButtonWrapper}>
                    <Button disabled={loading}
                            loading={loading}
                            onClick={onLoadMoreButtonClick}
                            size={'large'} type={'primary'}>加载更多文件更改</Button>
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(PullRequestDiffs);