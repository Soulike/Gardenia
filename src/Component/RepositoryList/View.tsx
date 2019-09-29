import React from 'react';
import Style from './Style.module.scss';
import {Card, Empty, List, Tag} from 'antd';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG/PAGE';
import {Repository} from '../../Class';

interface Props
{
    repositoryList: Array<Repository>,
    loading: boolean
}

function RepositoryList(props: Props)
{
    const {repositoryList, loading} = props;
    return (
        <List className={Style.RepositoryList} dataSource={repositoryList}
              loading={loading}
              locale={{emptyText: <Empty description={'没有仓库'} />}}
              renderItem={repository =>
              {
                  const {username, name, description, isPublic} = repository;
                  return (
                      <Link className={Style.repositoryWrapper}
                            target={'__blank'} rel={'noreferrer noopener'}
                            to={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY]
                                .replace(':username', username)
                                .replace(':repository', name)
                                .replace(':path*', '')}>
                          <Card className={Style.repository} hoverable={true}>
                              <Card.Meta title={
                                  <React.Fragment>
                                      {
                                          isPublic ?
                                              <Tag color={'blue'}>公共</Tag> :
                                              <Tag color={'gold'}>私人</Tag>
                                      }
                                      {username}/{name}
                                  </React.Fragment>
                              } description={
                                  <div>
                                      {description.length === 0 ? <i>没有描述</i> : description}
                                  </div>} />
                          </Card>
                      </Link>);
              }} />
    );
}

export default RepositoryList;