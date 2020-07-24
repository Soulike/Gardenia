import React from 'react';
import Style from './Style.module.scss';
import {Button, Spin} from 'antd';
import {Branch, Commit, Repository} from '../../../../Class';
import CommitTimeline from '../../Component/CommitTimeline';
import {ButtonProps} from 'antd/lib/button';
import BranchOrTagMenu from './Component/BranchOrTagMenu';


interface IProps
{
    repository: Pick<Repository, 'username' | 'name'>;
    branches: Readonly<Branch[]>;
    tags: Readonly<string[]>;
    loading: boolean;
    commits: Readonly<Commit[]>;
    path?: string;
    onLoadMoreButtonClick: ButtonProps['onClick'];
}

function Commits(props: IProps)
{
    const {
        branches, tags, loading, commits, path, repository,
        repository: {name: repositoryName},
        onLoadMoreButtonClick,
    } = props;
    return (
        <div className={Style.Commits}>
            <Spin spinning={loading}>
                <div className={Style.infoWrapper}>
                    <BranchOrTagMenu branches={branches} tags={tags} />
                    {typeof path === 'string' ? <div className={Style.path}>{repositoryName}/{path}</div> : null}
                </div>
                <div className={Style.timeLineWrapper}>
                    <CommitTimeline commits={commits} repository={repository} />
                </div>
                <div className={Style.loadMoreButtonWrapper}>
                    <Button disabled={loading} loading={loading} onClick={onLoadMoreButtonClick}>加载更早的提交历史</Button>
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(Commits);