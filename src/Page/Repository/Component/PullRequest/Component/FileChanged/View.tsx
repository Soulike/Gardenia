import React from 'react';
import Diff from '../../../Diff';
import {FileDiff} from '../../../../../../Class';
import {Spin} from 'antd';

interface IProps
{
    fileDiffs: FileDiff[],
    fileDiffAmount: number,
    loading: boolean,
}

function FileChanged(props: IProps)
{
    const {fileDiffs, loading, fileDiffAmount} = props;
    return (
        <Spin spinning={loading}>
            <Diff fileDiffs={fileDiffs} fileDiffAmount={fileDiffAmount} />
        </Spin>
    );
}

export default React.memo(FileChanged);