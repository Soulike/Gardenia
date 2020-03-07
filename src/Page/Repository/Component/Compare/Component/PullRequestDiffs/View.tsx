import React from 'react';
import {FileDiff} from '../../../../../../Class';
import {Spin} from 'antd';
import Diff from '../../../Diff';

interface IProps
{
    fileDiffs: FileDiff[];
    fileDiffAmount: number;
    loading: boolean;
}

function PullRequestDiffs(props: IProps)
{
    const {fileDiffs, loading, fileDiffAmount} = props;
    return (
        <div>
            <Spin spinning={loading}>
                <Diff fileDiffs={fileDiffs} fileDiffAmount={fileDiffAmount} />
            </Spin>
        </div>
    );
}

export default React.memo(PullRequestDiffs);