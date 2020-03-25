import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../../../Component/SettingsTitle';
import DangerZone from '../../../../../../Component/DangerZone';
import DismissGroupItem from './Component/DismissGroupItem';
import ChangeName from './Component/ChangeName';

function OptionsView()
{
    return (
        <div className={Style.Options}>
            <div className={Style.settingsWrapper}>
                <SettingsTitle>设置</SettingsTitle>
                <div className={Style.itemWrapper}>
                    <ChangeName />
                </div>
            </div>
            <div className={Style.dangerZoneWrapper}>
                <SettingsTitle><span style={{color: 'red'}}>危险区</span></SettingsTitle>
                <DangerZone>
                    <DismissGroupItem />
                </DangerZone>
            </div>
        </div>
    );
}

export default React.memo(OptionsView);