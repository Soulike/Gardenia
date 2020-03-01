import React, {PureComponent} from 'react';
import View from './View';
import {FileDiff, PullRequest} from '../../../../../../Class';
import {PullRequest as PullRequestApi, RepositoryInfo} from '../../../../../../Api';
import {PULL_REQUEST_STATUS} from '../../../../../../CONSTANT';
import {CONFIG, Interface as RouterInterface} from '../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryPullRequest> {}

interface IState
{
    fileDiffs: FileDiff[],
    loading: boolean,
    pullRequest: PullRequest,
}

class FileChanged extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            fileDiffs: [],
            loading: false,
            pullRequest: new PullRequest(0, 0, '', '', '', '', '', '', 0, 0, '', '', PULL_REQUEST_STATUS.OPEN),
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadPullRequest();
        await this.loadFileDiffs();
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

    loadFileDiffs = async () =>
    {
        const {
            pullRequest: {
                sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                targetRepositoryUsername, targetRepositoryName, targetRepositoryBranch,
            },
        } = this.state;
        const fileDiffsWrapper = await RepositoryInfo.forkFileDiff(
            {username: sourceRepositoryUsername, name: sourceRepositoryName},
            sourceRepositoryBranch,
            {username: targetRepositoryUsername, name: targetRepositoryName},
            targetRepositoryBranch);
        if (fileDiffsWrapper !== null)
        {
            const {fileDiffs} = fileDiffsWrapper;
            this.setState({fileDiffs});
        }
    };

    render()
    {
        const {fileDiffs, loading} = this.state;
        return (<View fileDiffs={fileDiffs} loading={loading} />);
    }
}

export default withRouter(FileChanged);