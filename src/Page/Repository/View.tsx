import React from 'react';
import Style from './Style.module.scss';
import {Commit, Repository as RepositoryClass} from '../../Class';
import {Skeleton} from 'antd';
import AccessibilityTag from '../../Component/AccessibilityTag';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG/PAGE';
import CloneButton from './Component/CloneButton';
import InfoBar from './Component/InfoBar';
import BranchButton from './Component/BranchButton';

interface Props extends RouteComponentProps
{
    repository: RepositoryClass,
    branches: Array<string>,
    commitCount: number,
    lastCommit: Commit,
    loading: boolean,
}

function RepositoryView(props: Props)
{
    const {
        repository: {username, name, description, isPublic},
        loading,
        commitCount,
        branches,
        lastCommit,
    } = props;
    return (
        <div className={Style.Repository}>
            <Skeleton loading={loading} active={true} paragraph={{rows: 15}}>
                <div className={Style.header}>
                    <div className={Style.basicInfo}>
                        <AccessibilityTag isPublic={isPublic} />
                        <div className={Style.usernameAndName}>
                            <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.PERSONAL_CENTER]
                                .replace(':username', username)}>
                                {username}
                            </Link> / <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY]
                            .replace(':username', username)
                            .replace(':repository', name)
                            .replace(':path*', '')}>
                            <b>{name}</b>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className={Style.description}>
                    {description}
                </div>
                <InfoBar commitCount={commitCount} branchCount={branches.length} />
                <div className={Style.buttonWrapper}>
                    <BranchButton branches={branches} />
                    <CloneButton username={username} repository={name} />
                </div>
            </Skeleton>
        </div>
    );
}

export default withRouter(React.memo(RepositoryView));