import React from 'react';
import Style from './Style.module.scss';
import {Card, Empty, List} from 'antd';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../Router';
import {Repository} from '../../Class';
import AccessibilityTag from '../AccessibilityTag';

interface IProps
{
    repositoryList: Array<Repository>,
    loading: boolean,
    showUsername: boolean,
}

function RepositoryList(props: IProps)
{
    const {repositoryList, loading, showUsername} = props;
    return (
        <List className={Style.RepositoryList} dataSource={repositoryList}
              loading={loading}
              locale={{emptyText: <Empty description={'没有仓库'} />}}
              renderItem={repository =>
              {
                  const {username, name, description, isPublic} = repository;
                  return (
                      <Link className={Style.repositoryWrapper}
                            target={'_blank'} rel={'noreferrer noopener'}
                            to={RouterFunction.generateRepositoryRoute({username, repository: name})}>
                          <Card className={Style.repository} hoverable={true}>
                              <Card.Meta title={
                                  <React.Fragment>
                                      <AccessibilityTag isPublic={isPublic} />
                                      {
                                          showUsername ? `${username}/` : ''
                                      }
                                      {name}
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