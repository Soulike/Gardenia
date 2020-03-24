import React from 'react';
import {ButtonProps} from 'antd/lib/button';
import CriticalOperationConfirmModal from '../../../../../../../../Component/CriticalOperationConfirmModal';
import {InputProps} from 'antd/lib/input';
import {ModalProps} from 'antd/lib/modal';
import DangerZoneItem from '../../../../../../../../Component/DangerZoneItem';
import {Alert} from 'antd';

interface IProps
{
    onButtonClick: ButtonProps['onClick'],

    modalGroupId: string,
    modalPassword: string,

    onModalGroupIdInputChange: InputProps['onChange'],
    onModalPasswordInputChange: InputProps['onChange'],

    modalVisible: ModalProps['visible'],
    onModalOk: ModalProps['onOk'],
    onModalCancel: ModalProps['onCancel'],
    modalConfirmLoading: ModalProps['confirmLoading']
}

function DeleteRepositoryItemView(props: Readonly<IProps>)
{
    const {
        onButtonClick,
        modalGroupId,
        modalPassword,
        onModalGroupIdInputChange,
        onModalPasswordInputChange,
        onModalOk,
        onModalCancel,
        modalVisible,
        modalConfirmLoading,
    } = props;
    return (
        <>
            <DangerZoneItem buttonText={'解散小组'}
                            title={'解散小组'}
                            description={'解散小组的操作不可恢复，请慎重。'}
                            onButtonClick={onButtonClick} />
            <CriticalOperationConfirmModal
                warning={
                    <>
                        <Alert showIcon={true} banner={true} type={'warning'} message={'小组被解散后无法恢复，小组下的仓库将恢复无小组状态'} />
                        <Alert showIcon={true} banner={true} type={'info'} message={'请在下方输入本小组的 ID 和您的密码以确认操作'} />
                    </>
                }
                validateInputPlaceholder={'小组的 ID'}
                title={'解散小组确认'}
                validateText={modalGroupId}
                password={modalPassword}
                onValidateInputChange={onModalGroupIdInputChange}
                onPasswordInputChange={onModalPasswordInputChange}
                onOk={onModalOk}
                onCancel={onModalCancel}
                visible={modalVisible}
                confirmLoading={modalConfirmLoading} />
        </>
    );
}

export default React.memo(DeleteRepositoryItemView);