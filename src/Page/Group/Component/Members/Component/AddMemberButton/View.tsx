import React from 'react';
import {Button, Input, Modal} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {ButtonProps} from 'antd/lib/button';
import {ModalProps} from 'antd/lib/modal';
import Style from './Style.module.scss';
import {InputProps} from 'antd/lib/input';

export interface IAddMemberButtonProps
{
    onClick: ButtonProps['onClick'],

    showModal: boolean,
    onModalOkClick: ModalProps['onOk'],
    onModalCancelClick: ModalProps['onCancel'],

    username: string,
    onUsernameChange: InputProps['onChange'],

    loading: boolean,
}

function AddMemberButton(props: IAddMemberButtonProps)
{
    const {
        onClick, showModal, username, loading,
        onModalCancelClick, onModalOkClick, onUsernameChange,
    } = props;
    return (
        <>
            <Button type={'primary'} onClick={onClick} loading={loading} disabled={loading}>
                <PlusOutlined />
                添加成员
            </Button>
            <Modal destroyOnClose={true}
                   width={300}
                   title={'添加小组成员'}
                   visible={showModal}
                   onOk={onModalOkClick}
                   onCancel={onModalCancelClick} confirmLoading={loading}>
                <div className={Style.modalContent}>
                    <Input value={username}
                           onChange={onUsernameChange}
                           autoFocus={true}
                           placeholder={'新小组成员的用户名'}
                           className={Style.usernameInput} />
                </div>
            </Modal>
        </>
    );
}

export default React.memo(AddMemberButton);