import React, {PureComponent} from 'react';
import View from './View';
import {FileDiff} from '../../../../../../Class';
import {PullRequest as PullRequestApi} from '../../../../../../Api';
import {Interface as RouterInterface} from '../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {IPullRequestState, IState as StoreState} from '../../../../../../Store';
import {connect} from 'react-redux';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryPullRequest>
{
    pullRequest: IPullRequestState['pullRequest'],
    loading: IPullRequestState['loading'],
}

interface IState
{
    fileDiffs: FileDiff[],
    loading: boolean,
    fileDiffAmount: number,
}

class FileChanged extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            fileDiffs: [],
            loading: false,
            fileDiffAmount: 0,
        };
    }

    async componentDidMount()
    {
        const {loading} = this.props;
        if (!loading)
        {
            this.setState({loading: true});
            await Promise.all([
                this.loadFileDiffs(),
                this.loadFileDiffAmount(),
            ]);
            this.setState({loading: false});
        }
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {pullRequest, loading} = this.props;
        const {pullRequest: prevPullRequest, loading: prevLoading} = prevProps;
        if (pullRequest !== prevPullRequest || prevLoading !== loading)
        {
            await this.componentDidMount();
        }
    }

    loadFileDiffs = async () =>
    {
        const {pullRequest: {id}} = this.props;
        const fileDiffsWrapper = await PullRequestApi.getFileDiffs({id});
        if (fileDiffsWrapper !== null)
        {
            const {fileDiffs} = fileDiffsWrapper;
            this.setState({fileDiffs});
        }
    };

    loadFileDiffAmount = async () =>
    {
        const {pullRequest: {id}} = this.props;
        const fileDiffAmountWrapper = await PullRequestApi.getFileDiffAmount({id});
        if (fileDiffAmountWrapper !== null)
        {
            const {amount} = fileDiffAmountWrapper;
            this.setState({fileDiffAmount: amount});
        }
    };

    render()
    {
        const {fileDiffs, loading, fileDiffAmount} = this.state;
        return (<View fileDiffs={fileDiffs} loading={loading} fileDiffAmount={fileDiffAmount} />);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {PullRequest: {pullRequest, loading}} = state;
    return {pullRequest, loading};
};

export default connect(mapStateToProps, {})(withRouter(FileChanged));