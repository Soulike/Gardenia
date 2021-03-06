import React from 'react';
import Style from './Style.module.scss';
import {Button} from 'antd';
import {ModalProps} from 'antd/lib/modal';
import JoinGroupModal from './Component/JoinGroupModal';
import {ButtonProps} from 'antd/lib/button';
import {InputProps} from 'antd/lib/input';
import {PlusOutlined} from '@ant-design/icons';

interface IProps
{
    onClick: ButtonProps['onClick'],
    modalVisible: ModalProps['visible'],
    onModalOk: ModalProps['onOk'],
    onModalCancel: ModalProps['onCancel'],
    groupId: string,
    onGroupIdInputChange: InputProps['onChange'],
}

function JoinGroupButtonView(props: Readonly<IProps>)
{
    const {modalVisible, onModalCancel, onModalOk, onClick, onGroupIdInputChange, groupId} = props;
    return (
        <>
            <Button type={'primary'} className={Style.JoinGroupButton} onClick={onClick}>
                <PlusOutlined />加入
            </Button>
            <JoinGroupModal visible={modalVisible}
                            onOk={onModalOk}
                            onCancel={onModalCancel}
                            groupId={groupId}
                            onGroupIdInputChange={onGroupIdInputChange} />
        </>
    );
}

export default React.memo(JoinGroupButtonView);