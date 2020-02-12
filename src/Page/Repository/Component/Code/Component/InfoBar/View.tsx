import React from 'react';
import Style from './Style.module.scss';
import {Icon} from 'antd';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    commitCount: number,
    branchCount: number,
}

function InfoBar(props: Readonly<IProps>)
{
    const {commitCount, branchCount, match: {params: {username, repository, branch}}} = props;
    return (
        <div className={Style.InfoBar}>
            <Link to={commitCount > 0
                ? RouterFunction.generateRepositoryCommitsRoute({
                    username,
                    repository,
                    branch: branch ? branch : 'master',
                })
                : '#'}
                  className={Style.info}>
                <Icon type="clock-circle" /> {commitCount} 次提交
            </Link>
            <div className={Style.info}>
                <Icon type="branches" /> {branchCount} 个分支
            </div>
        </div>
    );
}

export default withRouter(React.memo(InfoBar));