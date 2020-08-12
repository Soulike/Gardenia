import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import {notification} from 'antd';
import {Interface as RouterInterface} from '../../../../../../Router';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode> {}

interface IState {}

class Empty extends PureComponent<Readonly<IProps>, IState>
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
        const {match: {params: {username, repositoryName}}} = this.props;
        return (<View username={username} repositoryName={repositoryName} onCopy={this.onCopy} />);
    }
}

export default withRouter(Empty);