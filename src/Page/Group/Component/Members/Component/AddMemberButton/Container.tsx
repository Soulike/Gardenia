import React, {PureComponent} from 'react';
import View from './View';
import {ButtonProps} from 'antd/lib/button';
import {ModalProps} from 'antd/lib/modal';
import {promisify} from 'util';
import {InputProps} from 'antd/lib/input';
import {RouteComponentProps, withRouter} from 'react-router';
import {Interface as RouterInterface} from '../../../../../../Router';
import {Group as GroupApi} from '../../../../../../Api';
import {Function as ValidatorFunction} from '../../../../../../Validator';
import {notification} from 'antd';
import {EVENT, eventEmitter} from '../../EVENT';


export interface IAddMemberButtonProps extends RouteComponentProps<RouterInterface.IGroup> {}

interface IState
{
    showModal: boolean,
    username: string,
    loading: boolean,
}

class AddMemberButton extends PureComponent<IAddMemberButtonProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IAddMemberButtonProps)
    {
        super(props);
        this.state = {
            showModal: false,
            username: '',
            loading: false,
        };
    }

    initModal = async () =>
    {
        this.setStatePromise({username: ''});
    };

    onClick: ButtonProps['onClick'] = async () =>
    {
        await this.setStatePromise({showModal: true});
        await this.initModal();
    };

    onModalOkClick: ModalProps['onOk'] = async () =>
    {
        const {match: {params: {id}}} = this.props;
        const {username} = this.state;
        if (!ValidatorFunction.Account.username(username))
        {
            notification.error({message: `用户 ${username} 不存在`});
        }
        else
        {
            await this.setStatePromise({loading: true});
            const result = await GroupApi.addAccounts({id: Number.parseInt(id)}, [username]);
            if (result !== null)
            {
                notification.success({message: `添加成员 ${username} 成功`});
                await this.setStatePromise({showModal: false});
                eventEmitter.emit(EVENT.addMember);
            }
            await this.setStatePromise({loading: false});
        }
    };

    onModalCancelClick: ModalProps['onCancel'] = async () =>
    {
        await this.setStatePromise({showModal: false});
    };

    onUsernameChange: InputProps['onChange'] = e =>
    {
        this.setState({username: e.target.value});
    };

    render()
    {
        const {showModal, username, loading} = this.state;
        return (<View loading={loading} showModal={showModal}
                      username={username}
                      onClick={this.onClick}
                      onModalCancelClick={this.onModalCancelClick}
                      onModalOkClick={this.onModalOkClick}
                      onUsernameChange={this.onUsernameChange} />);
    }
}

export default withRouter(AddMemberButton);