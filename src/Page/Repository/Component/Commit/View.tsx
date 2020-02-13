import React from 'react';
import Style from './Style.module.scss';
import {Commit as CommitClass, FileDiff} from '../../../../Class';
import {Spin} from 'antd';

interface IProps
{
    commit: CommitClass;
    diff: FileDiff[];
    loading: boolean;
}

function Commit(props: IProps)
{
    const {loading, diff, commit} = props;
    return (
        <div className={Style.Commit}>
            <Spin spinning={loading}>
                <pre>
                    {JSON.stringify(commit, null, 4)}
                </pre>
                <pre>
                    {JSON.stringify(diff, null, 4)}
                </pre>
            </Spin>
        </div>
    );
}

export default React.memo(Commit);