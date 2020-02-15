import React from 'react';
import Style from './Style.module.scss';
import {Icon} from 'antd';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {Branch} from '../../../../../../Class';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    commitCount: number,
    branches: Readonly<Branch[]>,
}

function InfoBar(props: Readonly<IProps>)
{
    const {commitCount, branches, match: {params: {username, repository, branch: branchName}}} = props;
    let defaultBranchName = '';
    for (const branch of branches)
    {
        if (branch.isDefault)
        {
            defaultBranchName = branch.name;
        }
    }
    return (
        <div className={Style.InfoBar}>
            <Link to={commitCount > 0
                ? RouterFunction.generateRepositoryCommitsRoute({
                    username,
                    repository,
                    branch: branchName ? branchName : defaultBranchName,
                })
                : '#'}
                  className={Style.info}>
                <Icon type="clock-circle" /> {commitCount} 次提交
            </Link>
            <Link className={Style.info} to={commitCount > 0
                ? RouterFunction.generateRepositoryBranchesRoute({
                    username,
                    repository,
                })
                : '#'}>
                <Icon type="branches" /> {branches.length} 个分支
            </Link>
        </div>
    );
}

export default withRouter(React.memo(InfoBar));