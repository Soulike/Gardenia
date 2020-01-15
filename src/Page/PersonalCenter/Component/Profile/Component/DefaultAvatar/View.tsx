import React from 'react';
import Style from './Style.module.scss';

interface IProps
{
    username: string,
}

function DefaultAvatar(props: IProps)
{
    const {username} = props;
    return (
        <div className={Style.DefaultAvatar}>
            <div className={Style.char}>{username.slice(0, 1)}</div>
        </div>
    );
}

export default React.memo(DefaultAvatar);