import React, {PureComponent} from 'react';
import {setBranchAction} from '../../Action/Action';
import {connect} from 'react-redux';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';
import View from './View';

interface Props
{
    branches: Array<string>,
    branch: string,
    setBranch: (branch: string) => any;
}

class BranchButton extends PureComponent<Props>
{
    onBranchClick: (branch: string) => MenuItemProps['onClick'] = branch =>
    {
        const {setBranch} = this.props;
        return () =>
        {
            setBranch(branch);
        };
    };

    render()
    {
        const {branch, branches} = this.props;
        return (
            <View branches={branches} branch={branch} onBranchClick={this.onBranchClick} />
        );
    }
}

const mapStateToProps = (state: any) =>
{
    const {Repository: {branch}} = state;
    return {branch};
};

const mapDispatchToProps = {
    setBranch: setBranchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(BranchButton);