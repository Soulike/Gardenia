import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../Component/SettingsTitle';
import InputLabel from '../../../../Component/InputLabel';
import {Alert, Button, Input, Tooltip} from 'antd';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {HINT} from '../../../../Validator';
import NewTabLink from '../../../../Component/NewTabLink';
import {CONFIG} from '../../../../Router';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

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
                <InputLabel>昵称</InputLabel>
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
                <InputLabel>邮箱</InputLabel>
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