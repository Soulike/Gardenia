import React, {PureComponent} from 'react';
import View from './View';
import {FileDiff} from '../../../../../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../Router';
import {RepositoryInfo} from '../../../../../../Api';
import {notification} from 'antd';
import {ButtonProps} from 'antd/lib/button';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare> {}

interface IState
{
    fileDiffs: FileDiff[];
    fileDiffAmount: number;
    loading: boolean;
}

class PullRequestDiffs extends PureComponent<IProps, IState>
{
    private static FILE_DIFF_AMOUNT_PER_PAGE = 10;

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            fileDiffs: [],
            fileDiffAmount: 0,
            loading: false,
        };
    }

    async componentDidMount()
    {
        await this.init();
        this.setState({loading: true});
        await Promise.all([
            this.loadFileDiffAmount(),
            this.loadMoreFileDiffs(),
        ]);
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {location: {pathname}} = this.props;
        const {location: {pathname: prevPathName}} = prevProps;
        if (pathname !== prevPathName)
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

    loadFileDiffAmount = async () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                    username: targetRepositoryUsername, repositoryName: targetRepositoryName, targetRepositoryBranch,
                },
            },
        } = this.props;
        const fileDiffAmountWrapper = await RepositoryInfo.forkFileDiffAmount(
            {username: sourceRepositoryUsername, name: sourceRepositoryName},
            sourceRepositoryBranch,
            {username: targetRepositoryUsername, name: targetRepositoryName},
            targetRepositoryBranch);
        if (fileDiffAmountWrapper !== null)
        {
            const {amount} = fileDiffAmountWrapper;
            this.setState({fileDiffAmount: amount});
        }
    };

    loadMoreFileDiffs = async () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                    username: targetRepositoryUsername, repositoryName: targetRepositoryName, targetRepositoryBranch,
                },
            },
        } = this.props;
        const {fileDiffs} = this.state;
        const fileDiffsWrapper = await RepositoryInfo.forkFileDiff(
            {username: sourceRepositoryUsername, name: sourceRepositoryName},
            sourceRepositoryBranch,
            {username: targetRepositoryUsername, name: targetRepositoryName},
            targetRepositoryBranch,
            fileDiffs.length, PullRequestDiffs.FILE_DIFF_AMOUNT_PER_PAGE);
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

export default withRouter(PullRequestDiffs);