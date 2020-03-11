import React from 'react';
import Item from '../Item';
import {ButtonProps} from 'antd/lib/button';
import CriticalOperationConfirmModal from '../../../../../../../../../../Component/CriticalOperationConfirmModal';
import {InputProps} from 'antd/lib/input';
import {ModalProps} from 'antd/lib/modal';

interface IProps
{
    onButtonClick: ButtonProps['onClick'],

    modalRepositoryName: string,
    modalPassword: string,

    onModalRepositoryNameInputChange: InputProps['onChange'],
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
        modalRepositoryName,
        modalPassword,
        onModalRepositoryNameInputChange,
        onModalPasswordInputChange,
        onModalOk,
        onModalCancel,
        modalVisible,
        modalConfirmLoading,
    } = props;
    return (
        <>
            <Item title={'删除仓库'} description={'删除仓库的操作不可恢复，请慎重。'} onButtonClick={onButtonClick} />
            <CriticalOperationConfirmModal
                warning={
                    <strong>
                        如果仓库被删除，您将丢失仓库的文件、提交记录等<span style={{color: 'red'}}>所有信息</span>，且删除成功后没有恢复的可能。请在下方输入本仓库的名字和您的密码以确认操作。
                    </strong>}
                validateInputPlaceholder={'仓库的名字'}
                title={'删除仓库确认'}
                validateText={modalRepositoryName}
                password={modalPassword}
                onValidateInputChange={onModalRepositoryNameInputChange}
                onPasswordInputChange={onModalPasswordInputChange}
                onOk={onModalOk}
                onCancel={onModalCancel}
                visible={modalVisible}
                confirmLoading={modalConfirmLoading} />
        </>
    );
}

export default React.memo(DeleteRepositoryItemView);