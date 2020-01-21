import React, {PureComponent} from 'react';
import View from './View';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {Profile as ProfileApi} from '../../../../Api';
import {notification} from 'antd';
import {ERROR_MESSAGE, Function as ValidatorFunction, HINT} from '../../../../Validator';

interface IProps {}

interface IState
{
    nickname: string,
    email: string,
    loading: boolean,
}

class Profile extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            nickname: '',
            email: '',
            loading: false,
        };
    }

    async componentDidMount()
    {
        await this.loadProfile();
    }

    loadProfile = async () =>
    {
        this.setState({loading: true});
        const result = await ProfileApi.get();
        if (result !== null)
        {
            const {nickname, email} = result;
            this.setState({nickname, email, loading: false});
        }
    };

    onNicknameInputChange: InputProps['onChange'] = e =>
    {
        this.setState({nickname: e.target.value});
    };

    onEmailInputChange: InputProps['onChange'] = e =>
    {
        this.setState({email: e.target.value});
    };

    onNicknameSubmit: ButtonProps['onClick'] = async () =>
    {
        const {nickname} = this.state;
        if (ValidatorFunction.Profile.nickname(nickname))
        {
            this.setState({loading: true});
            const result = await ProfileApi.set({nickname});
            if (result !== null)
            {
                notification.success({message: '昵称修改成功'});
            }
            this.setState({loading: false});
        }
        else
        {
            notification.warn({
                message: ERROR_MESSAGE.Profile.NICKNAME,
                description: HINT.Profile.NICKNAME,
            });
        }
    };

    onEmailSubmit: ButtonProps['onClick'] = async () =>
    {
        const {email} = this.state;
        if (ValidatorFunction.Profile.email(email))
        {
            this.setState({loading: true});
            const result = await ProfileApi.set({email});
            if (result !== null)
            {
                notification.success({message: '邮箱修改成功'});
            }
            this.setState({loading: false});
        }
        else
        {
            notification.warn({
                message: ERROR_MESSAGE.Profile.EMAIL,
            });
        }
    };

    render()
    {
        const {nickname, email, loading} = this.state;
        return (
            <View nickname={nickname}
                  email={email}
                  loading={loading}
                  onEmailInputChange={this.onEmailInputChange}
                  onEmailSubmit={this.onEmailSubmit}
                  onNicknameInputChange={this.onNicknameInputChange}
                  onNicknameSubmit={this.onNicknameSubmit} />);
    }
}

export default Profile;