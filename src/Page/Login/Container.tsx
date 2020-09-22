import React, {HTMLAttributes, PureComponent} from 'react';
import LoginView from './View';
import * as CONFIG from '../../CONFIG';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Account as AccountApi} from '../../Api';
import {notification} from 'antd';
import {InputProps} from 'antd/lib/input';
import {setLoggedInAction, setLoggedOutAction} from '../../Component/Root/Action/Action';
import {connect} from 'react-redux';
import {Account as AccountClass} from '../../Class';
import {IRootState, IState as StoreState} from '../../Store';
import qs from 'querystring';
import {Function as ValidatorFunction} from '../../Validator';

const {Account: AccountValidator} = ValidatorFunction;

interface IProps extends RouteComponentProps, IRootState
{
    setLoggedIn: typeof setLoggedInAction,
    setLoggedOut: typeof setLoggedOutAction,
}

interface IState
{
    username: string,
    password: string,
    loading: boolean,
}

class Login extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setTitle();
        await this.checkSession();
        const {isLoggedIn} = this.props;
        if (isLoggedIn)
        {
            return this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
        }
    }

    setTitle = () =>
    {
        document.title = `登录 - ${CONFIG.NAME}`;
    };

    checkSession = async () =>
    {
        const {setLoggedOut, setLoggedIn} = this.props;
        const result = await AccountApi.checkSession();
        if (result !== null)
        {
            const {isValid} = result;
            if (isValid)
            {
                await setLoggedIn();
            }
            else
            {
                await setLoggedOut();
            }
        }
        else
        {
            await setLoggedOut();
        }
    };

    onUsernameInputChange: InputProps['onChange'] = e =>
    {
        this.setState({username: e.target.value});
    };

    onPasswordInputChange: InputProps['onChange'] = e =>
    {
        this.setState({password: e.target.value});
    };

    onLoginFormSubmit: HTMLAttributes<HTMLFormElement>['onSubmit'] = async e =>
    {
        e.preventDefault();
        if (this.loginFormInputCheck())
        {
            await this.submitLoginForm();
        }
    };

    loginFormInputCheck = (): boolean =>
    {
        const {username, password} = this.state;
        if (!AccountValidator.username(username) || !AccountValidator.password(password))
        {
            notification.warn({message: '用户名或密码错误'});
            return false;
        }
        return true;
    };

    submitLoginForm = async () =>
    {
        const {username, password} = this.state;
        const hash = AccountClass.calculateHash(username, password);
        this.setState({loading: true});
        const isSuccessful = await AccountApi.login(new AccountClass(username, hash));
        if (isSuccessful)
        {
            await this.onLoginSuccess();
        }
        this.setState({loading: false});
    };

    onLoginSuccess = async () =>
    {
        const {setLoggedIn} = this.props;
        setLoggedIn();
        notification.success({message: '登录成功'});
        this.returnToPreviousPage();
    };

    returnToPreviousPage = () =>
    {
        const {location: {search}} = this.props;
        const {prev} = qs.parse(search.slice(1));
        if (typeof prev === 'string'
            && prev !== PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]
            && prev !== PAGE_ID_TO_ROUTE[PAGE_ID.REGISTER]
            && prev !== PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]
            && prev !== PAGE_ID_TO_ROUTE[PAGE_ID.CHANGE_PASSWORD])
        {
            return this.props.history.push(prev);
        }
        else
        {
            return this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
        }
    };

    render()
    {
        const {username, password, loading} = this.state;
        return (
            <LoginView username={username} password={password} loading={loading}
                       onLoginFormSubmit={this.onLoginFormSubmit}
                       onPasswordInputChange={this.onPasswordInputChange}
                       onUsernameInputChange={this.onUsernameInputChange} />
        );
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {Root: {isLoggedIn}} = state;
    return {isLoggedIn};
};

const mapDispatchToProps = {
    setLoggedIn: setLoggedInAction,
    setLoggedOut: setLoggedOutAction,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));