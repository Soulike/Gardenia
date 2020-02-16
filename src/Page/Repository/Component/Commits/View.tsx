import React from 'react';
import Style from './Style.module.scss';
import BranchMenu from './Component/BranchMenu';
import {Spin} from 'antd';
import {Branch, Commit} from '../../../../Class';
import CommitTimeline from '../CommitTimeline';


interface IProps
{
    branches: Readonly<Branch[]>;
    loading: boolean;
    commits: Readonly<Commit[]>;
    repositoryName: string;
    path?: string;
}

function Commits(props: IProps)
{
    const {branches, loading, commits, path, repositoryName} = props;
    return (
        <div className={Style.Commits}>
            <Spin spinning={loading}>
                <div className={Style.infoWrapper}>
                    <BranchMenu branches={branches} />
                    {typeof path === 'string' ? <div className={Style.path}>{repositoryName}/{path}</div> : null}
                </div>
                <div className={Style.timeLineWrapper}>
                    <CommitTimeline commits={commits} />
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(Commits);