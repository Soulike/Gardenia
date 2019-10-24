import React, {PureComponent} from 'react';
import View from './View';
import {Profile, Repository} from '../../Class';
import {Profile as ProfileApi} from '../../Api';
import {Repository as RepositoryApi} from '../../Api/Repository';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../Router';

interface IProps extends RouteComponentProps<RouterInterface.IPersonalCenter> {}


interface IState
{
    profile: Profile,
    repositories: Array<Repository>,
    loading: boolean,
    hasMore: boolean,
    lastEnd: number,
}

class PersonalCenter extends PureComponent<IProps, IState>
{
    private static PAGE_SIZE = 10;  // 每一页有几条

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            repositories: [],
            profile: new Profile('', '', 'example@example.com', ''),
            loading: true,
            hasMore: true,
            lastEnd: 0,
        };
    }

    async componentDidMount()
    {
        this.setTitle();
        this.setState({loading: true});
        await Promise.all([
            this.loadProfile(),
            this.loadMoreRepositories(),
        ]);
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username}}} = this.props;
        const {match: {params: {username: prevUsername}}} = prevProps;
        if (username !== prevUsername)
        {
            await this.initializeState();
            await this.componentDidMount();
        }
    }

    initializeState = async () =>
    {
        return new Promise(resolve =>
        {
            this.setState({
                repositories: [],
                profile: new Profile('', '', 'example@example.com', ''),
                loading: true,
                hasMore: true,
                lastEnd: 0,
            }, resolve);
        });
    };

    loadProfile = async () =>
    {
        const {match: {params: {username}}} = this.props;
        const profile = await ProfileApi.get(username);
        if (profile !== null)
        {
            this.setState({profile});
        }
    };

    setTitle = () =>
    {
        const {match: {params: {username}}} = this.props;
        document.title = `${username} - Git Demo`;
    };

    loadMoreRepositories = async () =>
    {
        const {repositories, lastEnd} = this.state;
        const {match: {params: {username}}} = this.props;
        const repositoryListFromServer = await RepositoryApi.getList(lastEnd, lastEnd + PersonalCenter.PAGE_SIZE, username);
        this.setState({loading: false});
        if (repositoryListFromServer !== null)
        {
            repositories.push(...repositoryListFromServer);
            this.setState({lastEnd: lastEnd + PersonalCenter.PAGE_SIZE - 1});
            if (repositoryListFromServer.length < PersonalCenter.PAGE_SIZE)
            {
                this.setState({hasMore: false});
            }
            this.forceUpdate();
        }
    };

    render()
    {
        const {profile, repositories, loading, hasMore} = this.state;
        const {username, nickname} = profile;
        return (
            <View username={username}
                  nickname={nickname}
                  repositoryList={repositories}
                  loading={loading}
                  hasMore={hasMore}
                  loadMore={this.loadMoreRepositories} />
        );
    }
}

export default withRouter(PersonalCenter);