import React from 'react';
import Style from './Style.module.scss';
import {Group} from '../../../../Class';
import GroupList from '../../../../Component/GroupList';
import {Alert} from 'antd';

interface IProps
{
    groups: Group[],
    loading: boolean,
    administratingGroups?: Group[],
}

function GroupsView(props: IProps)
{
    const {groups, loading, administratingGroups} = props;
    return (
        <div className={Style.Groups}>
            <div className={Style.tools}>
                <Alert type={'info'} showIcon={true} message={'可由小组管理员邀请进组'} />
            </div>
            <GroupList groups={groups} loading={loading} administratingGroups={administratingGroups} />
        </div>
    );
}

export default React.memo(GroupsView);