import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../SettingsTitle';
import DevelopingSign from '../../../../../../Component/DevelopingSign';

function OptionsView()
{
    return (
        <div className={Style.Options}>
            <SettingsTitle>设置</SettingsTitle>
            <DevelopingSign />
        </div>
    );
}

export default React.memo(OptionsView);