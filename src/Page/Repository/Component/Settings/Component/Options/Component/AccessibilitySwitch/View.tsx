import React from 'react';
import Style from './Style.module.scss';
import {Icon, Switch} from 'antd';
import SettingLabel from '../../../SettingLabel';
import {SwitchProps} from 'antd/lib/switch';
import CriticalOperationConfirmModal from '../../../../../../../../Component/CriticalOperationConfirmModal';
import {InputProps} from 'antd/lib/input';
import {ModalProps} from 'antd/lib/modal';

interface IProps
{
    loading: boolean,
    isPublic: boolean,
    onSwitchChange: SwitchProps['onChange'],

    modalRepositoryName: string,
    modalPassword: string,

    onModalRepositoryNameInputChange: InputProps['onChange'],
    onModalPasswordInputChange: InputProps['onChange'],

    modalVisible: ModalProps['visible'],
    onModalOk: ModalProps['onOk'],
    onModalCancel: ModalProps['onCancel']
}

function AccessibilitySwitchView(props: Readonly<IProps>)
{
    const {
        loading,
        isPublic,
        onSwitchChange,
        modalRepositoryName,
        modalPassword,
        onModalRepositoryNameInputChange,
        onModalPasswordInputChange,
        modalVisible,
        onModalOk,
        onModalCancel,
    } = props;
    return (
        <>
            <div className={Style.AccessibilitySwitch}>
                <SettingLabel>是否公开</SettingLabel>
                <Switch loading={loading}
                        checked={isPublic}
                        disabled={loading}
                        onChange={onSwitchChange}
                        checkedChildren={
                            <><Icon type="unlock" /> 公开</>
                        }
                        unCheckedChildren={
                            <><Icon type="lock" /> 私有</>
                        } />
            </div>
            <CriticalOperationConfirmModal confirmLoading={loading} title={'可见性切换确认'} warning={
                <strong>将仓库改为公有将会让<span style={{color: 'red'}}>所有人</span>看到仓库内的代码，请在下方输入本仓库的名字和您的密码以确认操作。</strong>
            }
                                           validateInputPlaceholder={'仓库名'}
                                           validateText={modalRepositoryName}
                                           password={modalPassword}
                                           visible={modalVisible}
                                           onPasswordInputChange={onModalPasswordInputChange}
                                           onValidateInputChange={onModalRepositoryNameInputChange}
                                           onOk={onModalOk}
                                           onCancel={onModalCancel} />
        </>
    );
}

export default React.memo(AccessibilitySwitchView);