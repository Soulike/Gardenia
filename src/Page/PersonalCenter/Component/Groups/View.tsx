import React from 'react';
import Style from './Style.module.scss';
import {Group} from '../../../../Class';
import GroupList from '../../../../Component/GroupList';
import {Alert, Button} from 'antd';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../Router/CONFIG';
import {PlusOutlined} from '@ant-design/icons';
import NewTabLink from '../../../../Component/NewTabLink';

interface IProps
{
    groups: Readonly<Readonly<Group>[]>,
    administratingGroups?: Readonly<Readonly<Group>[]>,
    loading: boolean,
}

function GroupsView(props: Readonly<IProps>)
{
    const {groups, loading, administratingGroups} = props;
    return (
        <div className={Style.Groups}>
            <div className={Style.tools}>
                <Alert type={'info'} showIcon={true} message={'可由小组管理员邀请进组'} />
                <NewTabLink to={PAGE_ID_TO_ROUTE[PAGE_ID.CREATE_GROUP]}>
                    <Button type={'primary'}><PlusOutlined />新建小组</Button>
                </NewTabLink>
            </div>
            <GroupList groups={groups} loading={loading} administratingGroups={administratingGroups} />
        </div>
    );
}

export default React.memo(GroupsView);