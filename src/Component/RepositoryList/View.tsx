import React from 'react';
import Style from './Style.module.scss';
import {Card, Empty, List} from 'antd';
import {Function as RouterFunction} from '../../Router';
import {Repository} from '../../Class';
import AccessibilityTag from '../AccessibilityTag';
import NewTabLink from '../NewTabLink';

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
                      <NewTabLink className={Style.repositoryWrapper}
                                  to={RouterFunction.generateRepositoryCodeRoute({username, repository: name})}>
                          <Card className={Style.repository}>
                              <Card.Meta title={
                                  <React.Fragment>
                                      <div className={Style.tag}>
                                          <AccessibilityTag isPublic={isPublic} />
                                      </div>
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
                      </NewTabLink>);
              }} />
    );
}

export default RepositoryList;