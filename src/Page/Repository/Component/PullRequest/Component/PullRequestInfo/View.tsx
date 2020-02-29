import React from 'react';
import Style from './Style.module.scss';
import {PullRequest} from '../../../../../../Class';
import {Icon, Tag} from 'antd';
import {ObjectType, PULL_REQUEST_STATUS} from '../../../../../../CONSTANT';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../../../../../Router';
import {Date} from '../../../../../../Function';

interface IProps
{
    pullRequest: PullRequest,
}

function PullRequestInfo(props: IProps)
{
    const {
        pullRequest: {
            title, no, status,
            sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
            targetRepositoryUsername, targetRepositoryName, targetRepositoryBranch, creationTime,
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
                            branch: sourceRepositoryBranch,
                            objectType: ObjectType.TREE,
                        })}>
                            <Tag color={'blue'}
                                 className={Style.tag}>{sourceRepositoryUsername}/{sourceRepositoryName}:{sourceRepositoryBranch}</Tag>
                        </Link>
                                    合并到
                        <Link to={RouterFunction.generateRepositoryCodeRoute({
                            username: targetRepositoryUsername,
                            repository: targetRepositoryName,
                            branch: targetRepositoryBranch,
                            objectType: ObjectType.TREE,
                        })}>
                            <Tag color={'blue'}
                                 className={Style.tag}>{targetRepositoryUsername}/{targetRepositoryName}:{targetRepositoryBranch}</Tag>
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
            return <Tag color={'red'}><Icon type="close" /> 已关闭</Tag>;
        }
        case PULL_REQUEST_STATUS.MERGED:
        {
            return <Tag color={'purple'}><Icon type="check" /> 已合并</Tag>;
        }
        case PULL_REQUEST_STATUS.OPEN:
        {
            return <Tag color={'green'}><Icon type="fork" /> 开启的</Tag>;
        }
    }
}

export default React.memo(PullRequestInfo);