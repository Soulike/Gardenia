import React, {PureComponent} from 'react';
import View from './View';
import {promisify} from 'util';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {ERROR_MESSAGE, Function as ValidatorFunction} from '../../../../../../Validator';
import {Profile as ProfileApi} from '../../../../../../Api/Profile';
import {notification} from 'antd';

interface IProps
{
    defaultEmail?: string,   // 默认显示 email
    loadingDefaultEmail?: boolean,
}

interface IState
{
    email: string,
    loading: boolean,
}

class Email extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            email: '',
            loading: false,
        };
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {defaultEmail} = this.props;
        const {defaultEmail: prevDefaultEmail} = prevProps;
        if (defaultEmail !== prevDefaultEmail && defaultEmail !== undefined)
        {
            await this.setStatePromise({email: defaultEmail});
        }
    }

    onEmailInputChange: InputProps['onChange'] = async e =>
    {
        await this.setStatePromise({email: e.target.value});
    };

    onEmailSubmit: ButtonProps['onClick'] = async () =>
    {
        const {email} = this.state;
        if (ValidatorFunction.Profile.email(email))
        {
            await this.setStatePromise({loading: true});
            const result = await ProfileApi.set({email});
            if (result !== null)
            {
                notification.success({message: '邮箱修改成功'});
            }
            await this.setStatePromise({loading: false});
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
        const {loadingDefaultEmail} = this.props;
        const {email, loading} = this.state;
        return (<View email={email}
                      loading={loading || !!loadingDefaultEmail}
                      onEmailInputChange={this.onEmailInputChange}
                      onEmailSubmit={this.onEmailSubmit} />);
    }
}

export default Email;