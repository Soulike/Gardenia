import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../SettingsTitle';
import RepositoryName from './Component/RepositoryName';
import Description from './Component/Description';
import AccessibilitySwitch from './Component/AccessibilitySwitch';
import {Repository} from '../../../../../../Class';
import DangerZoneList from './Component/DangerZoneList';

interface IProps
{
    repository: Repository,
    loading: boolean,
}

function OptionsView(props: IProps)
{
    const {repository, loading} = props;
    return (
        <div className={Style.Options}>
            <SettingsTitle>选项</SettingsTitle>
            <div className={Style.itemWrapper}>
                <RepositoryName />
            </div>
            <div className={Style.itemWrapper}>
                <AccessibilitySwitch repository={repository} loading={loading} />
            </div>
            <div className={Style.itemWrapper}>
                <Description repository={repository} loading={loading} />
            </div>
            <SettingsTitle><span style={{color: 'red'}}>危险区</span></SettingsTitle>
            <DangerZoneList />
        </div>
    );
}

export default React.memo(OptionsView);