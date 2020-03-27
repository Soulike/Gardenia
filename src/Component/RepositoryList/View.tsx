import React from 'react';
import Style from './Style.module.scss';
import {Empty, List} from 'antd';
import {Repository as RepositoryClass} from '../../Class';
import Repository from './Component/Repository';

interface IProps
{
    repositories: Readonly<Readonly<RepositoryClass>[]>,
    loading: boolean,
    showUsername: boolean,
}

function RepositoryList(props: Readonly<IProps>)
{
    const {repositories, loading, showUsername} = props;
    return (
        <List className={Style.RepositoryList} dataSource={[...repositories]}
              loading={loading}
              locale={{emptyText: <Empty description={'没有仓库'} />}}
              renderItem={repository => <Repository key={`${repository.username}/${repository.name}`}
                                                    repository={repository}
                                                    showUsername={showUsername} />} />
    );
}

export default RepositoryList;