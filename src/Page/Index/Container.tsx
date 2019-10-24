import React, {PureComponent} from 'react';
import {Repository as RepositoryApi} from '../../Api';
import {Repository} from '../../Class';
import View from './View';

interface IProps {}

interface IState
{
    repositories: Array<Repository>,
    loading: boolean,
    hasMore: boolean,
    lastEnd: number,
}

class Index extends PureComponent<IProps, IState>
{
    private static PAGE_SIZE = 10;  // 每一页有几条

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            repositories: [],
            loading: true,
            hasMore: true,
            lastEnd: 0,
        };
    }

    async componentDidMount()
    {
        this.setTitle();
        await this.loadMoreRepositories();
    }

    setTitle = () =>
    {
        document.title = 'Git Demo';
    };

    loadMoreRepositories = async () =>
    {
        const {repositories, lastEnd} = this.state;
        this.setState({loading: true});
        const repositoriesFromServer = await RepositoryApi.getList(lastEnd, lastEnd + Index.PAGE_SIZE);
        this.setState({loading: false});
        if (repositoriesFromServer !== null)
        {
            repositories.push(...repositoriesFromServer);
            this.setState({lastEnd: lastEnd + Index.PAGE_SIZE - 1});
            if (repositoriesFromServer.length < Index.PAGE_SIZE)
            {
                this.setState({hasMore: false});
            }
            this.forceUpdate();
        }
    };

    render()
    {
        const {repositories, hasMore, loading} = this.state;
        return (<View
            repositoryList={repositories}
            loadMore={this.loadMoreRepositories}
            hasMore={hasMore}
            loading={loading} />);
    }
}

export default Index;