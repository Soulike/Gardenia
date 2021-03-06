import React from 'react';
import Style from './Style.module.scss';
import {PullRequest as PullRequestClass} from '../../../../../../../../Class';
import {PULL_REQUEST_STATUS} from '../../../../../../../../CONSTANT';
import {Date} from '../../../../../../../../Function';
import {Function as RouterFunction} from '../../../../../../../../Router';
import {CloseOutlined, ForkOutlined, PullRequestOutlined} from '@ant-design/icons';
import NewTabLink from '../../../../../../../../Component/NewTabLink';

interface IProps
{
    pullRequest: PullRequestClass
}

function PullRequest(props: IProps)
{
    const {
        pullRequest: {
            title, status, creationTime, no,
            sourceRepositoryUsername, targetRepositoryUsername, targetRepositoryName,
        },
    } = props;
    return (
        <div className={Style.PullRequest}>
            <div className={Style.titleWrapper}>
                <div className={Style.iconWrapper} style={{color: getIconColor(status)}}>
                    {getIcon(status)}
                </div>
                <NewTabLink to={RouterFunction.generateRepositoryPullRequestRoute({
                    username: targetRepositoryUsername,
                    repositoryName: targetRepositoryName,
                    no: no!.toString(),
                })}>
                    <div className={Style.title}>{title}</div>
                </NewTabLink>
            </div>
            <div className={Style.info}>
                #{no} 由 <b>{sourceRepositoryUsername}</b> 于 {Date.parseTimestampToDifference(creationTime)} 创建
            </div>
        </div>
    );
}

function getIcon(status: PULL_REQUEST_STATUS)
{
    switch (status)
    {
        case PULL_REQUEST_STATUS.CLOSED:
        {
            return <CloseOutlined />;
        }
        case PULL_REQUEST_STATUS.MERGED:
        {
            return <PullRequestOutlined />;
        }
        case PULL_REQUEST_STATUS.OPEN:
        {
            return <ForkOutlined />;
        }
    }
}

function getIconColor(status: PULL_REQUEST_STATUS): string
{
    switch (status)
    {
        case PULL_REQUEST_STATUS.CLOSED:
        {
            return 'red';
        }
        case PULL_REQUEST_STATUS.MERGED:
        {
            return 'purple';
        }
        case PULL_REQUEST_STATUS.OPEN:
        {
            return 'green';
        }
    }
}

export default React.memo(PullRequest);