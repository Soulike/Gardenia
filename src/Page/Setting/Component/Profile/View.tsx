import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../Component/SettingsTitle';
import SettingLabel from '../../../../Component/SettingLabel';
import {Button, Input} from 'antd';

interface IProps
{

}

function Profile(props: IProps)
{
    return (
        <div className={Style.Profile}>
            <SettingsTitle>个人资料</SettingsTitle>
            <div className={Style.item}>
                <SettingLabel>昵称</SettingLabel>
                <div className={Style.form}>
                    <div className={Style.inputWrapper}><Input /></div>
                    <div className={Style.saveButtonWrapper}>
                        <Button type={'primary'}>保存</Button>
                    </div>
                </div>
            </div>
            <div className={Style.item}>
                <SettingLabel>邮箱</SettingLabel>
                <div className={`${Style.form} ${Style.emailForm}`}>
                    <div className={`${Style.inputWrapper} ${Style.emailInputWrapper}`}>
                        <Input type={'email'} />
                    </div>
                    <div className={Style.saveButtonWrapper}>
                        <Button type={'primary'}>保存</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Profile);