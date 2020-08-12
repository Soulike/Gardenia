import React, {PureComponent} from 'react';
import View from './View';
import {ButtonProps} from 'antd/lib/button';
import {Collaborator as CollaboratorApi} from '../../../../../../../../Api';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import {notification} from 'antd';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings> {}

interface IState
{
    code: string,
    loading: boolean,
}

class AddCollaborationButton extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            code: '',
            loading: false,
        };
    }

    onClick: ButtonProps['onClick'] = async () =>
    {
        const {match: {params: {username, repositoryName: name}}} = this.props;
        this.setState({loading: true});
        const result = await CollaboratorApi.generateCode({username, name});
        if (result !== null)
        {
            const {code} = result;
            this.setState({code, loading: false});
        }
    };

    onCopy: CopyToClipboard.Props['onCopy'] = (_text, result) =>
    {
        if (result)
        {
            notification.success({message: '邀请码已成功复制'});
        }
        else
        {
            notification.warning({message: '邀请码复制失败，请手动复制'});
        }
    };

    render()
    {
        const {code, loading} = this.state;
        return (<View code={code}
                      loading={loading}
                      onClick={this.onClick}
                      onCopy={this.onCopy} />);
    }
}

export default withRouter(AddCollaborationButton);