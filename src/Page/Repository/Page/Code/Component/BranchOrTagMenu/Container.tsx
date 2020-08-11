import React, {PureComponent} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {ObjectType} from '../../../../../../CONSTANT';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';
import {Branch} from '../../../../../../Class';
import View from '../../../../Component/BranchOrTagMenu';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    branches: Readonly<Branch[]>,
    tagNames: Readonly<string[]>,
}

class BranchOrTagMenu extends PureComponent<IProps>
{
    onBranchOrTagClickFactory: (branchOrTagName: string) => MenuItemProps['onClick'] = (branchOrTagName: Readonly<string>) =>
    {
        return () =>
        {
            const {history, match: {params: {username, repository, objectType, path}}} = this.props;
            return history.replace(
                RouterFunction.generateRepositoryCodeRoute(
                    {
                        username,
                        repository,
                        objectType: objectType ? objectType : ObjectType.TREE,
                        branch: branchOrTagName,
                        path,
                    }));
        };
    };

    render()
    {
        const {match: {params: {branch: branchName}}, branches, tagNames} = this.props;
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
            <View branches={branches} tagNames={tagNames}
                  currentBranchOrTagOrCommitHash={branchName ? branchName : defaultBranchName}
                  onBranchOrTagClickFactory={this.onBranchOrTagClickFactory} />
        );
    }
}

export default withRouter(BranchOrTagMenu);