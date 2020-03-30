import React, {PureComponent} from 'react';
import View from './View';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {Profile as ProfileApi} from '../../../../Api';
import {notification} from 'antd';
import {ERROR_MESSAGE, Function as ValidatorFunction, HINT} from '../../../../Validator';
import {promisify} from 'util';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG as ROUTER_CONFIG} from '../../../../Router';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

interface IProps extends RouteComponentProps {}

interface IState
{
    nickname: string,
    email: string,
    loading: boolean,
}

class Profile extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

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
        await this.setStatePromise({loading: true});
        await this.loadProfile();
        await this.setStatePromise({loading: false});
    }

    loadProfile = async () =>
    {
        const result = await ProfileApi.get();
        if (result !== null)
        {
            const {nickname, email} = result;
            await this.setStatePromise({nickname, email});
        }
        else
        {
            const {history} = this.props;
            return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
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

export default withRouter(Profile);