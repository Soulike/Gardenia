import React from 'react';
import Style from './Style.module.scss';
import {CodeComment, Profile} from '../../../../../../../../../../../../../../Class';
import PersonalCenterLink from '../../../../../../../../../../../../../../Component/PersonalCenterLink';
import {Date} from '../../../../../../../../../../../../../../Function';
import {Spin} from 'antd';

interface IProps
{
    profile: Profile;
    modificationTimestamp: CodeComment['modificationTimestamp'];
    loading: boolean;
}

function CardTitle(props: IProps)
{
    const {profile: {username, email}, modificationTimestamp, loading} = props;
    return (
        <Spin spinning={loading}>
            <div className={Style.CardTitle}>

                <div className={Style.personalCenterLinkWrapper}>
                    <PersonalCenterLink committerName={username} committerEmail={email} />
                </div>
                <div className={Style.modificationTimeWrapper}>
                    最后编辑于 {Date.parseTimestampToDate(modificationTimestamp)}
                </div>
            </div>
        </Spin>);
}

export default React.memo(CardTitle);