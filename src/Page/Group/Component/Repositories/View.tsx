import React from 'react';
import {Repository} from '../../../../Class';
import RepositoryList from '../../../../Component/RepositoryList';
import Style from './Style.module.scss';

interface IProps
{
    repositories: Repository[],
    loading: boolean,
}

function RepositoriesView(props: IProps)
{
    const {repositories, loading} = props;
    return (
        <div className={Style.Repositories}>
            <RepositoryList repositoryList={repositories} loading={loading} showUsername={true} />
        </div>
    );
}

export default React.memo(RepositoriesView);