import React, {MouseEventHandler} from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../Component/SettingsTitle';
import DefaultAvatar from '../../../../Component/DefaultAvatar';
import {Alert, Button, Spin, Tooltip} from 'antd';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    avatar: string,
    loading: boolean,
    fileChanged: boolean,
    fileInputRef: React.Ref<HTMLInputElement>,
    onAvatarClick: MouseEventHandler<HTMLDivElement>,
    onAvatarInputChange: InputProps['onChange'],
    onUploadButtonClick: ButtonProps['onClick'],
}

function Avatar(props: IProps)
{
    const {
        avatar, loading,
        fileInputRef, onAvatarClick,
        onAvatarInputChange, fileChanged, onUploadButtonClick,
    } = props;
    return (
        <div className={Style.Avatar}>
            <SettingsTitle>头像</SettingsTitle>
            <div className={Style.alertWrapper}>
                <Alert message={'点击图片选择新的头像'} banner={true} type={'info'} showIcon={true} />
            </div>
            <div className={Style.body}>
                <Spin spinning={loading}>
                    <Tooltip title={'点击更换头像'}>
                        <div className={Style.avatarWrapper} onClick={onAvatarClick}>
                            {
                                avatar ? <img src={avatar} alt={'avatar'} className={Style.avatar} /> :
                                    <DefaultAvatar />
                            }
                        </div>
                    </Tooltip>
                </Spin>
                <input type="file" accept={'image/*'} multiple={false}
                       className={Style.fileInput} ref={fileInputRef}
                       onChange={onAvatarInputChange} />
                <div className={Style.buttonWrapper}>
                    <Button type={'primary'} block={true}
                            disabled={loading || !fileChanged}
                            loading={loading}
                            onClick={onUploadButtonClick}>上传</Button>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Avatar);