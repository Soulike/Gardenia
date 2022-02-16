import React, {PureComponent} from 'react';
import View from './View';
import {Repository} from '../../../../../../../../../../Class';
import {Interface as RouterInterface} from '../../../../../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import {Group as GroupApi} from '../../../../../../../../../../Api';
import {notification} from 'antd';
import {EVENT, eventEmitter} from '../../../../EVENT';
import {PopconfirmProps} from 'antd/lib/popconfirm';

interface IProps extends RouteComponentProps<RouterInterface.IGroupSettingsRepositories>
{
    repository: Readonly<Repository>,
}

interface IState
{
    loading: boolean,
}

class RepositoryItem extends PureComponent<IProps, IState>
{
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
            loading: false,
        };
    }

    onRemoveButtonClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {
            match: {params: {id}},
            repository: {username, name},
        } = this.props;
        await this.setStatePromise({loading: true});
        const result = await GroupApi.removeRepositories(
            {id: Number.parseInt(id)},
            [{username, name}]);
        if (result !== null)
        {
            notification.success({message: `仓库 ${username}/${name} 已从 #${id} 小组中删除`});
            eventEmitter.emit(EVENT.repositoryChange);
        }
        await this.setStatePromise({loading: false});
    };

    render()
    {
        const {repository} = this.props;
        const {loading} = this.state;
        return (<View loading={loading}
                      onRemoveButtonClick={this.onRemoveButtonClick}
                      repository={repository} />);
    }
}

export default withRouter(RepositoryItem);