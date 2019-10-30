import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../Component/SettingsTitle';
import GroupList from '../../../../Component/GroupList';
import {Group} from '../../../../Class';
import JoinGroupButton from './Component/JoinGroupButton';

interface IProps
{
    groups: Group[],
    loading: boolean,
}

function GroupsView(props: IProps)
{
    const {groups, loading} = props;
    return (
        <div className={Style.Groups}>
            <SettingsTitle>
                <div className={Style.title}>
                    小组
                    <JoinGroupButton />
                </div>
            </SettingsTitle>
            <div className={Style.groupListWrapper}>
                <GroupList groups={groups} loading={loading} />
            </div>
        </div>
    );
}

export default React.memo(GroupsView);