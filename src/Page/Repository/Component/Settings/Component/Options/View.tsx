import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../SettingsTitle';
import RepositoryName from './Component/RepositoryName';
import Description from './Component/Description';
import AccessibilitySwitch from './Component/AccessibilitySwitch';

function OptionsView()
{
    return (
        <div className={Style.Options}>
            <SettingsTitle>设置</SettingsTitle>
            <div className={Style.itemWrapper}>
                <RepositoryName />
            </div>
            <div className={Style.itemWrapper}>
                <AccessibilitySwitch />
            </div>
            <div className={Style.itemWrapper}>
                <Description />
            </div>
        </div>
    );
}

export default React.memo(OptionsView);