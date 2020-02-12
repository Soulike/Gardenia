import React from 'react';
import {Button, Dropdown, Icon, Menu} from 'antd';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';

interface IProps
{
    branches: Readonly<string[]>;
    currentBranch: string;
    onBranchClick: (branch: string) => MenuItemProps['onClick'];
}

function BranchMenu(props: IProps)
{
    const {branches, currentBranch, onBranchClick} = props;
    return (
        <Dropdown trigger={['click']} overlay={
            <Menu>
                {
                    branches.map(branch => <Menu.Item key={branch}
                                                      onClick={onBranchClick(branch)}>{branch}</Menu.Item>)
                }
            </Menu>
        }>
            <Button>{currentBranch}<Icon type="caret-down" /></Button>
        </Dropdown>);
}

export default React.memo(BranchMenu);