import React from 'react';
import Style from './Style.module.scss';
import {Issue} from '../../../../../../Class';
import {Tag} from 'antd';
import {ISSUE_STATUS} from '../../../../../../CONSTANT';
import {Date} from '../../../../../../Function';
import {CheckOutlined, InfoOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../../../../../Router';

interface IProps
{
    issue: Issue;
}

function IssueInfo(props: IProps)
{
    const {
        issue: {
            title, no, status, creationTime, username,
        },
    } = props;
    return (
        <div className={Style.IssueInfo}>
            <h1 className={Style.titleWrapper}>
                <div className={Style.title}>{title}</div>
                <div className={Style.no}>#{no}</div>
            </h1>
            <div className={Style.infoWrapper}>
                <div className={Style.tagWrapper}>
                    {getTag(status)}
                </div>
                <div className={Style.info}>
                    <div className={Style.creator}>由 <Link
                        to={RouterFunction.generatePersonalCenterRoute({username})}>
                        {username}</Link> 创建
                    </div>
                    <div className={Style.creationTime}>
                        创建于 {Date.parseTimestampToDate(creationTime)}
                    </div>
                </div>
            </div>
        </div>
    );
}

function getTag(status: ISSUE_STATUS)
{
    switch (status)
    {
        case ISSUE_STATUS.CLOSED:
        {
            return <Tag color={'red'}><CheckOutlined /> 已关闭</Tag>;
        }
        case ISSUE_STATUS.OPEN:
        {
            return <Tag color={'green'}><InfoOutlined /> 开启的</Tag>;
        }
    }
}

export default React.memo(IssueInfo);