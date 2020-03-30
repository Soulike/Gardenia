import React, {PureComponent} from 'react';
import View from './View';
import {Profile} from '../../Class';
import {promisify} from 'util';
import {LinkProps} from 'react-router-dom';
import {Profile as ProfileApi} from '../../Api';

interface IProps extends Omit<LinkProps, 'to'>
{
    committerEmail: string,
    committerName: string,
}

interface IState
{
    profile: Profile | null,
    loading: boolean,
}

class PersonalCenterLink extends PureComponent<IProps, IState>
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
        const {committerEmail} = this.props;
        const {committerEmail: prevCommitterEmail} = prevProps;
        if (committerEmail !== prevCommitterEmail)
        {
            await this.componentDidMount();
        }
    }

    loadProfile = async () =>
    {
        const {committerEmail} = this.props;
        const profile = await ProfileApi.getByEmail(committerEmail);
        await this.setStatePromise({profile});
    };

    render()
    {
        const {profile, loading} = this.state;
        const {committerEmail, ...rest} = this.props;
        return (<View profile={profile} loading={loading} {...rest} />);
    }
}

export default PersonalCenterLink;