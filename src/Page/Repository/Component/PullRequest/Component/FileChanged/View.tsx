import React from 'react';
import Diff from '../../../Diff';
import {FileDiff} from '../../../../../../Class';
import {Spin} from 'antd';

interface IProps
{
    fileDiffs: FileDiff[],
    loading: boolean,
}

function FileChanged(props: IProps)
{
    const {fileDiffs, loading} = props;
    return (
        <Spin spinning={loading}>
            <Diff fileDiffs={fileDiffs} />
        </Spin>
    );
}

export default React.memo(FileChanged);