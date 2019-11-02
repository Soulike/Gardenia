import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import {ModalProps} from 'antd/lib/modal';
import {SwitchProps} from 'antd/lib/switch';
import {InputProps} from 'antd/lib/input';
import {Account as AccountApi, RepositoryInfo as RepositoryInfoApi} from '../../../../../../../../Api';
import {notification} from 'antd';
import {Account as AccountClass, Repository} from '../../../../../../../../Class';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings>
{
    repository: Repository,
    loading: boolean,
}

interface IState
{
    submitting: boolean,
    isPublic: boolean,

    modalRepositoryName: string,
    modalPassword: string,
    modalVisible: ModalProps['visible'],
}

class AccessibilitySwitch extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            submitting: false,
            isPublic: true,
            modalRepositoryName: '',
            modalPassword: '',
            modalVisible: false,
        };
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {repository: {isPublic}, loading} = this.props;
        const {loading: prevLoading} = prevProps;
        if (prevLoading && loading)
        {
            this.setState({isPublic});
        }
    }

    onSwitchChange: SwitchProps['onChange'] = async checked =>
    {
        const {isPublic: prevIsPublic} = this.state;
        if (!prevIsPublic && checked)    // 私有变公有，需要验证
        {
            this.setState({modalVisible: true});
        }
        else if (prevIsPublic && !checked) // 公有变私有，不需要验证
        {
            await this.setIsPublic(checked);
        }
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
        const {match: {params: {repository, username}}} = this.props;
        const {modalRepositoryName, modalPassword, isPublic} = this.state;
        if (repository !== modalRepositoryName)
        {
            notification.warn({message: '仓库名不正确'});
        }
        else
        {
            const hash = AccountClass.calculateHash(username, modalPassword);
            const result = await AccountApi.checkPassword({hash});
            if (result !== null)
            {
                const {isCorrect} = result;
                if (isCorrect)
                {
                    await this.setIsPublic(!isPublic);
                    this.setState({modalVisible: false, modalRepositoryName: '', modalPassword: ''});
                }
                else
                {
                    notification.warn({message: '密码不正确'});
                }
            }
        }
    };

    onModalCancel: ModalProps['onCancel'] = async () =>
    {
        this.setState({modalVisible: false, modalRepositoryName: '', modalPassword: ''});
    };

    setIsPublic = async (isPublic: boolean) =>
    {
        const {match: {params: {repository}}} = this.props;
        const {isPublic: prevIsPublic} = this.state;
        if (prevIsPublic !== isPublic)
        {
            this.setState({submitting: true});
            const result = await RepositoryInfoApi.setIsPublic({name: repository, isPublic});
            if (result !== null)
            {
                window.location.reload();
            }
            this.setState({submitting: false});
        }
    };

    render()
    {
        const {
            submitting,
            isPublic,
            modalRepositoryName,
            modalPassword,
            modalVisible,
        } = this.state;
        const {loading: loadingInitValues} = this.props;
        return (<View loading={submitting || loadingInitValues}
                      isPublic={isPublic}
                      modalRepositoryName={modalRepositoryName}
                      modalPassword={modalPassword}
                      modalVisible={modalVisible}
                      onSwitchChange={this.onSwitchChange}
                      onModalOk={this.onModalOk}
                      onModalCancel={this.onModalCancel}
                      onModalPasswordInputChange={this.onModalPasswordInputChange}
                      onModalRepositoryNameInputChange={this.onModalRepositoryNameInputChange} />);
    }
}

export default withRouter(AccessibilitySwitch);