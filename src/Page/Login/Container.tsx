import React, {HTMLAttributes, PureComponent} from 'react';
import LoginView from './View';
import {CONFIG as ROUTER_CONFIG} from '../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Account as AccountApi} from '../../Api';
import {notification} from 'antd';
import {InputProps} from 'antd/lib/input';
import {setLoggedInAction} from '../../Component/Root/Action/Action';
import {connect} from 'react-redux';
import {Account as AccountClass} from '../../Class';
import {IRootState, IState as StoreState} from '../../Store';
import {AnyAction} from 'redux';
import qs from 'querystring';
import CONFIG from '../../CONFIG';
import {Function as ValidatorFunction} from '../../Validator';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

const {Account: AccountValidator} = ValidatorFunction;

interface IProps extends RouteComponentProps
{
    setLoggedIn: () => AnyAction,
    isLoggedIn: IRootState['isLoggedIn']
}

interface IState
{
    username: string,
    password: string,
}

class Login extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    componentDidMount()
    {
        this.setTitle();
        const {isLoggedIn} = this.props;
        if (isLoggedIn)
        {
            this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
        }
    }

    setTitle = () =>
    {
        document.title = `登录 - ${CONFIG.NAME}`;
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
        const isSuccessful = await AccountApi.login(new AccountClass(username, hash));
        if (isSuccessful)
        {
            await this.onLoginSuccess();
        }
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
            && prev !== PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND])
        {
            this.props.history.push(prev);
        }
        else
        {
            this.props.history.push(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
        }
    };

    render()
    {
        const {username, password} = this.state;
        return (
            <LoginView username={username} password={password}
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
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));