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
    onCancel: ModalProps['onCancel']
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
    } = props;
    return (
        <Modal className={Style.CriticalOperationConfirmModal} visible={visible} onOk={onOk} onCancel={onCancel}>
            <div className={Style.content}>
                {warning}
                <Input value={validateText}
                       onChange={onValidateInputChange}
                       placeholder={validateInputPlaceholder}
                       autoFocus={true} />
                <Input value={password} onChange={onPasswordInputChange} />
            </div>
        </Modal>
    );
}

export default React.memo(CriticalOperationConfirmModal);