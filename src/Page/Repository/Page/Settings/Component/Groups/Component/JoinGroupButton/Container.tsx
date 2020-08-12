import React, {PureComponent} from 'react';
import View from './View';
import {ModalProps} from 'antd/lib/modal';
import {ButtonProps} from 'antd/lib/button';
import {InputProps} from 'antd/lib/input';
import isNumber from 'is-number';
import {Group as GroupApi} from '../../../../../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import {notification} from 'antd';
import eventEmitter from '../../EventEmitter';
import {GROUP_LIST_UPDATED} from '../../EVENT';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings> {}

interface IState
{
    modalVisible: ModalProps['visible'],
    groupId: string,
}

class JoinGroupButton extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            modalVisible: false,
            groupId: '',
        };
    }

    onClick: ButtonProps['onClick'] = () =>
    {
        this.setState({modalVisible: true, groupId: ''});
    };

    onGroupIdInputChange: InputProps['onChange'] = e =>
    {
        const {value} = e.target;
        if (value === '' || isNumber(value))
        {
            this.setState({groupId: value});
        }
    };

    onModalOk: ModalProps['onOk'] = async () =>
    {
        const {groupId} = this.state;
        if (!isNumber(groupId))
        {
            notification.warn({message: '小组 ID 必须是数字'});
        }
        else
        {
            const {match: {params: {repositoryName: name, username}}} = this.props;
            const result = await GroupApi.addRepository({username, name}, {id: Number.parseInt(groupId)});
            if (result !== null)
            {
                notification.success({message: '加入小组成功'});
                eventEmitter.emit(GROUP_LIST_UPDATED);
                this.setState({modalVisible: false});
            }
        }
    };

    onModalCancel: ModalProps['onCancel'] = () =>
    {
        this.setState({modalVisible: false});
    };

    render()
    {
        const {modalVisible, groupId} = this.state;
        return (<View modalVisible={modalVisible}
                      onClick={this.onClick}
                      onModalOk={this.onModalOk}
                      onModalCancel={this.onModalCancel}
                      onGroupIdInputChange={this.onGroupIdInputChange}
                      groupId={groupId} />);
    }
}

export default withRouter(JoinGroupButton);