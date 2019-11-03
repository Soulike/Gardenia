import React from 'react';
import {Button, Dropdown, Icon, Menu} from 'antd';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';

interface IProps
{
    branches: Readonly<Array<Readonly<string>>>,
    branch: string,
    onBranchClick: (branch: string) => MenuItemProps['onClick'],
}

function BranchButtonView(props: Readonly<IProps>)
{
    const {branches, branch, onBranchClick} = props;
    return (
        <Dropdown trigger={['click']} overlay={
            <Menu>
                {
                    branches.map(branch => <Menu.Item key={branch}
                                                      onClick={onBranchClick(branch)}>{branch}</Menu.Item>)
                }
            </Menu>
        }>
            <Button>分支：{branch}<Icon type="caret-down" /></Button>
        </Dropdown>
    );
}

export default React.memo(BranchButtonView);