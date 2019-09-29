import React from 'react';
import Style from './Style.module.scss';
import {Repository} from '../../Class';
import {Card, Empty, List} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG/PAGE';

interface Props
{
    repositoryList: Array<Repository>,
    loadMore: () => any,
    loading: boolean,
    hasMore: boolean,
}

function IndexView(props: Props)
{
    const {repositoryList, loadMore, loading, hasMore} = props;
    return (
        <div className={Style.Index}>
            <InfiniteScroll loadMore={loadMore} initialLoad={false} hasMore={hasMore}>
                <List dataSource={repositoryList}
                      loading={loading}
                      locale={{emptyText: <Empty description={'没有仓库'} />}}
                      renderItem={repository =>
                      {
                          const {username, name, description} = repository;
                          return (
                              <Link
                                  target={'__blank'} rel={'noreferrer noopener'}
                                  to={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY]
                                      .replace(':username', username)
                                      .replace(':repository', name)
                                      .replace(':path*', '')}>
                                  <Card className={Style.repository} hoverable={true}>
                                      <Card.Meta title={`${username} - ${name}`} description={description} />
                                  </Card>
                              </Link>);
                      }} />
            </InfiniteScroll>
        </div>);
}

export default IndexView;   // 列表会动态更新，不能是 memo 组件