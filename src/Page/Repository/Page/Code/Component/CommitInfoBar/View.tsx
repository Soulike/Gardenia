import React from 'react';
import Style from './Style.module.scss';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {Commit} from '../../../../../../Class';
import {Tooltip} from 'antd';
import {Date} from '../../../../../../Function';
import PersonalCenterLink from '../../../../../../Component/PersonalCenterLink';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    lastCommit: Readonly<Commit>,
}

function CommitInfoBar(props: IProps)
{
    const {
        lastCommit: {committerName, commitHash, message, timestamp, committerEmail},
        match: {params: {username, repositoryName}},
    } = props;
    return (
        <div className={Style.CommitInfoBar}>
            <div className={Style.left}>
                <PersonalCenterLink committerEmail={committerEmail} committerName={committerName} />
                <div className={Style.message}>{message}</div>
            </div>
            <div className={Style.right}>
                <div className={Style.time}>{Date.parseTimestampToDifference(timestamp)}</div>
                <Tooltip title={commitHash}>
                    <div className={Style.commitHash}>
                        最后提交：
                        <Link to={RouterFunction.generateRepositoryCommitRoute({
                            username,
                            repositoryName,
                            commitHash,
                        })}>
                            {commitHash.slice(0, 7)}
                        </Link>
                    </div>
                </Tooltip>
            </div>
        </div>
    );
}

export default withRouter(React.memo(CommitInfoBar));