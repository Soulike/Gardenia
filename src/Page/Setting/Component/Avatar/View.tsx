import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../Component/SettingsTitle';

interface IProps
{

}

function Avatar(props: IProps)
{
    return (
        <div className={Style.Avatar}>
            <SettingsTitle>头像</SettingsTitle>
        </div>
    );
}

export default React.memo(Avatar);