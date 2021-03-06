import React, {PureComponent} from 'react';
import View from './View';
import {IIssueState, IState as StoreState} from '../../../../Store';
import {loadedAction, loadingAction} from './Action/Action';
import {connect} from 'react-redux';
import {Interface as RouterInterface} from '../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Issue as IssueApi} from '../../../../Api';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';

interface IProps extends IIssueState, RouteComponentProps<RouterInterface.IRepositoryIssue>
{
    loadingIssue: typeof loadingAction,
    loadedIssue: typeof loadedAction,
}

interface IState {}

class Issue extends PureComponent<IProps, IState>
{
    async componentDidMount()
    {
        await this.loadIssue();
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username, repositoryName, no}}} = this.props;
        const {match: {params: {username: prevUsername, repositoryName: prevRepositoryName, no: prevNo}}} = prevProps;
        if (username !== prevUsername || repositoryName !== prevRepositoryName || no !== prevNo)
        {
            await this.componentDidMount();
        }
    }

    loadIssue = async () =>
    {
        const {
            loadedIssue, loadingIssue,
            match: {params: {username, repositoryName, no: noString}},
            history,
        } = this.props;
        const no = Number.parseInt(noString);
        if (Number.isNaN(no) || no <= 0)
        {
            return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
        else
        {
            await loadingIssue();
            const issue = await IssueApi.get({repositoryUsername: username, repositoryName, no});
            if (issue !== null)
            {
                await loadedIssue(issue);
            }
            else
            {
                return history.push(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
            }
        }
    };

    render()
    {
        const {loading, issue} = this.props;
        return (<View loading={loading} issue={issue} />);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {Issue: {loading, issue}} = state;
    return {loading, issue};
};

const mapDispatchToProps = {
    loadingIssue: loadingAction,
    loadedIssue: loadedAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Issue));