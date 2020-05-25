import React from 'react';
import Style from './Style.module.scss';
import InputLabel from '../../../../../../Component/InputLabel/View';
import {Button, Input} from 'antd';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    email: string,
    onEmailInputChange: InputProps['onChange'],

    verificationCode: string,
    onVerificationCodeInputChange: InputProps['onChange'],
    getVerificationCodeButtonText: string,
    onGetVerificationCodeButtonClick: ButtonProps['onClick'],
    disableGetVerificationCodeButton: boolean,

    onEmailSubmit: ButtonProps['onClick'],
    loading: boolean,
}

function Email(props: IProps)
{
    const {
        email, loading,
        onEmailInputChange, onEmailSubmit,
        disableGetVerificationCodeButton,
        getVerificationCodeButtonText,
        onGetVerificationCodeButtonClick,
        onVerificationCodeInputChange, verificationCode,
    } = props;
    return (
        <div className={Style.Email}>
            <InputLabel>邮箱</InputLabel>
            <div className={Style.form}>
                <div className={Style.inputWrapper}>
                    <Input type={'email'}
                           onChange={onEmailInputChange}
                           value={email}
                           disabled={loading}
                           className={Style.emailInput} />
                    <Input type={'text'} onChange={onVerificationCodeInputChange}
                           value={verificationCode} placeholder={'邮箱验证码'}
                           addonAfter={(
                               <Button type={'link'} size={'small'}
                                       disabled={disableGetVerificationCodeButton || loading}
                                       className={Style.getVerificationCodeButton}
                                       onClick={onGetVerificationCodeButtonClick}>
                                   {getVerificationCodeButtonText}
                               </Button>)}
                           className={Style.verificationCodeInput} />
                </div>
                <div className={Style.saveButtonWrapper}>
                    <Button type={'primary'}
                            onClick={onEmailSubmit}
                            loading={loading}
                            disabled={loading}>保存</Button>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Email);