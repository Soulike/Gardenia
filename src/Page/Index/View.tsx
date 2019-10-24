import React from 'react';
import Style from './Style.module.scss';
import {Repository} from '../../Class';
import InfiniteScroll from 'react-infinite-scroller';
import RepositoryList from '../../Component/RepositoryList';

interface IProps
{
    repositoryList: Array<Repository>,
    loadMore: () => any,
    loading: boolean,
    hasMore: boolean,
}

function IndexView(props: IProps)
{
    const {repositoryList, loadMore, loading, hasMore} = props;
    return (
        <div className={Style.Index}>
            <InfiniteScroll loadMore={loadMore} initialLoad={false} hasMore={hasMore}>
                <RepositoryList repositoryList={repositoryList} loading={loading} />
            </InfiniteScroll>
        </div>);
}

export default IndexView;   // 列表会动态更新，不能是 memo 组件