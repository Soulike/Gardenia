import React from 'react';
import Style from './Style.module.scss';
import {Conflict as ConflictClass, PullRequest} from '../../../../Class';
import {Alert, Spin} from 'antd';
import NewTabLink from '../../../../Component/NewTabLink';
import {Function as RouterFunction} from '../../../../Router';
import {ObjectType} from '../../../../CONSTANT';
import ConflictEditor from './Component/ConflictEditor';

export interface IConflictProps
{
    loading: boolean;
    pullRequest: PullRequest;
    conflicts: ConflictClass[];
}

function Conflict(props: IConflictProps)
{
    const {
        loading,
        pullRequest: {
            sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranchName,
            targetRepositoryUsername, targetRepositoryName, targetRepositoryBranchName,
        },
        conflicts,
    } = props;
    return (
        <div className={Style.Conflict}>
            <Spin spinning={loading}>
                <div className={Style.alert}>
                    <Alert type={'info'} banner={true}
                           showIcon={true}
                           message={
                               <div>
                                   正在解决 <NewTabLink to={RouterFunction.generateRepositoryCodeRoute({
                                   username: sourceRepositoryUsername,
                                   repository: sourceRepositoryName,
                                   objectType: ObjectType.TREE,
                                   branch: sourceRepositoryBranchName,
                               })}>
                                   <code>{sourceRepositoryUsername}/{sourceRepositoryName}:{sourceRepositoryBranchName}</code>
                               </NewTabLink> 到 <NewTabLink to={RouterFunction.generateRepositoryCodeRoute({
                                   username: targetRepositoryUsername,
                                   repository: targetRepositoryName,
                                   objectType: ObjectType.TREE,
                                   branch: targetRepositoryBranchName,
                               })}>
                                   <code>{targetRepositoryUsername}/{targetRepositoryName}:{targetRepositoryBranchName}</code>
                               </NewTabLink> 的合并冲突
                               </div>} />
                    <Alert type={'warning'} banner={true}
                           showIcon={true}
                           message={
                               <div>
                                   所做的修改将被提交到 <code>{sourceRepositoryUsername}/{sourceRepositoryName}:{sourceRepositoryBranchName}</code>
                               </div>} />
                </div>
                <div className={Style.conflictsWrapper}>
                    {
                        conflicts.map(conflict =>
                            <div key={conflict.filePath} className={Style.conflictWrapper}>
                                <ConflictEditor conflict={conflict} />
                            </div>)
                    }
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(Conflict);