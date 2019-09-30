import React from 'react';
import Style from './Style.module.scss';
import {Repository as RepositoryClass} from '../../Class';
import {Skeleton} from 'antd';
import AccessibilityTag from '../../Component/AccessibilityTag';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG/PAGE';
import InfoBar from './Component/InfoBar';

const BranchButton = React.lazy(() => import('./Component/BranchButton'));
const FileList = React.lazy(() => import('./Component/FileList'));
const CloneButton = React.lazy(() => import('./Component/CloneButton'));
const Empty = React.lazy(() => import('./Component/Empty'));
const FileReader = React.lazy(() => import('./Component/FileReader'));

interface Match
{
    username: string,
    repository: string,
    path: string,
}

interface Props extends RouteComponentProps<Match>
{
    repository: RepositoryClass,
    branches: Array<string>,
    commitCount: number,
    loading: boolean,
    isEmpty: boolean,
}

function RepositoryView(props: Props)
{
    const {
        repository: {username, name, description, isPublic},
        loading,
        commitCount,
        branches,
        location: {pathname},
        match: {params: {path}},
        isEmpty,
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
                {
                    isEmpty ?
                        <Empty /> :
                        <React.Fragment>
                            <div className={Style.buttonWrapper}>
                                <BranchButton branches={branches} />
                                <CloneButton username={username} repository={name} />
                            </div>
                            {
                                path === undefined || pathname.slice(-1) === '/' ?
                                    <FileList /> :
                                    <FileReader />
                            }
                        </React.Fragment>
                }
            </Skeleton>
        </div>
    );
}

export default withRouter(React.memo(RepositoryView));