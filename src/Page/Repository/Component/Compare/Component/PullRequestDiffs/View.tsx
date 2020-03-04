import React from 'react';
import {FileDiff} from '../../../../../../Class';
import {Spin} from 'antd';
import Diff from '../../../Diff';

interface IProps
{
    fileDiffs: FileDiff[];
    loading: boolean;
}

function PullRequestDiffs(props: IProps)
{
    const {fileDiffs, loading} = props;
    return (
        <div>
            <Spin spinning={loading}>
                <Diff fileDiffs={fileDiffs} />
            </Spin>
        </div>
    );
}

export default React.memo(PullRequestDiffs);