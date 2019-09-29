import React, {PureComponent} from 'react';
import View from './View';
import {Profile, Repository} from '../../Class';
import {Profile as ProfileApi} from '../../Api';
import {Repository as RepositoryApi} from '../../Api/Repository';
import {RouteComponentProps, withRouter} from 'react-router-dom';

interface Match
{
    username: string,
}

interface Props extends RouteComponentProps<Match> {}


interface State
{
    profile: Profile,
    repositoryList: Array<Repository>,
    loading: boolean,
    hasMore: boolean,
    lastEnd: number,
}

class PersonalCenter extends PureComponent<Props, State>
{
    private static PAGE_SIZE = 10;  // 每一页有几条

    constructor(props: Props)
    {
        super(props);
        this.state = {
            repositoryList: [],
            profile: new Profile('', '', 'example@example.com', ''),
            loading: true,
            hasMore: true,
            lastEnd: 0,
        };
    }

    async componentDidMount()
    {
        const {match: {params: {username}}} = this.props;
        const [profile] = await Promise.all([
            ProfileApi.get(username),
            this.loadMore(),
        ]);
        if (profile !== null)
        {
            this.setState({loading: false, profile});
        }
    }

    loadMore = async () =>
    {
        const {repositoryList, lastEnd} = this.state;
        const {match: {params: {username}}} = this.props;
        const repositoryListFromServer = await RepositoryApi.getList(lastEnd, lastEnd + PersonalCenter.PAGE_SIZE, username);
        this.setState({loading: false});
        if (repositoryListFromServer !== null)
        {
            repositoryList.push(...repositoryListFromServer);
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
        const {profile, repositoryList, loading, hasMore} = this.state;
        const {username, nickname} = profile;
        return (
            <View username={username}
                  nickname={nickname}
                  repositoryList={repositoryList}
                  loading={loading}
                  hasMore={hasMore}
                  loadMore={this.loadMore} />
        );
    }
}

export default withRouter(PersonalCenter);