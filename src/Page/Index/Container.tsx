import React, {PureComponent} from 'react';
import {Repository as RepositoryApi} from '../../Api';
import {Repository} from '../../Class';
import View from './View';

interface Props {}

interface State
{
    repositoryList: Array<Repository>,
    loading: boolean,
    hasMore: boolean,
    lastEnd: number,
}

class Index extends PureComponent<Props, State>
{
    private static PAGE_SIZE = 10;  // 每一页有几条

    constructor(props: Props)
    {
        super(props);
        this.state = {
            repositoryList: [],
            loading: true,
            hasMore: true,
            lastEnd: 0,
        };
    }

    async componentDidMount()
    {
        await this.loadMore();
    }

    loadMore = async () =>
    {
        const {repositoryList, lastEnd} = this.state;
        const repositoryListFromServer = await RepositoryApi.getList(lastEnd, lastEnd + Index.PAGE_SIZE);
        this.setState({loading: false});
        if (repositoryListFromServer !== null)
        {
            repositoryList.push(...repositoryListFromServer);
            this.setState({lastEnd: lastEnd + Index.PAGE_SIZE - 1});
            if (repositoryListFromServer.length < Index.PAGE_SIZE)
            {
                this.setState({hasMore: false});
            }
            this.forceUpdate();
        }
    };

    render()
    {
        const {repositoryList, hasMore, loading} = this.state;
        return (<View
            repositoryList={repositoryList}
            loadMore={this.loadMore}
            hasMore={hasMore}
            loading={loading} />);
    }
}

export default Index;