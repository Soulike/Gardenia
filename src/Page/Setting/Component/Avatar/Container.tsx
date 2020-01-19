import React, {MouseEventHandler, PureComponent} from 'react';
import View from './View';
import {Profile} from '../../../../Api';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {notification} from 'antd';

interface IProps {}

interface IState
{
    avatar: string,
    loading: boolean,
    file: File | null
}

class Avatar extends PureComponent<IProps, IState>
{
    fileInputRef = React.createRef<HTMLInputElement>();

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            avatar: '',
            loading: false,
            file: null,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadAvatar();
        this.setState({loading: false});
    }

    loadAvatar = async () =>
    {
        const result = await Profile.get();
        if (result !== null)
        {
            const {avatar} = result;
            this.setState({avatar});
        }
    };

    onAvatarClick: MouseEventHandler<HTMLDivElement> = () =>
    {
        const input = this.fileInputRef.current;
        if (input !== null)
        {
            input.click();
        }
    };

    onAvatarInputChange: InputProps['onChange'] = e =>
    {
        const {files} = e.target;
        if (files !== null && files.length > 0)
        {
            const file = files[0];
            this.setState({
                file,
                avatar: URL.createObjectURL(file),
            });
        }
    };

    onUploadButtonClick: ButtonProps['onClick'] = async () =>
    {
        const {file} = this.state;
        if (file === null)
        {
            notification.warn({message: '请先选择头像'});
        }
        else
        {
            this.setState({loading: true});
            const result = await Profile.uploadAvatar(file);
            if (result !== null)
            {
                notification.success({message: '上传头像成功'});
                setTimeout(() =>
                {
                    window.location.reload();
                }, 1000);
            }
            this.setState({loading: false});
        }
    };

    render()
    {
        const {avatar, loading, file} = this.state;
        return (<View onAvatarInputChange={this.onAvatarInputChange}
                      onAvatarClick={this.onAvatarClick}
                      fileInputRef={this.fileInputRef}
                      avatar={avatar}
                      loading={loading} fileChanged={file !== null}
                      onUploadButtonClick={this.onUploadButtonClick} />);
    }
}

export default Avatar;