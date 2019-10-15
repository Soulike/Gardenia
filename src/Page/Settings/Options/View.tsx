import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../Component/SettingsTitle';
import RepositoryName from './Component/RepositoryName';

function OptionsView()
{
    return (
        <div className={Style.Options}>
            <SettingsTitle>设置</SettingsTitle>
            <RepositoryName />
        </div>
    );
}

export default React.memo(OptionsView);