import React, {PureComponent} from 'react';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {ObjectType} from '../../../../../../CONSTANT';

interface Props extends RouteComponentProps<RouterInterface.Repository>
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
                RouterFunction.generateRepositoryRoute(
                    {
                        username,
                        repository,
                        objectType: objectType ? objectType : ObjectType.TREE,
                        branch: branch ? branch : branches[0],
                        path,
                    }));
        };
    };

    render()
    {

        const {match: {params: {branch}}, branches} = this.props;
        return (
            <View branches={branches}
                  branch={branch === undefined || branch === 'HEAD' ? branches[0] : branch}
                  onBranchClick={this.onBranchClick} />
        );
    }
}

export default withRouter(BranchButton);