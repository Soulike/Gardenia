import React from 'react';
import {Commit} from '../../../../../../Class';
import CommitTimeline from '../../../CommitTimeline';
import {Spin} from 'antd';

interface IProps
{
    commits: Commit[];
    loading: boolean;
}

function PullRequestCommit(props: IProps)
{
    const {commits, loading} = props;
    return (
        <div>
            <Spin spinning={loading}>
                <CommitTimeline commits={commits} />
            </Spin>
        </div>
    );
}

export default React.memo(PullRequestCommit);