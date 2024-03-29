import React, {MouseEventHandler, PureComponent} from 'react';
import View from './View';
import {Profile} from '../../../../Api';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {notification} from 'antd';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';
import {RouteComponentProps} from 'react-router-dom';


interface IProps extends RouteComponentProps {}

interface IState
{
    avatar: string,
    loading: boolean,
    file: File | null
}

class Avatar extends PureComponent<IProps, IState>
{
    // 允许上传的图像类型
    private static ALLOWED_MIME_TYPE: Readonly<string[]> = [
        'image/jpeg',
        'image/png',
    ];
    private fileInputRef = React.createRef<HTMLInputElement>();
    private setStatePromise = (state: any) =>
    {
        return new Promise<void>(resolve =>
        {
            this.setState(state, () =>
            {
                resolve();
            });
        });
    };

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
        await this.setStatePromise({loading: true});
        await this.loadAvatar();
        await this.setStatePromise({loading: false});
    }

    loadAvatar = async () =>
    {
        const result = await Profile.get();
        if (result !== null)
        {
            const {avatar} = result;
            await this.setStatePromise({avatar});
        }
        else
        {
            const {history} = this.props;
            return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
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
        if (files !== null)
        {
            if (files.length === 1)
            {
                const file = files[0];
                const {type, size} = file;
                if (size <= 2 * 1024 * 1024 && Avatar.ALLOWED_MIME_TYPE.includes(type))
                {
                    this.setState({
                        file,
                        avatar: URL.createObjectURL(file),
                    });
                }
                else
                {
                    notification.error({message: '只能上传 2M 以内的 JPG 或 PNG 图像文件作为头像'});
                }
            }
            else
            {
                notification.error({message: '只能上传一个文件作为头像'});
            }
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
                      onUploadButtonClick={this.onUploadButtonClick}
                      accept={Avatar.ALLOWED_MIME_TYPE.join(',')} />);
    }
}

export default Avatar;