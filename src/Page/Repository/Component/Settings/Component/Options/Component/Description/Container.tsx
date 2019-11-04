import React, {PureComponent} from 'react';
import View from './View';
import {TextAreaProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RepositoryInfo} from '../../../../../../../../Api/RepositoryInfo';
import {notification} from 'antd';
import {Repository} from '../../../../../../../../Class';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings>
{
    repository: Readonly<Repository>,
    loading: boolean,
}

interface IState
{
    description: string,
    submitting: boolean,
}

class Description extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            description: '',
            submitting: false,
        };
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {repository: {description}, loading} = this.props;
        const {loading: prevLoading} = prevProps;
        if (prevLoading && loading)
        {
            this.setState({description});
        }
    }

    onTextareaChange: TextAreaProps['onChange'] = e =>
    {
        this.setState({description: e.target.value});
    };

    onSubmit: ButtonProps['onClick'] = async () =>
    {
        const {description} = this.state;
        const {match: {params: {repository: repositoryName}}} = this.props;
        this.setState({submitting: true});
        const result = await RepositoryInfo.setDescription({name: repositoryName, description});
        this.setState({submitting: false});
        if (result !== null)
        {
            notification.success({message: '仓库描述修改成功'});
        }
    };

    render()
    {
        const {loading} = this.props;
        const {description, submitting} = this.state;
        return (<View submitting={submitting} loading={loading}
                      description={description}
                      onTextareaChange={this.onTextareaChange}
                      onSubmit={this.onSubmit} />);
    }
}

export default withRouter(Description);