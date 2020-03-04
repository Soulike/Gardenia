import React, {PureComponent} from 'react';
import View from './View';
import {ButtonProps} from 'antd/lib/button';
import {Repository, RepositoryInfo} from '../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {notification} from 'antd';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode> {}

interface IState
{
    forkAmount: number;
    loading: boolean;
}

class ForkButton extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            forkAmount: 0,
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadForkAmount();
        this.setState({loading: false});
    }

    loadForkAmount = async () =>
    {
        const {match: {params: {username, repository: repositoryName}}} = this.props;
        const result = await RepositoryInfo.forkAmount({username, name: repositoryName});
        if (result !== null)
        {
            const {amount} = result;
            this.setState({forkAmount: amount});
        }
    };

    onClick: ButtonProps['onClick'] = async () =>
    {
        this.setState({loading: true});
        const {match: {params: {username, repository: repositoryName}}} = this.props;
        const result = await Repository.fork({username, name: repositoryName});
        if (result !== null)
        {
            notification.success({
                message: 'fork 成功',
                description: '可前往个人中心仓库列表查看',
            });
        }
        this.setState({loading: false});
    };

    render()
    {
        const {forkAmount, loading} = this.state;
        return (<View onClick={this.onClick} forkAmount={forkAmount} loading={loading} />);
    }
}

export default withRouter(ForkButton);