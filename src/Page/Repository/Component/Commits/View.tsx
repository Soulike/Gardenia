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
    commits: Readonly<Commit[]>
}

function Commits(props: IProps)
{
    const {branches, loading, commits} = props;
    return (
        <div className={Style.Commits}>
            <Spin spinning={loading}>
                <div className={Style.branchesButtonWrapper}>
                    <BranchMenu branches={branches} />
                    <div className={Style.timeLineWrapper}>
                        <CommitTimeline commits={commits} />
                    </div>
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(Commits);