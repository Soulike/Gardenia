import React, {PureComponent} from 'react';
import View from './View';
import CopyToClipboard from 'react-copy-to-clipboard';
import {notification} from 'antd';

interface IProps
{
    username: string,
    repository: string,
}

class CloneButton extends PureComponent<IProps>
{
    onCopy: CopyToClipboard.Props['onCopy'] = (_text, result) =>
    {
        if (result)
        {
            notification.success({message: '地址已成功复制'});
        }
        else
        {
            notification.warning({message: '地址复制失败，请手动复制'});
        }
    };

    render()
    {
        const {username, repository} = this.props;
        return (<View username={username} repository={repository} onCopy={this.onCopy} />);
    }
}

export default CloneButton;