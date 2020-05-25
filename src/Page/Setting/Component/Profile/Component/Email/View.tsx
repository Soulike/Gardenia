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
    onEmailSubmit: ButtonProps['onClick'],

    loading: boolean,
}

function Email(props: IProps)
{
    const {email, loading, onEmailInputChange, onEmailSubmit} = props;
    return (
        <div className={Style.Email}>
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
    );
}

export default React.memo(Email);