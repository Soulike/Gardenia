import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG, Interface as RouterInterface} from '../../../../Router';
import {RepositoryInfo} from '../../../../Api';
import {promisify} from 'util';

const {PAGE_ID_TO_ROUTE, PAGE_ID} = CONFIG;

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare> {}

interface IState
{
    commitAmount: number,
    fileDiffAmount: number,
    loading: boolean;
    hasCommonAncestor: boolean,
}

class Compare extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            commitAmount: 0,
            fileDiffAmount: 0,
            loading: false,
            hasCommonAncestor: false,
        };
    }

    async componentDidMount()
    {
        this.checkURLParameters();
        await this.setStatePromise({loading: true});
        await this.loadHasCommonAncestor();
        const {hasCommonAncestor} = this.state;
        if (hasCommonAncestor)
        {
            await Promise.all([
                this.loadCommitAmount(),
                this.loadFileDiffAmount(),
            ]);
        }
        await this.setStatePromise({loading: false});
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

    checkURLParameters = () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName,
                    sourceRepositoryBranch, targetRepositoryBranch,
                },
            },
            history,
        } = this.props;
        if (sourceRepositoryUsername === undefined || sourceRepositoryName === undefined
            || sourceRepositoryBranch === undefined || targetRepositoryBranch === undefined)
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    };

    loadHasCommonAncestor = async () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                    username: targetRepositoryUsername, repository: targetRepositoryName, targetRepositoryBranch,
                },
            },
        } = this.props;
        if (sourceRepositoryUsername === targetRepositoryUsername
            && sourceRepositoryName === targetRepositoryName
            && sourceRepositoryBranch === targetRepositoryBranch)
        {
            await this.setStatePromise({hasCommonAncestor: true});
        }
        else
        {
            const hasCommonAncestorWrapper = await RepositoryInfo.hasCommonAncestor(
                {username: sourceRepositoryUsername, name: sourceRepositoryName}, sourceRepositoryBranch,
                {username: targetRepositoryUsername, name: targetRepositoryName}, targetRepositoryBranch,
            );
            if (hasCommonAncestorWrapper !== null)
            {
                const {hasCommonAncestor} = hasCommonAncestorWrapper;
                await this.setStatePromise({hasCommonAncestor});
            }
        }
    };

    loadCommitAmount = async () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                    username: targetRepositoryUsername, repository: targetRepositoryName, targetRepositoryBranch,
                },
            },
        } = this.props;
        if (sourceRepositoryUsername === targetRepositoryUsername
            && sourceRepositoryName === targetRepositoryName
            && sourceRepositoryBranch === targetRepositoryBranch)
        {
            this.setState({commitAmount: 0});
        }
        else
        {
            const commitAmountWrapper = await RepositoryInfo.forkCommitAmount(
                {username: sourceRepositoryUsername, name: sourceRepositoryName},
                sourceRepositoryBranch,
                {username: targetRepositoryUsername, name: targetRepositoryName},
                targetRepositoryBranch);
            if (commitAmountWrapper !== null)
            {
                const {commitAmount} = commitAmountWrapper;
                this.setState({commitAmount});
            }
        }
    };

    loadFileDiffAmount = async () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                    username: targetRepositoryUsername, repository: targetRepositoryName, targetRepositoryBranch,
                },
            },
        } = this.props;
        if (sourceRepositoryUsername === targetRepositoryUsername
            && sourceRepositoryName === targetRepositoryName
            && sourceRepositoryBranch === targetRepositoryBranch)
        {
            this.setState({fileDiffAmount: 0});
        }
        else
        {
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
        }
    };

    render()
    {
        const {commitAmount, fileDiffAmount, loading, hasCommonAncestor} = this.state;
        return (<View hasCommonAncestor={hasCommonAncestor}
                      fileDiffAmount={fileDiffAmount}
                      loading={loading}
                      commitAmount={commitAmount} />);
    }
}

export default withRouter(Compare);