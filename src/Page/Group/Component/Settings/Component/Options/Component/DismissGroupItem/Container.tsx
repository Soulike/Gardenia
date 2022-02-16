import React, {PureComponent} from 'react';
import View from './View';
import {ButtonProps} from 'antd/lib/button';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {ModalProps} from 'antd/lib/modal';
import {InputProps} from 'antd/lib/input';

import {notification} from 'antd';
import {Account as AccountApi, Group as GroupApi, Profile as ProfileApi} from '../../../../../../../../Api';
import {Account} from '../../../../../../../../Class';
import {Function as ValidatorFunction} from '../../../../../../../../Validator';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../../../../../CONFIG';

interface IProps extends RouteComponentProps<RouterInterface.IGroupSettings> {}

interface IState
{
    modalGroupId: string,
    modalPassword: string,
    modalVisible: ModalProps['visible'],
    modalConfirmLoading: ModalProps['confirmLoading']
}

class DismissGroupItem extends PureComponent<Readonly<IProps>, IState>
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

    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            modalGroupId: '',
            modalPassword: '',
            modalVisible: false,
            modalConfirmLoading: false,
        };
    }

    onButtonClick: ButtonProps['onClick'] = async () =>
    {
        await this.initModal();
        await this.setStatePromise({
            modalVisible: true,
        });
    };

    initModal = async () =>
    {
        await this.setStatePromise({
            modalGroupId: '',
            modalPassword: '',
        });
    };

    onModalGroupIdInputChange: InputProps['onChange'] = e =>
    {
        this.setState({modalGroupId: e.target.value});
    };

    onModalPasswordInputChange: InputProps['onChange'] = e =>
    {
        this.setState({modalPassword: e.target.value});
    };

    onModalOk: ModalProps['onOk'] = async () =>
    {
        const {modalGroupId, modalPassword} = this.state;
        const {match: {params: {id: groupId}}, history} = this.props;
        if (modalGroupId !== groupId)
        {
            notification.warn({message: '小组 ID 不正确'});
        }
        else if (!ValidatorFunction.Account.password(modalPassword))
        {
            notification.warn({message: '密码不正确'});
        }
        else
        {
            await this.setStatePromise({modalConfirmLoading: true});
            const profile = await ProfileApi.get();
            if (profile !== null)
            {
                const {username} = profile;
                const result = await AccountApi.checkPassword({hash: Account.calculateHash(username, modalPassword)});
                if (result !== null)
                {
                    const {isCorrect} = result;
                    if (!isCorrect)
                    {
                        notification.warn({message: '密码不正确'});
                    }
                    else
                    {
                        const result = await GroupApi.dismiss({id: Number.parseInt(groupId)});
                        if (result !== null)
                        {
                            notification.success({message: `小组 #${groupId} 已解散`});
                            await this.setStatePromise({modalVisible: false});
                            return history.push(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
                        }
                    }
                }
            }
            else
            {
                return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]);
            }
            await this.setStatePromise({modalConfirmLoading: false});
        }
    };

    onModalCancel: ModalProps['onCancel'] = () =>
    {
        this.setState({modalVisible: false});
    };

    render()
    {
        const {modalConfirmLoading, modalVisible, modalPassword, modalGroupId} = this.state;
        return (<View onButtonClick={this.onButtonClick}
                      modalConfirmLoading={modalConfirmLoading}
                      modalVisible={modalVisible}
                      modalPassword={modalPassword}
                      modalGroupId={modalGroupId}
                      onModalOk={this.onModalOk}
                      onModalCancel={this.onModalCancel}
                      onModalPasswordInputChange={this.onModalPasswordInputChange}
                      onModalGroupIdInputChange={this.onModalGroupIdInputChange} />);
    }
}

export default withRouter(DismissGroupItem);