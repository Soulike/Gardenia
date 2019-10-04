import React, {PureComponent} from 'react';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE_GENERATOR} from '../../../../Router';

interface Match
{
    username: string,
    repository: string,
    objectType: string,
    branch: string,
    path: string,
}

interface Props extends RouteComponentProps<Match>
{
    branches: Array<string>,
}

class BranchButton extends PureComponent<Props>
{
    onBranchClick: (branch: string) => MenuItemProps['onClick'] = branch =>
    {
        return () =>
        {
            const {history, match: {params: {username, repository, objectType, path}}, branches} = this.props;
            history.replace(
                PAGE_ID_TO_ROUTE_GENERATOR[PAGE_ID.REPOSITORY](
                    username,
                    repository,
                    objectType ? objectType : 'tree',
                    branch ? branch : branches[0],
                    path));
        };
    };

    render()
    {

        const {match: {params: {branch}}, branches} = this.props;
        return (
            <View branches={branches}
                  branch={branch == undefined || branch === 'HEAD' ? branches[0] : branch}
                  onBranchClick={this.onBranchClick} />
        );
    }
}

export default withRouter(BranchButton);