import React, {PureComponent} from 'react';
import View from './View';
import {IIssueState, IState as StoreState} from '../../../../../../Store';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG, Interface as RouterInterface} from '../../../../../../Router';
import {Issue as IssueApi} from '../../../../../../Api';
import {modifyAction} from '../../Action/Action';
import {ISSUE_STATUS} from '../../../../../../CONSTANT';
import {PopconfirmProps} from 'antd/lib/popconfirm';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

interface IProps extends IIssueState, RouteComponentProps<RouterInterface.IRepositoryIssue>
{
    modifyIssue: typeof modifyAction,
}

interface IState
{
    loading: boolean;
}

class OperationButtons extends PureComponent<IProps, IState>
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
        const {
            match: {params: {username, repository: repositoryName, no: noString}},
            history, modifyIssue,
        } = this.props;
        const no = Number.parseInt(noString);
        if (Number.isNaN(no) || no <= 0)
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
        else
        {
            this.setState({loading: true});
            const result = await IssueApi.close({
                repositoryUsername: username, repositoryName, no,
            });
            if (result !== null)
            {
                await modifyIssue({status: ISSUE_STATUS.CLOSED});
            }
            this.setState({loading: false});
        }
    };

    onReopenButtonClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {
            match: {params: {username, repository: repositoryName, no: noString}},
            history, modifyIssue,
        } = this.props;
        const no = Number.parseInt(noString);
        if (Number.isNaN(no) || no <= 0)
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
        else
        {
            this.setState({loading: true});
            const result = await IssueApi.reopen({
                repositoryUsername: username, repositoryName, no,
            });
            if (result !== null)
            {
                await modifyIssue({status: ISSUE_STATUS.OPEN});
            }
            this.setState({loading: false});
        }
    };

    render()
    {
        const {loading: issueLoading, issue: {status}} = this.props;
        const {loading} = this.state;
        return (<View loading={issueLoading || loading}
                      issueStatus={status}
                      onReopenButtonClick={this.onReopenButtonClick}
                      onCloseButtonClick={this.onCloseButtonClick} />);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {Issue: {loading, issue}} = state;
    return {loading, issue};
};

const mapDispatchToProps = {
    modifyIssue: modifyAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OperationButtons));