import React, {ReactNode} from 'react';
import Style from './Style.module.scss';
import {Input, Modal} from 'antd';
import {InputProps} from 'antd/lib/input';
import {ModalProps} from 'antd/lib/modal';

interface IProps
{
    warning: ReactNode

    validateText: string,
    password: string,

    validateInputPlaceholder: string,

    onValidateInputChange: InputProps['onChange'],
    onPasswordInputChange: InputProps['onChange'],

    visible: ModalProps['visible'],
    onOk: ModalProps['onOk'],
    onCancel: ModalProps['onCancel'],
    title: ModalProps['title'],
    confirmLoading: ModalProps['confirmLoading']
}

function CriticalOperationConfirmModal(props: IProps)
{
    const {
        warning,
        validateText,
        password,
        validateInputPlaceholder,
        onValidateInputChange,
        onPasswordInputChange,
        visible,
        onOk,
        onCancel,
        title,
        confirmLoading,
    } = props;
    return (
        <Modal confirmLoading={confirmLoading}
               title={title}
               className={Style.CriticalOperationConfirmModal}
               visible={visible}
               onOk={onOk}
               onCancel={onCancel}>
            <div className={Style.content}>
                <div className={Style.warningWrapper}>{warning}</div>
                <Input className={Style.input} value={validateText}
                       onChange={onValidateInputChange}
                       placeholder={validateInputPlaceholder}
                       autoFocus={true} />
                <Input className={Style.input}
                       placeholder={'账户密码'}
                       type={'password'}
                       value={password}
                       onChange={onPasswordInputChange} />
            </div>
        </Modal>
    );
}

export default React.memo(CriticalOperationConfirmModal);