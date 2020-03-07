import React, {PureComponent} from 'react';
import View from './View';
import {FileDiff} from '../../../../../../Class';
import {PullRequest as PullRequestApi} from '../../../../../../Api';
import {Interface as RouterInterface} from '../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {IPullRequestState, IState as StoreState} from '../../../../../../Store';
import {connect} from 'react-redux';
import {notification} from 'antd';
import {ButtonProps} from 'antd/lib/button';

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
    private static FILE_DIFF_AMOUNT_PER_PAGE = 10;

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
        await this.init();
        const {loading} = this.props;
        if (!loading)
        {
            this.setState({loading: true});
            await Promise.all([
                this.loadMoreFileDiffs(),
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

    init = async () =>
    {
        return new Promise(resolve =>
        {
            this.setState({fileDiffs: []}, () => resolve());
        });
    };

    loadMoreFileDiffs = async () =>
    {
        const {pullRequest: {id}} = this.props;
        const {fileDiffs} = this.state;
        const fileDiffsWrapper = await PullRequestApi.getFileDiffs({id}, fileDiffs.length, FileChanged.FILE_DIFF_AMOUNT_PER_PAGE);
        if (fileDiffsWrapper !== null)
        {
            const {fileDiffs: moreFileDiffs} = fileDiffsWrapper;
            if (moreFileDiffs.length === 0)
            {
                notification.success({message: '已加载所有被修改文件'});
            }
            else
            {
                this.setState({fileDiffs: [...fileDiffs, ...moreFileDiffs]});
            }
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

    onLoadMoreButtonClick: ButtonProps['onClick'] = async () =>
    {
        this.setState({loading: true});
        await this.loadMoreFileDiffs();
        this.setState({loading: false});
    };

    render()
    {
        const {fileDiffs, loading, fileDiffAmount} = this.state;
        return (<View onLoadMoreButtonClick={this.onLoadMoreButtonClick}
                      fileDiffs={fileDiffs}
                      loading={loading}
                      fileDiffAmount={fileDiffAmount} />);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {PullRequest: {pullRequest, loading}} = state;
    return {pullRequest, loading};
};

export default connect(mapStateToProps, {})(withRouter(FileChanged));