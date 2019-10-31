import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../SettingsTitle';

function OptionsView()
{
    return (
        <div className={Style.Options}>
            <SettingsTitle>设置</SettingsTitle>
        </div>
    );
}

export default React.memo(OptionsView);