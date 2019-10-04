import React from 'react';
import Style from './Style.module.scss';
import {Card, Empty, List} from 'antd';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE_GENERATOR} from '../../Router';
import {Repository} from '../../Class';
import AccessibilityTag from '../AccessibilityTag';

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
                            to={PAGE_ID_TO_ROUTE_GENERATOR[PAGE_ID.REPOSITORY](username, name)}>
                          <Card className={Style.repository} hoverable={true}>
                              <Card.Meta title={
                                  <React.Fragment>
                                      <AccessibilityTag isPublic={isPublic} />
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