import React from 'react';
import Style from './Style.module.scss';
import {Commit, Repository as RepositoryClass} from '../../Class';
import {Button, Dropdown, Icon, Input, Menu, notification, Popover, Skeleton} from 'antd';
import AccessibilityTag from '../../Component/AccessibilityTag';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG/PAGE';
import CopyToClipboard from 'react-copy-to-clipboard';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';

interface Props extends RouteComponentProps
{
    repository: RepositoryClass,
    branches: Array<string>,
    branch: string,
    commitCount: number,
    lastCommit: Commit,
    loading: boolean,

    onBranchClick: (branch: string) => MenuItemProps['onClick'],
}

function RepositoryView(props: Props)
{
    const {
        repository: {username, name, description, isPublic},
        loading,
        commitCount,
        lastCommit,
        branches,
        branch,
        onBranchClick,
    } = props;
    return (
        <div className={Style.Repository}>
            <Skeleton loading={loading} active={true} paragraph={{rows: 15}}>
                <div className={Style.header}>
                    <div className={Style.basicInfo}>
                        <AccessibilityTag isPublic={isPublic} />
                        <div className={Style.usernameAndName}>
                            <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.PERSONAL_CENTER]
                                .replace(':username', username)}>
                                {username}
                            </Link> / <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.REPOSITORY]
                            .replace(':username', username)
                            .replace(':repository', name)
                            .replace(':path*', '')}>
                            <b>{name}</b>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className={Style.description}>
                    {description}
                </div>
                <div className={Style.infoWrapper}>
                    <div className={Style.info}>
                        <Icon type="clock-circle" /> {commitCount} 次提交
                    </div>
                    <div className={Style.info}>
                        <Icon type="branches" /> {branches.length} 个分支
                    </div>
                </div>
                <div className={Style.buttonWrapper}>
                    <Dropdown trigger={['click']} overlay={
                        <Menu>
                            {
                                branches.map(branch => <Menu.Item key={branch}
                                                                  onClick={onBranchClick(branch)}>{branch}</Menu.Item>)
                            }
                        </Menu>
                    }>
                        <Button>{branch}<Icon type="caret-down" /></Button>
                    </Dropdown>
                    <Popover title={'通过 HTTPS 克隆'} trigger={'click'} placement={'bottomLeft'} overlayStyle={{
                        width: '450px',
                    }} content={
                        <React.Fragment>
                            <p>使用 Git 来克隆以下地址</p>

                            <Input value={`${window.location.origin}/${username}/${name}.git`} addonAfter={
                                <CopyToClipboard text={`${window.location.origin}/${username}/${name}.git`} onCopy={
                                    () => notification.success({message: '仓库地址已成功复制'})
                                }>
                                    <Icon type="copy" />
                                </CopyToClipboard>
                            } />
                        </React.Fragment>
                    }>
                        <Button type={'primary'}>克隆</Button>
                    </Popover>
                </div>
            </Skeleton>
        </div>
    );
}

export default withRouter(React.memo(RepositoryView));