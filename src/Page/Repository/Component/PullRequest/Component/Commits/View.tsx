import React from 'react';
import CommitTimeline from '../../../CommitTimeline';
import {Commit} from '../../../../../../Class';
import {Spin} from 'antd';

interface IProps
{
    commits: Commit[],
    loading: boolean,
}

function Commits(props: IProps)
{
    const {commits, loading} = props;
    return (
        <Spin spinning={loading}>
            <CommitTimeline commits={commits} />
        </Spin>
    );
}

export default React.memo(Commits);