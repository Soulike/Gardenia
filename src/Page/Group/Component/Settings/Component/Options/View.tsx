import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../../../Component/SettingsTitle';
import DevelopingSign from '../../../../../../Component/DevelopingSign';
import DangerZone from '../../../../../../Component/DangerZone';
import DismissGroupItem from './Component/DismissGroupItem';

function OptionsView()
{
    return (
        <div className={Style.Options}>
            <div className={Style.settingsWrapper}>
                <SettingsTitle>设置</SettingsTitle>
                <DevelopingSign />
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