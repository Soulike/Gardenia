import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import {notification} from 'antd';
import {Interface as RouterInterface} from '../../../../../Router';

interface Props extends RouteComponentProps<RouterInterface.RepositoryCode> {}

interface State {}

class Empty extends PureComponent<Props, State>
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
        const {match: {params: {username, repository}}} = this.props;
        return (<View username={username} repository={repository} onCopy={this.onCopy} />);
    }
}

export default withRouter(Empty);