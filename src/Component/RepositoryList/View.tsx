import React from 'react';
import Style from './Style.module.scss';
import {Card, Empty, List} from 'antd';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../Router';
import {Repository} from '../../Class';
import AccessibilityTag from '../AccessibilityTag';

interface IProps
{
    repositories: Readonly<Readonly<Repository>[]>,
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
              renderItem={repository =>
              {
                  const {username, name, description, isPublic} = repository;
                  return (
                      <Link className={Style.repositoryWrapper}
                            target={'_blank'} rel={'noreferrer noopener'}
                            to={RouterFunction.generateRepositoryCodeRoute({username, repository: name})}>
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