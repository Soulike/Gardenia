import React, {useEffect, useState} from 'react';
import View from './View';
import {Profile} from '../../Class';
import {LinkProps} from 'react-router-dom';
import {Profile as ProfileApi} from '../../Api';

interface IProps extends Omit<LinkProps, 'to'>
{
    committerEmail: string,
    committerName: string,
}

function PersonalCenterLink(props: IProps)
{
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(false);
    const {committerEmail, ...rest} = props;

    useEffect(() =>
    {
        const loadProfile = async () =>
        {
            const profile = await ProfileApi.getByEmail(committerEmail);
            setProfile(profile);
        };

        setLoading(true);
        loadProfile()
            .finally(() => setLoading(false));
    }, [committerEmail]);

    return (<View profile={profile} loading={loading} {...rest} />);
}

export default React.memo(PersonalCenterLink);