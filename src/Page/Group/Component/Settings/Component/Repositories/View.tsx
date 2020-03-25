import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../../../Component/SettingsTitle';
import {Repository} from '../../../../../../Class';
import RepositoryList from './Component/RepositoryList';

interface IProps
{
    repositories: Repository[],
    loading: boolean,
}

function Repositories(props: IProps)
{
    const {repositories, loading} = props;
    return (
        <div className={Style.Repositories}>
            <SettingsTitle>仓库管理</SettingsTitle>
            <div className={Style.repositoryListWrapper}>
                <RepositoryList repositories={repositories} loading={loading} />
            </div>
        </div>
    );
}

export default React.memo(Repositories);