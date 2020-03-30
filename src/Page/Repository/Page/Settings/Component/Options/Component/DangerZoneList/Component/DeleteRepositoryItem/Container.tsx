import React, {PureComponent} from 'react';
import View from './View';
import {ButtonProps} from 'antd/lib/button';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {ModalProps} from 'antd/lib/modal';
import {InputProps} from 'antd/lib/input';
import {notification} from 'antd';
import {Account as AccountClass} from '../../../../../../../../../../Class';
import {Account as AccountApi, Repository as RepositoryApi} from '../../../../../../../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings> {}

interface IState
{
    modalRepositoryName: string,
    modalPassword: string,
    modalVisible: ModalProps['visible'],
    modalConfirmLoading: ModalProps['confirmLoading']
}

class DeleteRepositoryItem extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            modalRepositoryName: '',
            modalPassword: '',
            modalVisible: false,
            modalConfirmLoading: false,
        };
    }

    onButtonClick: ButtonProps['onClick'] = async () =>
    {
        this.setState({
            modalRepositoryName: '',
            modalPassword: '',
            modalVisible: true,
        });
    };

    onModalRepositoryNameInputChange: InputProps['onChange'] = e =>
    {
        this.setState({modalRepositoryName: e.target.value});
    };

    onModalPasswordInputChange: InputProps['onChange'] = e =>
    {
        this.setState({modalPassword: e.target.value});
    };

    onModalOk: ModalProps['onOk'] = async () =>
    {
        const {match: {params: {repository, username}}, history} = this.props;
        const {modalRepositoryName, modalPassword} = this.state;
        if (repository !== modalRepositoryName)
        {
            notification.warn({message: '仓库名不正确'});
        }
        else
        {
            const hash = AccountClass.calculateHash(username, modalPassword);
            this.setState({modalConfirmLoading: true});
            const result = await AccountApi.checkPassword({hash});
            if (result !== null)
            {
                const {isCorrect} = result;
                if (isCorrect)
                {
                    const result = await RepositoryApi.del({name: repository});
                    if (result !== null)
                    {
                        notification.success({message: '仓库删除成功'});
                        this.setState({modalVisible: false});
                        return history.replace(RouterFunction.generatePersonalCenterRoute({username}));
                    }
                }
                else
                {
                    notification.warn({message: '密码不正确'});
                }
            }
            this.setState({modalConfirmLoading: false});
        }
    };

    onModalCancel: ModalProps['onCancel'] = () =>
    {
        this.setState({modalVisible: false});
    };

    render()
    {
        const {modalConfirmLoading, modalVisible, modalPassword, modalRepositoryName} = this.state;
        return (<View onButtonClick={this.onButtonClick}
                      modalConfirmLoading={modalConfirmLoading}
                      modalVisible={modalVisible}
                      modalPassword={modalPassword}
                      modalRepositoryName={modalRepositoryName}
                      onModalOk={this.onModalOk}
                      onModalCancel={this.onModalCancel}
                      onModalPasswordInputChange={this.onModalPasswordInputChange}
                      onModalRepositoryNameInputChange={this.onModalRepositoryNameInputChange} />);
    }
}

export default withRouter(DeleteRepositoryItem);