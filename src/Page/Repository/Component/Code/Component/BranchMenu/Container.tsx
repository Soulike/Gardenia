import React, {PureComponent} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {ObjectType} from '../../../../../../CONSTANT';
import BranchMenu from '../../../BranchMenu';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    branches: Readonly<Array<Readonly<string>>>,
}

class BranchButton extends PureComponent<IProps>
{
    onBranchClick: (branch: string) => MenuItemProps['onClick'] = (branch: string) =>
    {
        return () =>
        {
            const {history, match: {params: {username, repository, objectType, path}}, branches} = this.props;
            history.replace(
                RouterFunction.generateRepositoryCodeRoute(
                    {
                        username,
                        repository,
                        objectType: objectType ? objectType : ObjectType.TREE,
                        branch: branch ? branch : branches[0],
                        path,
                    }));
        }
    };

    render()
    {

        const {match: {params: {branch}}, branches} = this.props;
        return (
            <BranchMenu branches={branches}
                        currentBranch={branch === undefined || branch === 'master' ? branches[0] : branch}
                        onBranchClick={this.onBranchClick} />
        );
    }
}

export default withRouter(BranchButton);