import React from 'react';
import Style from './Style.module.scss';
import {Repository} from '../../Class';
import InfiniteScroll from 'react-infinite-scroller';
import RepositoryList from '../../Component/RepositoryList';

interface Props
{
    username: string,
    nickname: string,
    repositoryList: Array<Repository>,
    loading: boolean,
    hasMore: boolean,
    loadMore: () => any,
}


function PersonalCenterView(props: Props)
{
    const {username, nickname, repositoryList, loading, hasMore, loadMore} = props;
    return (
        <div className={Style.PersonalCenter}>
            <h1 className={Style.title}>{nickname} ({username}) 的仓库列表</h1>
            <InfiniteScroll loadMore={loadMore} initialLoad={false} hasMore={hasMore}>
                <RepositoryList repositoryList={repositoryList} loading={loading} />
            </InfiniteScroll>
        </div>
    );
}

export default React.memo(PersonalCenterView);