import React, {PureComponent} from 'react';
import View from './View';
import {Profile} from '../../../../../../../../../../Class';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import {Collaborator as CollaboratorApi} from '../../../../../../../../../../Api';
import {Interface as RouterInterface} from '../../../../../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {notification} from 'antd';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings>
{
    profile: Profile;
}

interface IState
{
    loading: boolean;
}

class CollaboratorCard extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            loading: false,
        };
    }

    onRemoveButtonClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {
            profile: {username: removedUsername},
            match: {params: {username, repositoryName: name}},
        } = this.props;
        this.setState({loading: true});
        const result = await CollaboratorApi.remove(
            {username, name},
            {username: removedUsername});
        if (result !== null)
        {
            notification.success({message: '移除合作者成功'});
            setTimeout(() =>
            {
                window.location.reload();
            }, 1000);
        }
        this.setState({loading: false});
    };

    render()
    {
        const {loading} = this.state;
        const {profile} = this.props;
        return (<View profile={profile} loading={loading}
                      onRemoveButtonClick={this.onRemoveButtonClick} />);
    }
}

export default withRouter(CollaboratorCard);