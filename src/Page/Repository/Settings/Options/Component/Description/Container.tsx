import React, {PureComponent} from 'react';
import View from './View';
import {TextAreaProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {Interface as RouterInterface} from '../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RepositoryInfo} from '../../../../../../Api/RepositoryInfo';
import {notification} from 'antd';

interface Props extends RouteComponentProps<RouterInterface.RepositorySettings> {}

interface State
{
    description: string,
    loading: boolean,
}

class Description extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            description: '',
            loading: true,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadDescription();
        this.setState({loading: false});
    }

    loadDescription = async () =>
    {
        const {match: {params: {username, repository: repositoryName}}} = this.props;
        const repository = await RepositoryInfo.repository(username, repositoryName);
        if (repository !== null)
        {
            const {description} = repository;
            this.setState({description});
        }
    };

    onTextareaChange: TextAreaProps['onChange'] = e =>
    {
        this.setState({description: e.target.value});
    };

    onSubmit: ButtonProps['onClick'] = async () =>
    {
        const {description} = this.state;
        const {match: {params: {repository: repositoryName}}} = this.props;
        this.setState({loading: true});
        const result = await RepositoryInfo.setDescription(repositoryName, description);
        this.setState({loading: false});
        if (result !== null)
        {
            notification.success({message: '仓库描述修改成功'});
        }
    };

    render()
    {
        const {description, loading} = this.state;
        return (<View loading={loading}
                      description={description}
                      onTextareaChange={this.onTextareaChange}
                      onSubmit={this.onSubmit} />);
    }
}

export default withRouter(Description);