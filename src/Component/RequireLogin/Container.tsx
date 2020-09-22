import React, {ReactNode, useEffect} from 'react';
import {Account as AccountApi} from '../../Api';
import {Route, useHistory} from 'react-router-dom';
import {IRootState as StoreRootState, IState as StoreState} from '../../Store';
import {useSelector} from 'react-redux';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import {notification} from 'antd';

interface IProps
{
    children?: ReactNode,
}

function RequireLogin(props: IProps)
{
    const history = useHistory();
    const {isLoggedIn} = useSelector<StoreState, StoreRootState>(({Root}) => Root);

    useEffect(() =>
    {
        const checkWhetherLoggedIn = async () =>
        {
            if (isLoggedIn)
            {
                return true;
            }
            else    //!isLoggedIn
            {
                const result = await AccountApi.checkSession();
                if (result !== null)
                {
                    const {isValid} = result;
                    return isValid;
                }
                else
                {
                    return false;
                }
            }
        };

        checkWhetherLoggedIn()
            .then(isLoggedIn =>
            {
                if (!isLoggedIn)
                {
                    notification.info({message: '请先登录'});
                    history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]);
                }
            });
    }, [history, isLoggedIn]);

    const {children} = props;
    return <Route>{children}</Route>;
}

export default RequireLogin;