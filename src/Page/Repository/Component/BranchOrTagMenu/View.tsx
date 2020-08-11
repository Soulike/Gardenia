import React from 'react';
import Style from './Style.module.scss';
import {Button, Empty, Menu, Popover} from 'antd';
import {BarcodeOutlined, BranchesOutlined, CaretDownOutlined, CheckOutlined, TagOutlined} from '@ant-design/icons';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';
import {Branch} from '../../../../Class';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../Router';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {ButtonProps} from 'antd/lib/button';

interface IProps extends RouteComponentProps<RouterInterface.IRepository>
{
    branches: Readonly<Branch[]>,
    tagNames: Readonly<string[]>,
    currentBranchOrTagOrCommitHash: string,
    onButtonClick: ButtonProps['onClick'],
    onBranchOrTagClickFactory: (branchOrTagName: string) => MenuItemProps['onClick'],
    visible: boolean,
}

function BranchOrTagMenu(props: IProps)
{
    const BRANCH_ICON = <BranchesOutlined />;
    const TAG_ICON = <TagOutlined />;
    const COMMIT_HASH_ICON = <BarcodeOutlined />;
    const TAG_SHOW_AMOUNT = 10;
    const BRANCH_SHOW_AMOUNT = 10;
    const {
        branches, tagNames, visible,
        currentBranchOrTagOrCommitHash,
        onButtonClick,
        onBranchOrTagClickFactory, match: {params: {username, repository}},
    } = props;

    const branchNames = branches.map(branch => branch.name);

    const isBranch = branchNames.includes(currentBranchOrTagOrCommitHash);
    const isTag = tagNames.includes(currentBranchOrTagOrCommitHash);

    const icon = isBranch ? BRANCH_ICON :
        isTag ? TAG_ICON : COMMIT_HASH_ICON;

    const branchNamesToShow: string[] = [];
    const tagNamesToShow: string[] = [];

    // 分支与标签均只显示前十个，包含当前分支/标签在内，当前分支/标签在列表第一个
    if (isBranch)
    {
        branchNamesToShow.push(currentBranchOrTagOrCommitHash);
        let currentBranchNameAmount = 1;
        for (const branchName of branchNames)
        {
            if (currentBranchNameAmount === BRANCH_SHOW_AMOUNT)
            {
                break;
            }
            if (branchName !== currentBranchOrTagOrCommitHash)
            {
                branchNamesToShow.push(branchName);
                currentBranchNameAmount++;
            }
        }
    }
    else
    {
        branchNamesToShow.push(...branchNames.slice(0, BRANCH_SHOW_AMOUNT));
    }

    if (isTag)
    {
        tagNamesToShow.push(currentBranchOrTagOrCommitHash);
        let currentTagNameAmount = 1;
        for (const tagName of tagNames)
        {
            if (currentTagNameAmount === TAG_SHOW_AMOUNT)
            {
                break;
            }
            if (tagName !== currentBranchOrTagOrCommitHash)
            {
                tagNamesToShow.push(tagName);
                currentTagNameAmount++;
            }
        }
    }
    else
    {
        tagNamesToShow.push(...tagNames.slice(0, TAG_SHOW_AMOUNT));
    }

    return (
        <div className={Style.BranchOrTagMenu}>
            <Popover placement={'bottomLeft'} visible={visible} trigger={['click']} content={
                <div className={Style.menuWrapper}>
                    <Menu defaultOpenKeys={['branch']}
                          selectedKeys={[currentBranchOrTagOrCommitHash]}
                          selectable={false}
                          className={Style.menu}
                          mode={'inline'}
                          inlineIndent={12} forceSubMenuRender={true}>
                        <Menu.SubMenu title={<b>分支</b>} key={'branch'} icon={BRANCH_ICON}>
                            {
                                branches.length === 0
                                    ? (<Empty description={'暂无分支'} image={Empty.PRESENTED_IMAGE_SIMPLE} />)
                                    : (branchNamesToShow.map(branchName => (
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
                        <Menu.Item>
                            <div className={Style.fullListLinkWrapper}>
                                <Link to={RouterFunction.generateRepositoryBranchesRoute({
                                    username,
                                    repository,
                                })}>查看所有分支</Link></div>
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.SubMenu title={<b>标签</b>} key={'tag'} icon={TAG_ICON}>
                            {
                                tagNames.length === 0
                                    ? (<Empty description={'暂无标签'} image={Empty.PRESENTED_IMAGE_SIMPLE} />)
                                    : (tagNamesToShow.map(tagName => (
                                        <Menu.Item onClick={onBranchOrTagClickFactory(tagName)}
                                                   key={tagName}>
                                            <div className={Style.menuItem}>
                                            <span className={Style.checkIconWrapper}>
                                            {currentBranchOrTagOrCommitHash === tagName ? <CheckOutlined /> : null}
                                        </span>
                                                <span className={Style.name}>{tagName}</span>
                                            </div>
                                        </Menu.Item>)))
                            }
                        </Menu.SubMenu>
                        <Menu.Item>
                            <div className={Style.fullListLinkWrapper}>
                                <Link to={RouterFunction.generateRepositoryTagsRoute({
                                    username, repository,
                                })}>查看所有标签</Link>
                            </div>
                        </Menu.Item>
                    </Menu>
                </div>
            }>
                <Button onClick={onButtonClick}>{icon}{currentBranchOrTagOrCommitHash}<CaretDownOutlined /></Button>
            </Popover>
        </div>);
}

export default React.memo(withRouter(BranchOrTagMenu));