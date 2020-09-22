import React from 'react';
import {List} from 'antd';
import NewTabLink from '../../../../../../Component/NewTabLink';
import Style from './Style.module.scss';
import Avatar from '../../../../../../Component/Avatar';
import {Function as RouterFunction} from '../../../../../../Router';
import {Profile} from '../../../../../../Class';

interface IProps
{
    profile: Readonly<Profile>,
}

function ProfileItem(props: IProps)
{
    const {profile} = props;
    const {avatar, username, nickname, email} = profile;
    const personalCenterLink = RouterFunction.generatePersonalCenterRoute({username});
    return (
        <List.Item className={Style.ProfileItem}>
            <List.Item.Meta avatar={
                <NewTabLink to={personalCenterLink}>
                    <div className={Style.avatarWrapper}>
                        <Avatar avatar={avatar} />
                    </div>
                </NewTabLink>}
                            title={(
                                <div className={Style.titleWrapper}>
                                    <NewTabLink to={personalCenterLink}>
                                                            <span className={Style.nicknameWrapper}>
                                                                {nickname}
                                                            </span>
                                    </NewTabLink>
                                    <span className={Style.usernameWrapper}>
                                                              {username}
                                                          </span>
                                </div>)} />
            <a href={`mailto:${email}`}>
                <div className={Style.emailWrapper}>
                    {email}
                </div>
            </a>
        </List.Item>);
}

export default React.memo(ProfileItem);