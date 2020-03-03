import React, {PureComponent} from 'react';
import View from './View';
import {PullRequest} from '../../../../../../../../Class';
import {PULL_REQUEST_STATUS} from '../../../../../../../../CONSTANT';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG, Interface as RouterInterface} from '../../../../../../../../Router';
import {PullRequest as PullRequestApi} from '../../../../../../../../Api/PullRequest';
import {notification} from 'antd';
import {PopconfirmProps} from 'antd/lib/popconfirm';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryPullRequest> {}

interface IState
{
    pullRequest: PullRequest;
    loading: boolean;
}

class OperationButton extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            pullRequest: new PullRequest(0, 0, '', '', '', '', '', '', 0, 0, '', '', PULL_REQUEST_STATUS.CLOSED),
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadPullRequest();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {no, username, repository}}} = this.props;
        const {match: {params: {no: prevNo, username: prevUsername, repository: prevRepository}}} = prevProps;
        if (no !== prevNo || username !== prevUsername || repository !== prevRepository)
        {
            await this.componentDidMount();
        }
    }

    loadPullRequest = async () =>
    {
        const {match: {params: {no: noString, repository: repositoryName, username}}, history} = this.props;
        const no = Number.parseInt(noString);
        if (Number.isNaN(no) || no <= 0)
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
        const pullRequest = await PullRequestApi.get({username, name: repositoryName}, {no});
        if (pullRequest !== null)
        {
            return new Promise(resolve =>
            {
                this.setState({pullRequest}, resolve);
            });
        }
    };

    onCloseButtonClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {pullRequest: {id}} = this.state;
        this.setState({loading: true});
        const result = await PullRequestApi.close({id});
        if (result !== null)
        {
            notification.success({message: 'Pull Request 已关闭'});
            setTimeout(() => window.location.reload(), 1000);
        }
        this.setState({loading: false});
    };

    onMergeButtonClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {pullRequest: {id}} = this.state;
        this.setState({loading: true});
        const result = await PullRequestApi.merge({id});
        if (result !== null)
        {
            notification.success({message: 'Pull Request 已合并'});
            setTimeout(() => window.location.reload(), 1000);
        }
        this.setState({loading: false});
    };

    onReopenButtonClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {pullRequest: {id}} = this.state;
        this.setState({loading: true});
        const result = await PullRequestApi.reopen({id});
        if (result !== null)
        {
            notification.success({message: 'Pull Request 已重新开启'});
            setTimeout(() => window.location.reload(), 1000);
        }
        this.setState({loading: false});
    };

    render()
    {
        const {pullRequest, loading} = this.state;
        return (<View pullRequest={pullRequest}
                      onCloseButtonClick={this.onCloseButtonClick}
                      onMergeButtonClick={this.onMergeButtonClick}
                      onReopenButtonClick={this.onReopenButtonClick} loading={loading} />);
    }
}

export default withRouter(OperationButton);