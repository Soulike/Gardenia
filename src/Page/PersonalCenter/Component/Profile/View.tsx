import React from 'react';
import Style from './Style.module.scss';
import {Profile as ProfileClass} from '../../../../Class';
import {Button} from 'antd';
import {CONFIG} from '../../../../Router';
import {Link} from 'react-router-dom';
import DefaultAvatar from '../../../../Component/DefaultAvatar';
import {MailOutlined} from '@ant-design/icons';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

interface IProps
{
    profile: Readonly<ProfileClass>,
    showModifyButton: boolean,
}

function ProfileView(props: Readonly<IProps>)
{
    const {profile: {username, nickname, email, avatar}, showModifyButton} = props;
    return (
        <div className={Style.Profile}>
            <div className={Style.avatarWrapper}>
                <div className={Style.avatar}>
                    {avatar ? <img src={avatar} alt={'avatar'} className={Style.avatarImg} />
                        : <DefaultAvatar />}
                </div>
            </div>
            <div className={Style.nameWrapper}>
                <div className={Style.username}>{username}</div>
                <div className={Style.nickname}>{nickname}</div>
            </div>
            <div className={Style.divideLine} />
            <div className={Style.editButtonWrapper}>
                {
                    showModifyButton ? (
                        <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.SETTING.SETTING]}>
                            <Button block={true}>编辑</Button>
                        </Link>) : null
                }
            </div>
            <div className={Style.infoWrapper}>
                <div className={Style.info}>
                    <MailOutlined className={Style.icon} />
                    <a href={`mailto:${email}`}>
                        {email}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ProfileView);