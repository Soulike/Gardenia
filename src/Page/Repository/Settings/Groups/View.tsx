import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../Component/SettingsTitle';
import {Button, Icon} from 'antd';
import GroupList from '../../../../Component/GroupList';
import {Group} from '../../../../Class';

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
                    <Button type={'primary'} className={Style.joinButton} disabled={loading}>
                        <Icon type={'plus'} />加入
                    </Button>
                </div>
            </SettingsTitle>
            <div className={Style.groupListWrapper}>
                <GroupList groups={groups} loading={loading} />
            </div>
        </div>
    );
}

export default React.memo(GroupsView);