import React, {PureComponent} from 'react';
import View from './View';
import {Interface as RouterInterface} from '../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Profile as ProfileApi} from '../../../../Api';
import {Profile as ProfileClass} from '../../../../Class';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';

interface IProps extends RouteComponentProps<RouterInterface.IPersonalCenter>
{
    showModifyButton: boolean,
}

interface IState
{
    profile: ProfileClass
}

class Profile extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
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

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username}}} = this.props;
        const {match: {params: {username: prevUsername}}} = prevProps;
        if (username !== prevUsername)
        {
            await this.componentDidMount();
        }
    }

    loadProfile = async () =>
    {
        const {match: {params: {username}}, history} = this.props;
        const profile = await ProfileApi.get({username});
        if (profile !== null)
        {
            this.setState({profile});
        }
        else
        {
            return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    };


    render()
    {
        const {profile} = this.state;
        const {showModifyButton} = this.props;
        return (<View profile={profile} showModifyButton={showModifyButton} />);
    }
}

export default withRouter(Profile);