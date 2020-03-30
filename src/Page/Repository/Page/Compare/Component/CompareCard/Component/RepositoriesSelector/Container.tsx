import React, {PureComponent} from 'react';
import View from './View';
import {SelectProps} from 'antd/lib/select';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../../../Router';
import {Repository} from '../../../../../../../../Class';
import {RepositoryInfo} from '../../../../../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare> {}

interface IState
{
    sourceRepositoryBranchNames: string[];
    targetRepositoryBranchNames: string[];
    targetRepositories: Pick<Repository, 'username' | 'name'>[];
    loading: boolean;
}

class RepositoriesSelector extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            sourceRepositoryBranchNames: [],
            targetRepositoryBranchNames: [],
            targetRepositories: [],
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await Promise.all([
            this.loadSourceRepositoryBranchNames(),
            this.loadTargetRepositories(),
            this.loadTargetRepositoryBranchNames(),
        ]);
        this.setState({loading: false});
    }

    loadSourceRepositoryBranchNames = async () =>
    {
        const {
            match: {params: {sourceRepositoryUsername, sourceRepositoryName}},
        } = this.props;
        const sourceRepository: Readonly<Pick<Repository, 'username' | 'name'>> = {
            username: sourceRepositoryUsername,
            name: sourceRepositoryName,
        };
        const sourceRepositoryBranchNamesWrapper = await RepositoryInfo.branchNames(sourceRepository);
        if (sourceRepositoryBranchNamesWrapper !== null)
        {
            const {branchNames} = sourceRepositoryBranchNamesWrapper;
            this.setState({sourceRepositoryBranchNames: branchNames});
        }
    };

    loadTargetRepositories = async () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName,
                },
            },
        } = this.props;
        const sourceRepository: Readonly<Pick<Repository, 'username' | 'name'>> = {
            username: sourceRepositoryUsername,
            name: sourceRepositoryName,
        };
        const repositoryWrapper = await RepositoryInfo.forkFrom(sourceRepository);
        if (repositoryWrapper !== null)
        {
            const {repository} = repositoryWrapper;
            if (repository !== null)
            {
                this.setState({targetRepositories: [repository, sourceRepository]});
            }
            else
            {
                this.setState({targetRepositories: [sourceRepository]});
            }
        }
    };

    loadTargetRepositoryBranchNames = async () =>
    {
        const {
            match: {
                params: {
                    repository: targetRepositoryName, username: targetRepositoryUsername,
                },
            },
        } = this.props;
        const targetRepository: Readonly<Pick<Repository, 'username' | 'name'>> = {
            username: targetRepositoryUsername,
            name: targetRepositoryName,
        };
        const targetRepositoryBranchNamesWrapper = await RepositoryInfo.branchNames(targetRepository);
        if (targetRepositoryBranchNamesWrapper !== null)
        {
            const {branchNames} = targetRepositoryBranchNamesWrapper;
            this.setState({targetRepositoryBranchNames: branchNames});
        }
    };

    onTargetRepositorySelectorChange: SelectProps<string>['onChange'] = value =>
    {
        const {match: {params}, history} = this.props;
        const [targetRepositoryUsername, targetRepositoryName] = value.toString().split('/');
        return history.push(RouterFunction.generateRepositoryCompareRoute({
            ...params, username: targetRepositoryUsername, repository: targetRepositoryName,
        }));
    };

    onSourceRepositoryBranchSelectorChange: SelectProps<string>['onChange'] = value =>
    {
        const {match: {params}, history} = this.props;
        return history.push(RouterFunction.generateRepositoryCompareRoute({
            ...params, sourceRepositoryBranch: value.toString(),
        }));
    };

    onTargetRepositoryBranchSelectorChange: SelectProps<string>['onChange'] = value =>
    {
        const {match: {params}, history} = this.props;
        return history.push(RouterFunction.generateRepositoryCompareRoute({
            ...params, targetRepositoryBranch: value.toString(),
        }));
    };

    render()
    {
        const {sourceRepositoryBranchNames, targetRepositoryBranchNames, loading, targetRepositories} = this.state;
        return (<View sourceRepositoryBranchNames={sourceRepositoryBranchNames}
                      targetRepositoryBranchNames={targetRepositoryBranchNames}
                      loading={loading}
                      targetRepositories={targetRepositories}
                      onTargetRepositorySelectorChange={this.onTargetRepositorySelectorChange}
                      onSourceRepositoryBranchSelectorChange={this.onSourceRepositoryBranchSelectorChange}
                      onTargetRepositoryBranchSelectorChange={this.onTargetRepositoryBranchSelectorChange} />);
    }
}

export default withRouter(RepositoriesSelector);