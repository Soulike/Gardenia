import React, {PureComponent} from 'react';
import View from './View';
import {promisify} from 'util';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {ERROR_MESSAGE, Function as ValidatorFunction, HINT} from '../../../../../../Validator';
import {Profile as ProfileApi} from '../../../../../../Api/Profile';
import {notification} from 'antd';

interface IProps
{
    defaultNickname?: string,   // 默认显示昵称
    loadingDefaultNickname?: boolean,
}

interface IState
{
    nickname: string,
    loading: boolean,
}

class Nickname extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            nickname: '',
            loading: false,
        };
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {defaultNickname} = this.props;
        const {defaultNickname: prevDefaultNickname} = prevProps;
        if (defaultNickname !== prevDefaultNickname && defaultNickname !== undefined)
        {
            await this.setStatePromise({nickname: defaultNickname});
        }
    }

    onNicknameInputChange: InputProps['onChange'] = async e =>
    {
        await this.setStatePromise({nickname: e.target.value});
    };

    onNicknameSubmit: ButtonProps['onClick'] = async () =>
    {
        const {nickname} = this.state;
        if (ValidatorFunction.Profile.nickname(nickname))
        {
            await this.setStatePromise({loading: true});
            const result = await ProfileApi.set({nickname});
            if (result !== null)
            {
                notification.success({message: '昵称修改成功'});
            }
            await this.setStatePromise({loading: false});
        }
        else
        {
            notification.warn({
                message: ERROR_MESSAGE.Profile.NICKNAME,
                description: HINT.Profile.NICKNAME,
            });
        }
    };

    render()
    {
        const {nickname, loading} = this.state;
        const {loadingDefaultNickname} = this.props;
        return (<View nickname={nickname}
                      loading={loading || !!loadingDefaultNickname}
                      onNicknameInputChange={this.onNicknameInputChange}
                      onNicknameSubmit={this.onNicknameSubmit} />);
    }
}

export default Nickname;