import React, {PureComponent} from 'react';
import View from './View';
import {Interface as RouterInterface} from '../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Profile as ProfileApi} from '../../../../Api';
import {Profile as ProfileClass} from '../../../../Class';

interface IProps extends RouteComponentProps<RouterInterface.IPersonalCenter>
{

}

interface IState
{
    profile: ProfileClass
}

class Profile extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            profile: new ProfileClass('', '', 'example@example.com', ''),
        };
    }


    async componentDidMount()
    {
        await this.loadProfile();
    }

    loadProfile = async () =>
    {
        const {match: {params: {username}}} = this.props;
        const profile = await ProfileApi.get(username);
        if (profile !== null)
        {
            this.setState({profile});
        }
    };


    render()
    {
        const {profile} = this.state;
        return (<View profile={profile} />);
    }
}

export default withRouter(Profile);