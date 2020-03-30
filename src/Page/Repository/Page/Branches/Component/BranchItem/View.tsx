import React from 'react';
import Style from './Style.module.scss';
import {Branch} from '../../../../../../Class';
import {Tag, Tooltip} from 'antd';
import {Date} from '../../../../../../Function';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {ObjectType} from '../../../../../../CONSTANT';
import PersonalCenterLink from '../../../../../../Component/PersonalCenterLink';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryBranches>
{
    branch: Readonly<Branch>;
}

function BranchItem(props: IProps)
{
    const {
        branch: {name, isDefault, lastCommit: {timestamp, committerName, committerEmail}},
        match: {params: {username, repository: repositoryName}},
    } = props;
    return (
        <div className={Style.BranchItem}>
            <div className={Style.branchInfo}>
                <Link to={RouterFunction.generateRepositoryCodeRoute({
                    username,
                    repository: repositoryName,
                    branch: name,
                    objectType: ObjectType.TREE,
                })}>
                    <Tag color={'blue'}>{name}</Tag>
                </Link>
                <div className={Style.updateInfo}>
                    <div className={Style.updaterWrapper}>
                        <PersonalCenterLink committerEmail={committerEmail} committerName={committerName} />
                    </div>
                    在 <Tooltip title={Date.parseTimestampToDate(timestamp)}>
                    <>{Date.parseTimestampToDifference(timestamp)}</>
                </Tooltip> 更新
                </div>
            </div>
            <div className={Style.defaultTagWrapper}>
                {
                    isDefault ? (
                        <Tag>默认</Tag>
                    ) : null
                }
            </div>
        </div>
    );
}

export default withRouter(React.memo(BranchItem));