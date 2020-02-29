import React, {Component} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG, Interface as RouterInterface} from '../../../../Router';
import {PullRequest as PullRequestClass} from '../../../../Class';
import {PULL_REQUEST_STATUS} from '../../../../CONSTANT';
import {PullRequest as PullRequestApi} from '../../../../Api';

const {PAGE_ID_TO_ROUTE, PAGE_ID} = CONFIG;

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryPullRequest> {}

interface IState
{
    pullRequest: PullRequestClass,
    loading: boolean,
}

class PullRequest extends Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            pullRequest: new PullRequestClass(0, 0, '', '', '', '', '', '', 0, 0, ',', '', PULL_REQUEST_STATUS.OPEN),
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadPullRequest();
        this.setState({loading: false});
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
            this.setState({pullRequest});
        }
    };

    render()
    {
        const {loading, pullRequest} = this.state;
        return (<View loading={loading} pullRequest={pullRequest} />);
    }
}

export default withRouter(PullRequest);