import React from 'react';
import {Link, LinkProps} from 'react-router-dom';
import {Function as RouterFunction} from '../../Router';
import {Profile} from '../../Class';
import Style from './Style.module.scss';
import {Spin} from 'antd';
import NameAndAvatar from './Component/NameAndAvatar';

interface IProps extends Omit<LinkProps, 'to'>
{
    profile: Profile | null,
    committerName: string,
    loading: boolean,
}

function PersonalCenterLink(props: IProps)
{
    const {profile, loading, committerName} = props;
    return (
        <Spin spinning={loading}>
            <div className={Style.PersonalCenterLink}>
                {
                    profile === null ? (
                        <NameAndAvatar name={committerName} avatar={''} />
                    ) : (
                        <Link to={RouterFunction.generatePersonalCenterRoute({username: profile.username})}>
                            <NameAndAvatar name={profile.nickname} avatar={profile.avatar} />
                        </Link>)
                }
            </div>
        </Spin>
    );
}

export default React.memo(PersonalCenterLink);