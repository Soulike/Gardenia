import React from 'react';
import Style from './Style.module.scss';
import {Button, Empty, Menu, Popover} from 'antd';
import {BarcodeOutlined, BranchesOutlined, CaretDownOutlined, CheckOutlined, TagOutlined} from '@ant-design/icons';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';
import {Branch} from '../../../../Class';

interface IProps
{
    branches: Readonly<Branch[]>,
    tags: Readonly<string[]>,
    currentBranchOrTagOrCommitHash: string,
    onBranchOrTagClickFactory: (branchOrTagName: string) => MenuItemProps['onClick'],
}

function BranchOrTagMenu(props: IProps)
{
    const BRANCH_ICON = <BranchesOutlined />;
    const TAG_ICON = <TagOutlined />;
    const COMMIT_HASH_ICON = <BarcodeOutlined />;
    const {branches, tags, currentBranchOrTagOrCommitHash, onBranchOrTagClickFactory} = props;
    const branchNames = branches.map(branch => branch.name);
    const icon = branchNames.includes(currentBranchOrTagOrCommitHash)
        ? BRANCH_ICON
        : tags.includes(currentBranchOrTagOrCommitHash)
            ? TAG_ICON
            : COMMIT_HASH_ICON;
    return (
        <div className={Style.BranchOrTagMenu}>
            <Popover placement={'bottomLeft'} trigger={['click']} destroyTooltipOnHide={true} content={
                <div className={Style.menuWrapper}>
                    <Menu defaultOpenKeys={['branch']}
                          selectedKeys={[currentBranchOrTagOrCommitHash]}
                          selectable={false}
                          className={Style.menu}
                          mode={'inline'}
                          inlineIndent={12}>
                        <Menu.SubMenu title={<b>分支</b>} key={'branch'} icon={BRANCH_ICON}>
                            {
                                branches.length === 0
                                    ? (<Empty description={'暂无分支'} image={Empty.PRESENTED_IMAGE_SIMPLE} />)
                                    : (branches.map(({name: branchName}) => (
                                        <Menu.Item onClick={onBranchOrTagClickFactory(branchName)}
                                                   key={branchName}>
                                            <div className={Style.menuItem}>
                                            <span className={Style.checkIconWrapper}>
                                            {currentBranchOrTagOrCommitHash === branchName ? <CheckOutlined /> : null}
                                        </span>
                                                <span className={Style.name}>{branchName}</span>
                                            </div>
                                        </Menu.Item>)))
                            }
                        </Menu.SubMenu>
                        <Menu.Divider />
                        <Menu.SubMenu title={<b>标签</b>} key={'tag'} icon={TAG_ICON}>
                            {
                                tags.length === 0
                                    ? (<Empty description={'暂无标签'} image={Empty.PRESENTED_IMAGE_SIMPLE} />)
                                    : (tags.map(tag => (
                                        <Menu.Item onClick={onBranchOrTagClickFactory(tag)}
                                                   key={tag}>
                                            <div className={Style.menuItem}>
                                            <span className={Style.checkIconWrapper}>
                                            {currentBranchOrTagOrCommitHash === tag ? <CheckOutlined /> : null}
                                        </span>
                                                <span className={Style.name}>{tag}</span>
                                            </div>
                                        </Menu.Item>)))
                            }
                        </Menu.SubMenu>
                    </Menu>
                </div>
            }>
                <Button>{icon}{currentBranchOrTagOrCommitHash}<CaretDownOutlined /></Button>
            </Popover>
        </div>);
}

export default React.memo(BranchOrTagMenu);