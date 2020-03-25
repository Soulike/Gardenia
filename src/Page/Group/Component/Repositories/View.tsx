import React from 'react';
import {Repository} from '../../../../Class';
import RepositoryList from '../../../../Component/RepositoryList';
import Style from './Style.module.scss';
import {Alert} from 'antd';

interface IProps
{
    repositories: Readonly<Readonly<Repository>[]>,
    loading: boolean,
}

function RepositoriesView(props: Readonly<IProps>)
{
    const {repositories, loading} = props;
    return (
        <div className={Style.Repositories}>
            <div className={Style.banner}>
                <Alert type={'info'} showIcon={true} banner={true} message={'小组成员可在仓库设置中将仓库加入小组'} />
            </div>
            <RepositoryList repositories={repositories} loading={loading} showUsername={true} />
        </div>
    );
}

export default React.memo(RepositoriesView);