import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../SettingsTitle';
import RepositoryName from './Component/RepositoryName';
import Description from './Component/Description';

function OptionsView()
{
    return (
        <div className={Style.Options}>
            <SettingsTitle>设置</SettingsTitle>
            <div className={Style.itemWrapper}>
                <RepositoryName />
            </div>
            <div className={Style.itemWrapper}>
                <Description />
            </div>
        </div>
    );
}

export default React.memo(OptionsView);