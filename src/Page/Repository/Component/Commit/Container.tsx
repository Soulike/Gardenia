import React, {PureComponent} from 'react';
import View from './View';
import {Commit as CommitClass, FileDiff} from '../../../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {RepositoryInfo} from '../../../../Api';
import {ButtonProps} from 'antd/lib/button';
import {notification} from 'antd';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCommit> {}

interface IState
{
    commit: CommitClass;
    diff: FileDiff[];
    diffAmount: number;
    loading: boolean;
}

class Commit extends PureComponent<IProps, IState>
{
    private static FILE_DIFF_AMOUNT_PER_PAGE = 10;

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            commit: new CommitClass('', '', 'a@b.com', 0, '', ''),
            diff: [],
            diffAmount: 0,
            loading: false,
        };
    }

    async componentDidMount()
    {
        await this.init();
        this.setState({loading: true});
        await Promise.all([
            this.loadCommit(),
            this.loadCommitDiffAmount(),
            this.loadMoreCommitDiff(),
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
            this.setState({diff: []}, () => resolve());
        });
    };

    loadCommit = async () =>
    {
        const {match: {params: {username, repository: repositoryName, commitHash}}} = this.props;
        const result = await RepositoryInfo.commit({username, name: repositoryName}, commitHash);
        if (result !== null)
        {
            const {commit} = result;
            this.setState({commit});
        }
    };

    loadMoreCommitDiff = async () =>
    {
        const {match: {params: {username, repository: repositoryName, commitHash}}} = this.props;
        const {diff} = this.state;
        const result = await RepositoryInfo.commitDiff({
            username,
            name: repositoryName,
        }, commitHash, diff.length, Commit.FILE_DIFF_AMOUNT_PER_PAGE);
        if (result !== null)
        {
            const {diff: moreDiff} = result;
            if (moreDiff.length === 0)
            {
                notification.success({message: '已加载所有被修改文件'});
            }
            else
            {
                this.setState({diff: [...diff, ...moreDiff]});
            }
        }
    };

    loadCommitDiffAmount = async () =>
    {
        const {match: {params: {username, repository: repositoryName, commitHash}}} = this.props;
        const result = await RepositoryInfo.commitDiffAmount({username, name: repositoryName}, commitHash);
        if (result !== null)
        {
            const {amount} = result;
            this.setState({diffAmount: amount});
        }
    };

    onLoadMoreButtonClick: ButtonProps['onClick'] = async () =>
    {
        this.setState({loading: true});
        await this.loadMoreCommitDiff();
        this.setState({loading: false});
    };

    render()
    {
        const {commit, diff, loading, diffAmount} = this.state;
        return (<View commit={commit}
                      diff={diff}
                      loading={loading}
                      diffAmount={diffAmount}
                      onLoadMoreButtonClick={this.onLoadMoreButtonClick} />);
    }
}

export default withRouter(Commit);