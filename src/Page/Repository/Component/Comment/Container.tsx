import React, {PureComponent} from 'react';
import {Profile} from '../../../../Class';
import View from './View';
import {Profile as ProfileApi} from '../../../../Api';
import {promisify} from 'util';

interface IProps
{
    topicCreatorUsername: string;    // Issue 或 PR 的创建者 username
    username: string;
    content: string;
    creationTime: number;
    modificationTime: number;
}

interface IState
{
    profile: Profile | null;
    loading: boolean;
}

class Comment extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            profile: null,
            loading: false,
        };
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        await this.loadProfile();
        await this.setStatePromise({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {topicCreatorUsername, username, creationTime, modificationTime, content} = this.props;
        const {
            topicCreatorUsername: prevTopicCreatorUsername,
            username: prevUsername,
            creationTime: prevCreationTime,
            modificationTime: prevModificationTime, content: prevContent,
        } = prevProps;
        if (topicCreatorUsername !== prevTopicCreatorUsername
            || username !== prevUsername
            || creationTime !== prevCreationTime
            || modificationTime !== prevModificationTime
            || content !== prevContent)
        {
            await this.componentDidMount();
        }
    }

    loadProfile = async () =>
    {
        const {username} = this.props;
        const profile = await ProfileApi.get({username});
        if (profile !== null)
        {
            await this.setStatePromise({profile});
        }
    };

    render()
    {
        const {topicCreatorUsername, content, creationTime, modificationTime} = this.props;
        const {loading, profile} = this.state;
        return (<View loading={loading}
                      profile={profile}
                      content={content}
                      creationTime={creationTime}
                      modificationTime={modificationTime}
                      topicCreatorUsername={topicCreatorUsername} />);
    }
}

export default Comment;