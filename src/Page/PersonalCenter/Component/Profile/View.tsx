import React from 'react';
import Style from './Style.module.scss';
import avatar from '../../../../Static/PersonalCenter/user_group.svg';
import {Profile as ProfileClass} from '../../../../Class';
import {Icon} from 'antd';

interface IProps
{
    profile: ProfileClass
}

function ProfileView(props: IProps)
{
    const {profile: {username, nickname, email}} = props;
    return (
        <div className={Style.Profile}>
            <div className={Style.avatarWrapper}>
                <img src={avatar} alt={'avatar'} className={Style.avatar} />
            </div>
            <div className={Style.nameWrapper}>
                <div className={Style.username}>{username}</div>
                <div className={Style.nickname}>{nickname}</div>
            </div>
            <div className={Style.divideLine} />
            <div className={Style.infoWrapper}>
                <div className={Style.info}>
                    <Icon type={'mail'} className={Style.icon} />
                    <a href={`mailto:${email}`}>
                        {email}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ProfileView);