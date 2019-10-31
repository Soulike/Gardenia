import React, {PureComponent} from 'react';
import View from './View';
import {InputProps} from 'antd/lib/input';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../../../Router';
import {notification} from 'antd';
import {RepositoryInfo} from '../../../../../../../../Api/RepositoryInfo';
import {PopconfirmProps} from 'antd/lib/popconfirm';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings> {}

interface IState
{
    repositoryName: string,
    submitting: boolean,
}

class RepositoryName extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        const {match: {params: {repository}}} = props;
        this.state = {
            repositoryName: repository,
            submitting: false,
        };
    }

    onRepositoryNameInputChange: InputProps['onChange'] = e =>
    {
        this.setState({repositoryName: e.target.value});
    };

    onRenameConfirm: PopconfirmProps['onConfirm'] = async () =>
    {
        if (this.validateParameters())
        {
            this.setState({submitting: true});
            await this.submit();
            this.setState({submitting: false});
        }
    };

    validateParameters = () =>
    {
        const {repositoryName} = this.state;
        if (repositoryName.length === 0)
        {
            notification.warn({message: '仓库名不能为空'});
            return false;
        }
        return true;
    };

    submit = async () =>
    {
        const {repositoryName: newRepositoryName} = this.state;
        const {match: {params: {repository: repositoryName}}} = this.props;
        const result = await RepositoryInfo.setName(repositoryName, newRepositoryName);
        if (result !== null)
        {
            this.onSubmitSuccess();
        }
    };

    onSubmitSuccess = () =>
    {
        notification.success({message: '仓库重命名成功'});
        const {history} = this.props;
        const {match: {params: {username}}} = this.props;
        const {repositoryName: newRepositoryName} = this.state;
        history.replace(RouterFunction.generateRepositorySettingsOptionsRoute({
            username,
            repository: newRepositoryName,
        }));
    };

    render()
    {
        const {repositoryName, submitting} = this.state;
        return (<View repositoryName={repositoryName}
                      onRenameConfirm={this.onRenameConfirm}
                      onRepositoryNameInputChange={this.onRepositoryNameInputChange} submitting={submitting} />);
    }
}

export default withRouter(RepositoryName);