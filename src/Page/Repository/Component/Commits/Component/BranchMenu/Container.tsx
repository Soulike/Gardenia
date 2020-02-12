import React, {PureComponent} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import BranchMenu from '../../../BranchMenu';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCommits>
{
    branches: Readonly<Array<Readonly<string>>>,
}

class BranchButton extends PureComponent<IProps>
{
    onBranchClick: (branch: string) => MenuItemProps['onClick'] = (branch: string) =>
    {
        return () =>
        {
            const {history, match: {params: {username, repository}}} = this.props;
            history.replace(
                RouterFunction.generateRepositoryCommitsRoute(
                    {
                        username,
                        repository,
                        branch,
                    }));
        };
    };

    render()
    {

        const {match: {params: {branch}}, branches} = this.props;
        return (
            <BranchMenu branches={branches}
                        currentBranch={branch}
                        onBranchClick={this.onBranchClick} />
        );
    }
}

export default withRouter(BranchButton);