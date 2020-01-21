import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../Component/SettingsTitle';
import SettingLabel from '../../../../Component/SettingLabel';
import {Button, Input, Tooltip} from 'antd';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {HINT} from '../../../../Validator';

interface IProps
{
    nickname: string,
    email: string,
    onNicknameInputChange: InputProps['onChange'],
    onEmailInputChange: InputProps['onChange'],
    onNicknameSubmit: ButtonProps['onClick'],
    onEmailSubmit: ButtonProps['onClick'],

    loading: boolean,
}

function Profile(props: IProps)
{
    const {
        nickname, email,
        onEmailInputChange, onNicknameInputChange,
        onEmailSubmit, onNicknameSubmit,
        loading,
    } = props;
    return (
        <div className={Style.Profile}>
            <SettingsTitle>个人资料</SettingsTitle>
            <div className={Style.item}>
                <SettingLabel>昵称</SettingLabel>
                <div className={Style.form}>
                    <div className={Style.inputWrapper}>
                        <Tooltip title={HINT.Profile.NICKNAME} trigger={'focus'}>
                            <Input onChange={onNicknameInputChange}
                                   value={nickname}
                                   disabled={loading} />
                        </Tooltip>
                    </div>
                    <div className={Style.saveButtonWrapper}>
                        <Button type={'primary'}
                                onClick={onNicknameSubmit}
                                loading={loading}
                                disabled={loading}>保存</Button>
                    </div>
                </div>
            </div>
            <div className={Style.item}>
                <SettingLabel>邮箱</SettingLabel>
                <div className={`${Style.form} ${Style.emailForm}`}>
                    <div className={`${Style.inputWrapper} ${Style.emailInputWrapper}`}>
                        <Input type={'email'} onChange={onEmailInputChange} value={email} disabled={loading} />
                    </div>
                    <div className={Style.saveButtonWrapper}>
                        <Button type={'primary'}
                                onClick={onEmailSubmit}
                                loading={loading}
                                disabled={loading}>保存</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Profile);