import React from 'react';
import Style from './Style.module.scss';
import {Button, Icon} from 'antd';
import {ModalProps} from 'antd/lib/modal';
import JoinGroupModal from './Component/JoinGroupModal';
import {ButtonProps} from 'antd/lib/button';
import {InputProps} from 'antd/lib/input';

interface IProps
{
    onClick: ButtonProps['onClick'],
    modalVisible: ModalProps['visible'],
    onModalOk: ModalProps['onOk'],
    onModalCancel: ModalProps['onCancel'],
    groupId: string,
    onGroupIdInputChange: InputProps['onChange'],
}

function JoinGroupButtonView(props: IProps)
{
    const {modalVisible, onModalCancel, onModalOk, onClick, onGroupIdInputChange, groupId} = props;
    return (
        <>
            <Button type={'primary'} className={Style.JoinGroupButton} onClick={onClick}>
                <Icon type={'plus'} />加入
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