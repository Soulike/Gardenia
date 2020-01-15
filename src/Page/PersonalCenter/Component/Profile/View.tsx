import React from 'react';
import Style from './Style.module.scss';
import {Profile as ProfileClass} from '../../../../Class';
import {Button, Icon} from 'antd';
import {CONFIG} from '../../../../Router';
import {Link} from 'react-router-dom';
import DefaultAvatar from './Component/DefaultAvatar';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

interface IProps
{
    profile: Readonly<ProfileClass>
}

function ProfileView(props: Readonly<IProps>)
{
    const {profile: {username, nickname, email, avatar}} = props;
    return (
        <div className={Style.Profile}>
            <div className={Style.avatarWrapper}>
                {avatar ? <img src={avatar} alt={'avatar'} className={Style.avatar} />
                    : <DefaultAvatar username={username} />}
            </div>
            <div className={Style.nameWrapper}>
                <div className={Style.username}>{username}</div>
                <div className={Style.nickname}>{nickname}</div>
            </div>
            <div className={Style.divideLine} />
            <div className={Style.editButtonWrapper}>
                <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.SETTING]} target={'_blank'}>
                    <Button block={true}>编辑</Button>
                </Link>
            </div>
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