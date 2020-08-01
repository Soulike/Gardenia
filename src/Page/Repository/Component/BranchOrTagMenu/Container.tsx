import React, {PureComponent} from 'react';
import View from './View';
import {Branch} from '../../../../Class';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    branches: Readonly<Branch[]>,
    tagNames: Readonly<string[]>,
    currentBranchOrTagOrCommitHash: string,
    onBranchOrTagClickFactory: (branchOrTagName: string) => MenuItemProps['onClick'],
}

interface IState
{
    visible: boolean,
}

class BranchOrTagMenu extends PureComponent<IProps, IState>
{

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            visible: false,
        };
    }

    onButtonClick: ButtonProps['onClick'] = () =>
    {
        const {visible} = this.state;
        this.setState({visible: !visible});
    };

    onBranchOrTagClickFactory: (branchOrTagName: string) => MenuItemProps['onClick'] = branchOrTagName =>
    {
        const {onBranchOrTagClickFactory} = this.props;
        return (info) =>
        {
            this.setState({visible: false});
            const onBranchOrTagClick = onBranchOrTagClickFactory(branchOrTagName);
            if (onBranchOrTagClick)
            {
                onBranchOrTagClick(info);
            }
        };
    };

    render()
    {
        const {branches, tagNames, currentBranchOrTagOrCommitHash} = this.props;
        const {visible} = this.state;
        return (<View visible={visible}
                      tagNames={tagNames}
                      branches={branches}
                      currentBranchOrTagOrCommitHash={currentBranchOrTagOrCommitHash}
                      onBranchOrTagClickFactory={this.onBranchOrTagClickFactory}
                      onButtonClick={this.onButtonClick} />);
    }
}

export default BranchOrTagMenu;