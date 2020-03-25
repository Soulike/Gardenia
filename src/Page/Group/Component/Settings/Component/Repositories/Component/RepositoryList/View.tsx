import React from 'react';
import {Empty, List} from 'antd';
import {Repository} from '../../../../../../../../Class';
import RepositoryItem from './Component/RepositoryItem/Container';

interface IProps
{
    repositories: Repository[],
    loading: boolean
}

function RepositoryList(props: IProps)
{
    const {repositories, loading} = props;
    return (
        <List loading={loading} locale={{emptyText: <Empty description={'小组内没有仓库'} />}}
              dataSource={repositories}
              renderItem={repository => (
                  <RepositoryItem repository={repository}
                                  key={`${repository.username}/${repository.name}`} />)
              } />
    );
}

export default React.memo(RepositoryList);