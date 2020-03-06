import React from 'react';
import Style from './Style.module.scss';
import BranchMenu from './Component/BranchMenu';
import {Button, Spin} from 'antd';
import {Branch, Commit} from '../../../../Class';
import CommitTimeline from '../CommitTimeline';
import {ButtonProps} from 'antd/lib/button';


interface IProps
{
    branches: Readonly<Branch[]>;
    loading: boolean;
    commits: Readonly<Commit[]>;
    repositoryName: string;
    path?: string;
    onLoadMoreButtonClick: ButtonProps['onClick'];
}

function Commits(props: IProps)
{
    const {branches, loading, commits, path, repositoryName, onLoadMoreButtonClick} = props;
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
                <div className={Style.loadMoreButtonWrapper}>
                    <Button disabled={loading} loading={loading} onClick={onLoadMoreButtonClick}>加载更早的提交历史</Button>
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(Commits);