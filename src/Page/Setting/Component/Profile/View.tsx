import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../Component/SettingsTitle';
import InputLabel from '../../../../Component/InputLabel';
import {Alert} from 'antd';
import NewTabLink from '../../../../Component/NewTabLink';
import {CONFIG} from '../../../../Router';
import Nickname from './Component/Nickname';
import Email from './Component/Email';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

interface IProps
{
    defaultNickname: string,
    defaultEmail: string,
    loading: boolean,
}

function Profile(props: IProps)
{
    const {
        defaultNickname,
        defaultEmail,
        loading,
    } = props;
    return (
        <div className={Style.Profile}>
            <SettingsTitle>个人资料</SettingsTitle>
            <div className={Style.item}>
                <Nickname defaultNickname={defaultNickname} loadingDefaultNickname={loading} />
            </div>
            <div className={Style.item}>
                <Email defaultEmail={defaultEmail} loadingDefaultEmail={loading} />
            </div>
            <div className={Style.item}>
                <InputLabel>密码</InputLabel>
                <Alert type={'info'} showIcon={true} message={
                    <div>
                        前往
                        <NewTabLink to={PAGE_ID_TO_ROUTE[PAGE_ID.CHANGE_PASSWORD]}>修改密码页面</NewTabLink>
                        修改密码
                    </div>} />
            </div>
        </div>
    );
}

export default React.memo(Profile);