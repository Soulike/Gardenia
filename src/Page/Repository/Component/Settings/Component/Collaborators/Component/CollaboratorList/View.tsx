import React from 'react';
import Style from './Style.module.scss';
import {Profile} from '../../../../../../../../Class';
import {Empty, List} from 'antd';
import CollaboratorCard from './Component/CollaboratorCard';

interface IProps
{
    profiles: Profile[];
    loading: boolean,
}

function CollaboratorList(props: IProps)
{
    const {profiles, loading} = props;
    return (
        <div className={Style.ProfileList}>
            <List locale={{emptyText: <Empty description={'没有用户'} />}}
                  loading={loading}
                  dataSource={profiles}
                  renderItem={profile => (<CollaboratorCard profile={profile} />)} />
        </div>
    );
}

export default React.memo(CollaboratorList);