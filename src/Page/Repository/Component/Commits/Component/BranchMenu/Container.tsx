import React, {PureComponent} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import BranchMenu from '../../../BranchMenu';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';
import {Branch} from '../../../../../../Class';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCommits>
{
    branches: Readonly<Branch[]>,
}

class BranchButton extends PureComponent<IProps>
{
    onBranchClick: (branch: Readonly<Branch>) => MenuItemProps['onClick'] = (branch: Readonly<Branch>) =>
    {
        return () =>
        {
            const {history, match: {params: {username, repository}}} = this.props;
            history.replace(
                RouterFunction.generateRepositoryCommitsRoute(
                    {
                        username,
                        repository,
                        branch: branch.name,
                    }));
        };
    };

    render()
    {

        const {match: {params: {branch: branchName}}, branches} = this.props;
        let defaultBranchName: string = '';
        if (branchName === undefined)
        {
            for (const branch of branches)
            {
                if (branch.isDefault)
                {
                    defaultBranchName = branch.name;
                }
            }
        }
        return (
            <BranchMenu branches={branches}
                        currentBranch={branchName ? branchName : defaultBranchName}
                        onBranchClick={this.onBranchClick} />
        );
    }
}

export default withRouter(BranchButton);