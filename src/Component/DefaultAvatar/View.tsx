import React from 'react';
import Style from './Style.module.scss';
import svg from '../../Static/PersonalCenter/default.svg';

function DefaultAvatar()
{
    return (
        <div className={Style.DefaultAvatar}>
            <img src={svg} alt={'default_avatar'} className={Style.img} />
        </div>
    );
}

export default React.memo(DefaultAvatar);