import React from 'react';
import Style from './Style.module.scss';
import {PullRequest} from '../../../../../../Class';
import {Tag} from 'antd';
import {ObjectType, PULL_REQUEST_STATUS} from '../../../../../../CONSTANT';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../../../../../Router';
import {Date} from '../../../../../../Function';
import {CheckOutlined, CloseOutlined, ForkOutlined} from '@ant-design/icons';

interface IProps
{
    pullRequest: PullRequest,
}

function PullRequestInfo(props: IProps)
{
    const {
        pullRequest: {
            title, no, status,
            sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranchName,
            targetRepositoryUsername, targetRepositoryName, targetRepositoryBranchName, creationTime,
        },
    } = props;
    return (
        <div className={Style.PullRequestInfo}>
            <h1 className={Style.titleWrapper}>
                <div className={Style.title}>{title}</div>
                <div className={Style.no}>#{no}</div>
            </h1>
            <div className={Style.infoWrapper}>
                <div className={Style.tagWrapper}>
                    {getTag(status)}
                </div>
                <div className={Style.info}>
                    <div className={Style.mergeInfo}>
                        <b><Link to={RouterFunction.generatePersonalCenterRoute({username: sourceRepositoryUsername})}>
                            {sourceRepositoryUsername}
                        </Link></b> 想要将
                        <Link to={RouterFunction.generateRepositoryCodeRoute({
                            username: sourceRepositoryUsername,
                            repository: sourceRepositoryName,
                            branch: sourceRepositoryBranchName,
                            objectType: ObjectType.TREE,
                        })}>
                            <Tag color={'blue'}
                                 className={Style.tag}>{sourceRepositoryUsername}/{sourceRepositoryName}:{sourceRepositoryBranchName}</Tag>
                        </Link>
                                    合并到
                        <Link to={RouterFunction.generateRepositoryCodeRoute({
                            username: targetRepositoryUsername,
                            repository: targetRepositoryName,
                            branch: targetRepositoryBranchName,
                            objectType: ObjectType.TREE,
                        })}>
                            <Tag color={'blue'}
                                 className={Style.tag}>{targetRepositoryUsername}/{targetRepositoryName}:{targetRepositoryBranchName}</Tag>
                        </Link>
                    </div>
                    <div className={Style.creationTime}>
                        创建于 {Date.parseTimestampToDate(creationTime)}
                    </div>
                </div>
            </div>
        </div>
    );
}

function getTag(status: PULL_REQUEST_STATUS)
{
    switch (status)
    {
        case PULL_REQUEST_STATUS.CLOSED:
        {
            return <Tag color={'red'}><CloseOutlined /> 已关闭</Tag>;
        }
        case PULL_REQUEST_STATUS.MERGED:
        {
            return <Tag color={'purple'}><CheckOutlined /> 已合并</Tag>;
        }
        case PULL_REQUEST_STATUS.OPEN:
        {
            return <Tag color={'green'}><ForkOutlined /> 开启的</Tag>;
        }
    }
}

export default React.memo(PullRequestInfo);