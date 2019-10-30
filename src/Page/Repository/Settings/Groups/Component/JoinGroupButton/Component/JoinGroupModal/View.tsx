import React from 'react';
import Style from './Style.module.scss';
import {ModalProps} from 'antd/lib/modal';
import {Input, Modal} from 'antd';
import {InputProps} from 'antd/lib/input';

interface IProps
{
    visible: ModalProps['visible'],
    onOk: ModalProps['onOk'],
    onCancel: ModalProps['onCancel'],
    groupId: string,
    onGroupIdInputChange: InputProps['onChange']
}

function JoinGroupModal(props: IProps)
{
    const {visible, onCancel, onOk, groupId, onGroupIdInputChange} = props;
    return (
        <Modal title={'加入小组'}
               visible={visible}
               onCancel={onCancel}
               onOk={onOk}
               destroyOnClose={true}
               className={Style.JoinGroupModal} width={400}>
            <label>
                <Input placeholder={'小组的 ID'}
                       className={Style.input}
                       value={groupId}
                       onChange={onGroupIdInputChange}
                       autoFocus={true} />
            </label>
        </Modal>
    );
}

export default React.memo(JoinGroupModal);