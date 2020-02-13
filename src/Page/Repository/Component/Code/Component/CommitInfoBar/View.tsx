import React from 'react';
import Style from './Style.module.scss';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../../../../../Router';
import {Commit} from '../../../../../../Class';
import {Tooltip} from 'antd';
import {Date} from '../../../../../../Function';

interface IProps
{
    lastCommit: Readonly<Commit>,
}

function CommitInfoBar(props: IProps)
{
    const {lastCommit: {committerName, commitHash, message, timestamp}} = props;
    return (
        <div className={Style.CommitInfoBar}>
            <div className={Style.left}>
                <Link className={Style.name}
                      to={RouterFunction.generatePersonalCenterRoute({username: committerName})}>
                    {committerName}
                </Link>
                <div className={Style.message}>{message}</div>
            </div>
            <div className={Style.right}>
                <div className={Style.time}>{Date.parseTimestampToDifference(timestamp)}</div>
                <Tooltip title={commitHash}>
                    <div className={Style.commitHash}>最后提交：{commitHash.slice(0, 7)}</div>
                </Tooltip>
            </div>
        </div>
    );
}

export default React.memo(CommitInfoBar);