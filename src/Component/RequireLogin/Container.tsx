import React, {PureComponent, ReactNode} from 'react';
import {Account} from '../../Api/Account';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {IState as StoreState} from '../../Store';
import {connect} from 'react-redux';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../Router/CONFIG';
import {notification} from 'antd';

interface IProps extends RouteComponentProps
{
    isLoggedIn: boolean,
    children?: ReactNode,
}

class RequireLogin extends PureComponent<IProps>
{
    async componentDidMount()
    {
        await this.checkWhetherLoggedIn();
    }

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
                    notification.info({message: '请先登录'});
                    history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]);
                }
            }
        }
    };

    render()
    {
        const {children} = this.props;
        return children;
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {Root: {isLoggedIn}} = state;
    return {isLoggedIn};
};

export default withRouter(connect(mapStateToProps)(RequireLogin));