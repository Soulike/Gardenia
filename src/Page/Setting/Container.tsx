import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {RouteComponentProps} from 'react-router-dom';
import CONFIG from '../../CONFIG';
import {IState as StoreState} from '../../Store';
import {connect} from 'react-redux';
import {CONFIG as ROUTER_CONFIG} from '../../Router';
import {Account} from '../../Api';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

interface IProps extends RouteComponentProps
{
    children: ReactNode,
    isLoggedIn: boolean,
}

interface IState {}

class Setting extends PureComponent<IProps, IState>
{
    componentDidMount()
    {
        this.setTitle();
        this.checkWhetherLoggedIn();
    }

    setTitle = () =>
    {
        document.title = `设置 - ${CONFIG.NAME}`;
    };

    checkWhetherLoggedIn = async () =>
    {
        const {isLoggedIn, history} = this.props;
        if (!isLoggedIn)
        {
            const result = await Account.checkSession();
            if (result !== null)
            {
                const {isValid} = result;
                if (!isValid)
                {
                    history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
                }
            }
        }
    };

    render()
    {
        const {children} = this.props;
        return (<View>{children}</View>);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {Root: {isLoggedIn}} = state;
    return {isLoggedIn};
};

export default connect(mapStateToProps)(Setting);