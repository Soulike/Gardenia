import React, {Component} from 'react';
import View from './View';
import {PULL_REQUEST_STATUS} from '../../../../../../../../CONSTANT';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import {PullRequest as PullRequestApi} from '../../../../../../../../Api/PullRequest';
import {notification} from 'antd';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import {IPullRequestState, IState as StoreState} from '../../../../../../../../Store';
import {modifyAction} from '../../../../Action/Action';
import {connect} from 'react-redux';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryPullRequest>
{
    pullRequest: IPullRequestState['pullRequest'],
    modifyPullRequest: typeof modifyAction,
    loading: IPullRequestState['loading'],
}

interface IState
{
    loading: boolean
}

class OperationButton extends Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            loading: false,
        };
    }

    onCloseButtonClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {pullRequest: {id}, modifyPullRequest} = this.props;
        this.setState({loading: true});
        const result = await PullRequestApi.close({id});
        if (result !== null)
        {
            notification.success({message: 'Pull Request 已关闭'});
            await modifyPullRequest({status: PULL_REQUEST_STATUS.CLOSED});
        }
        this.setState({loading: false});
    };

    onMergeButtonClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {pullRequest: {id}, modifyPullRequest} = this.props;
        this.setState({loading: true});
        const result = await PullRequestApi.merge({id});
        if (result !== null)
        {
            notification.success({message: 'Pull Request 已合并'});
            await modifyPullRequest({status: PULL_REQUEST_STATUS.MERGED});
        }
        this.setState({loading: false});
    };

    onReopenButtonClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {pullRequest: {id}, modifyPullRequest} = this.props;
        this.setState({loading: true});
        const result = await PullRequestApi.reopen({id});
        if (result !== null)
        {
            notification.success({message: 'Pull Request 已重新开启'});
            await modifyPullRequest({status: PULL_REQUEST_STATUS.OPEN});
        }
        this.setState({loading: false});
    };

    render()
    {
        const {pullRequest, loading: pullRequestIsLoading} = this.props;
        const {loading} = this.state;
        return (<View pullRequest={pullRequest}
                      onCloseButtonClick={this.onCloseButtonClick}
                      onMergeButtonClick={this.onMergeButtonClick}
                      onReopenButtonClick={this.onReopenButtonClick} loading={loading || pullRequestIsLoading} />);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {PullRequest: {pullRequest, loading}} = state;
    return {pullRequest, loading};
};

const mapDispatchToProps = {
    modifyPullRequest: modifyAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OperationButton));