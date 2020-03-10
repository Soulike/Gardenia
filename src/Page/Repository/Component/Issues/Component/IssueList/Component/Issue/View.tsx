import React from 'react';
import Style from './Style.module.scss';
import {Issue as IssueClass} from '../../../../../../../../Class';
import {Function as RouterFunction} from '../../../../../../../../Router';
import {Date} from '../../../../../../../../Function';
import {ISSUE_STATUS} from '../../../../../../../../CONSTANT';
import {CheckOutlined, InfoOutlined} from '@ant-design/icons';
import NewTabLink from '../../../../../../../../Component/NewTabLink';

interface IProps
{
    issue: IssueClass
}

function Issue(props: IProps)
{
    const {
        issue: {
            status, no, title, repositoryUsername, repositoryName, username, creationTime,
        },
    } = props;
    return (
        <div className={Style.Issue}>
            <div className={Style.titleWrapper}>
                <div className={Style.iconWrapper} style={{color: getIconColor(status)}}>
                    {getIcon(status)}
                </div>
                <NewTabLink to={RouterFunction.generateRepositoryIssueRoute({
                    username: repositoryUsername,
                    repository: repositoryName,
                    no: no!.toString(),
                })}>
                    <div className={Style.title}>{title}</div>
                </NewTabLink>
            </div>
            <div className={Style.info}>
                #{no} 由 <b>{username}</b> 于 {Date.parseTimestampToDifference(creationTime)} 创建
            </div>
        </div>
    );
}

function getIcon(status: ISSUE_STATUS)
{
    switch (status)
    {
        case ISSUE_STATUS.CLOSED:
        {
            return <CheckOutlined />;
        }
        case ISSUE_STATUS.OPEN:
        {
            return <InfoOutlined />;
        }
    }
}

function getIconColor(status: ISSUE_STATUS): string
{
    switch (status)
    {
        case ISSUE_STATUS.CLOSED:
        {
            return 'red';
        }
        case ISSUE_STATUS.OPEN:
        {
            return 'green';
        }
    }
}

export default React.memo(Issue);