import React, {ReactNode, useEffect, useState} from 'react';
import View from './View';
import {useDispatch, useSelector} from 'react-redux';
import {Profile} from '../../Class';
import {Account, Profile as ProfileApi} from '../../Api';
import {setLoggedInAction, setLoggedOutAction} from './Action/Action';
import {IRootState as StoreRootState, IState as StoreState} from '../../Store';

interface IProps
{
    children?: ReactNode,
}

function Root(props: IProps)
{
    const [profile, setProfile] = useState<Profile | null>(null);
    const {isLoggedIn} = useSelector<StoreState, StoreRootState>(({Root}) => Root);
    const dispatch = useDispatch();

    useEffect(() =>
    {
        Account.checkSession()
            .then(result =>
            {
                if (result !== null && result.isValid)
                {
                    dispatch(setLoggedInAction());
                }
            });
    }, [dispatch]);

    useEffect(() =>
    {
        if (isLoggedIn)
        {
            ProfileApi.get()
                .then(profile =>
                {
                    if (profile !== null)
                    {
                        setProfile(profile);
                    }
                    else
                    {
                        dispatch(setLoggedOutAction());
                    }
                });
        }
    }, [dispatch, isLoggedIn]);

    const {children} = props;
    return (
        <View isLoggedIn={isLoggedIn} profile={profile}>
            {children}
        </View>
    );
}

export default React.memo(Root);