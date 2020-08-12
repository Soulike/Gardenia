import React from 'react';
import Style from './Style.module.scss';
import {ObjectType} from '../../../../CONSTANT';
import {Branch, Repository as RepositoryClass} from '../../../../Class';
import {Button, Skeleton} from 'antd';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../../../Router';

const BranchOrTagMenu = React.lazy(() => import('./Component/BranchOrTagMenu'));
const FileList = React.lazy(() => import('./Component/FileList'));
const CloneButton = React.lazy(() => import('./Component/CloneButton'));
const Empty = React.lazy(() => import('./Component/Empty'));
const FileReader = React.lazy(() => import('./Component/FileReader'));
const InfoBar = React.lazy(() => import('./Component/InfoBar'));

interface IProps
{
    repository: Readonly<RepositoryClass>,
    branches: Readonly<Branch[]>,
    tagNames: Readonly<string[]>,
    commitCount: number,
    objectType: ObjectType,
    loading: boolean,
}

function CodeView(props: Readonly<IProps>)
{
    const {
        repository: {username, name, description},
        branches,
        tagNames,
        commitCount,
        objectType,
        loading,
    } = props;
    let masterBranchName = '';
    for (const {isDefault, name} of branches)
    {
        if (isDefault)
        {
            masterBranchName = name;
        }
    }
    return (
        <div className={Style.Code}>
            <Skeleton active={true} loading={loading}>
                <div className={Style.description}>
                    {description}
                </div>
                <InfoBar commitCount={commitCount} branches={branches} />
                {
                    commitCount === 0 ?
                        <Empty /> :
                        <>
                            <div className={Style.buttonWrapper}>
                                <div className={Style.leftButtonWrapper}>
                                    <BranchOrTagMenu branches={branches} tagNames={tagNames} />
                                    <div className={Style.newPullRequestButtonWrapper}>
                                        <Link to={RouterFunction.generateRepositoryCompareRoute({
                                            sourceRepositoryUsername: username,
                                            sourceRepositoryName: name,
                                            sourceRepositoryBranch: masterBranchName,
                                            targetRepositoryBranch: masterBranchName,
                                            repositoryName: name,
                                            username,
                                        })}>
                                            <Button>创建 Pull Request</Button>
                                        </Link>
                                    </div>
                                </div>
                                <CloneButton username={username} repository={name} />
                            </div>
                            {
                                objectType === undefined || objectType === ObjectType.TREE ?
                                    <FileList /> :
                                    <FileReader />
                            }
                        </>
                }
            </Skeleton>
        </div>
    );
}

export default React.memo(CodeView);