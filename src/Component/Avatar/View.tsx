import React from 'react';
import Style from './Style.module.scss';
import svg from '../../Static/PersonalCenter/default.svg';

interface IProps
{
    avatar: string,
}

function Avatar(props: IProps)
{
    const {avatar} = props;
    return (
        <div className={Style.Avatar}>
            <img src={avatar.length === 0 ? svg : avatar}
                 alt={'avatar'}
                 className={Style.img} />
        </div>
    );
}

export default React.memo(Avatar);