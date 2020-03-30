import React from 'react';
import Style from './Style.module.scss';
import Avatar from '../../../Avatar';

interface IProps
{
    name: string,
    avatar: string,
}

function NameAndAvatar(props: IProps)
{
    const {name, avatar} = props;
    return (
        <div className={Style.NameAndAvatar}>
            <div className={Style.avatarWrapper}>
                <Avatar avatar={avatar} />
            </div>
            <div className={Style.nameWrapper}>
                {name}
            </div>
        </div>
    );
}

export default React.memo(NameAndAvatar);