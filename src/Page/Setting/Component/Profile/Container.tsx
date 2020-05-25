import React, {PureComponent} from 'react';
import View from './View';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {Profile as ProfileApi} from '../../../../Api';
import {notification} from 'antd';
import {ERROR_MESSAGE, Function as ValidatorFunction} from '../../../../Validator';
import {promisify} from 'util';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG as ROUTER_CONFIG} from '../../../../Router';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

interface IProps extends RouteComponentProps {}

interface IState
{
    defaultNickname: string,
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
            defaultNickname: '',
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
            await this.setStatePromise({defaultNickname: nickname, email});
        }
        else
        {
            const {history} = this.props;
            return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    };

    onEmailInputChange: InputProps['onChange'] = e =>
    {
        this.setState({email: e.target.value});
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
        const {defaultNickname, email, loading} = this.state;
        return (<View defaultNickname={defaultNickname}
                      email={email}
                      loading={loading}
                      onEmailInputChange={this.onEmailInputChange}
                      onEmailSubmit={this.onEmailSubmit} />);
    }
}

export default withRouter(Profile);