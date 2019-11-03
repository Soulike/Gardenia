import React from 'react';
import Style from './Style.module.scss';
import {Repository} from '../../Class';
import InfiniteScroll from 'react-infinite-scroller';
import RepositoryList from '../../Component/RepositoryList';

interface IProps
{
    repositoryList: Readonly<Array<Readonly<Repository>>>,
    loadMore: () => any,
    loading: boolean,
    hasMore: boolean,
}

function IndexView(props: Readonly<IProps>)
{
    const {repositoryList, loadMore, loading, hasMore} = props;
    return (
        <div className={Style.Index}>
            <InfiniteScroll loadMore={loadMore} initialLoad={false} hasMore={hasMore}>
                <RepositoryList repositories={repositoryList} loading={loading} showUsername={true} />
            </InfiniteScroll>
        </div>);
}

export default IndexView;   // 列表会动态更新，不能是 memo 组件