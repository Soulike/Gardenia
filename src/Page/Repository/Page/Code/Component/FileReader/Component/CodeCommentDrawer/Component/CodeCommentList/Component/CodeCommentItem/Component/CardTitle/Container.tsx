import React, {PureComponent} from 'react';
import View from './View';
import {CodeComment, Profile} from '../../../../../../../../../../../../../../Class';
import {Profile as ProfileApi} from '../../../../../../../../../../../../../../Api';


interface IProps
{
    creatorUsername: CodeComment['creatorUsername'];
    modificationTimestamp: CodeComment['modificationTimestamp'];
}

interface IState
{
    profile: Profile;
    loading: boolean;
}

class CardTitle extends PureComponent<IProps, IState>
{
    private setStatePromise = (state: any) =>
    {
        return new Promise<void>(resolve =>
        {
            this.setState(state, () =>
            {
                resolve();
            });
        });
    };

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            profile: new Profile('', '', '', ''),
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
        const {creatorUsername} = this.props;
        const {creatorUsername: prevCreatorUsername} = prevProps;
        if (creatorUsername !== prevCreatorUsername)
        {
            await this.componentDidMount();
        }
    }

    loadProfile = async () =>
    {
        const {creatorUsername} = this.props;
        const profile = await ProfileApi.get({username: creatorUsername});
        if (profile !== null)
        {
            await this.setStatePromise({profile});
        }
    };

    render()
    {
        const {profile, loading} = this.state;
        const {modificationTimestamp} = this.props;
        return (<View loading={loading} profile={profile} modificationTimestamp={modificationTimestamp} />);
    }
}

export default CardTitle;