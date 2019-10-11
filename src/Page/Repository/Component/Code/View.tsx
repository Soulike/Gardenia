import React from 'react';
import Style from './Style.module.scss';
import {ObjectType} from '../../../../CONSTANT';
import {Repository as RepositoryClass} from '../../../../Class';
import {Skeleton} from 'antd';

const BranchButton = React.lazy(() => import('./Component/BranchButton'));
const FileList = React.lazy(() => import('./Component/FileList'));
const CloneButton = React.lazy(() => import('./Component/CloneButton'));
const Empty = React.lazy(() => import('./Component/Empty'));
const FileReader = React.lazy(() => import('./Component/FileReader'));
const InfoBar = React.lazy(() => import('./Component/InfoBar'));

interface Props
{
    repository: RepositoryClass,
    branches: Array<string>,
    commitCount: number,
    isEmpty: boolean,
    objectType: ObjectType,
    loading: boolean,
}

function CodeView(props: Props)
{
    const {
        repository: {username, name, description},
        branches,
        commitCount,
        isEmpty,
        objectType,
        loading,
    } = props;
    return (
        <div className={Style.Code}>
            <Skeleton active={true} loading={loading}>
                <div className={Style.description}>
                    {description}
                </div>
                <InfoBar commitCount={commitCount} branchCount={branches.length} />
                {
                    isEmpty ?
                        <Empty /> :
                        <React.Fragment>
                            <div className={Style.buttonWrapper}>
                                <BranchButton branches={branches} />
                                <CloneButton username={username} repository={name} />
                            </div>
                            {
                                objectType === undefined || objectType === ObjectType.TREE ?
                                    <FileList /> :
                                    <FileReader />
                            }
                        </React.Fragment>
                }
            </Skeleton>
        </div>
    );
}

export default React.memo(CodeView);