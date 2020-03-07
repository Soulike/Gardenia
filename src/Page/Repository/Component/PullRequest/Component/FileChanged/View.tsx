import React from 'react';
import Diff from '../../../Diff';
import {FileDiff} from '../../../../../../Class';
import {Button, Spin} from 'antd';
import Style from './Style.module.scss';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    fileDiffs: FileDiff[],
    fileDiffAmount: number,
    loading: boolean,
    onLoadMoreButtonClick: ButtonProps['onClick'];
}

function FileChanged(props: IProps)
{
    const {fileDiffs, loading, fileDiffAmount, onLoadMoreButtonClick} = props;
    return (
        <div className={Style.FileChanged}>
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

export default React.memo(FileChanged);