import React from 'react';
import {Button, Dropdown, Icon, Menu, Tag} from 'antd';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';
import {Branch} from '../../../../Class';
import Style from './Style.module.scss';

interface IProps
{
    branches: Readonly<Branch[]>;
    currentBranch: Readonly<string>;    // 这里必须是 string，因为要考虑直接用 commitHash 的情况
    onBranchClick: (branch: Readonly<Branch>) => MenuItemProps['onClick'];
}

function BranchMenu(props: IProps)
{
    const {branches, currentBranch, onBranchClick} = props;
    let isBranch = false;   // 要么是 branch，要么是 tree
    for (const branch of branches)
    {
        if (branch.name === currentBranch)
        {
            isBranch = true;
            break;
        }
    }
    return (
        <Dropdown trigger={['click']} overlay={
            <Menu className={Style.BranchMenu}>
                {
                    branches.map(branch => (
                        <Menu.Item key={branch.name}
                                   onClick={onBranchClick(branch)}>
                            <div className={Style.branchName}
                                 style={branch.name === currentBranch ? {fontWeight: 'bold'} : {}}>
                                {branch.name}
                            </div>
                            <div className={Style.branchTagWrapper}>
                                {branch.isDefault ? <Tag color={'blue'}>默认</Tag> : null}
                            </div>
                        </Menu.Item>))
                }
            </Menu>
        }>
            <Button>{isBranch ? '分支：' : 'Tree：'}{currentBranch}<Icon type="caret-down" /></Button>
        </Dropdown>);
}

export default React.memo(BranchMenu);