import React from 'react';
import Style from './Style.module.scss';
import {Button, Space, Spin, Tag} from 'antd';
import {Branch, PullRequest} from '../../../../Class';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../Router';
import {PULL_REQUEST_STATUS} from '../../../../CONSTANT';
import {ButtonProps} from 'antd/lib/button';
import PullRequestList from './Component/PullRequestList';
import {CloseOutlined, EllipsisOutlined, ForkOutlined, PlusOutlined, PullRequestOutlined} from '@ant-design/icons';

interface IProps extends RouteComponentProps<RouterInterface.IRepository>
{
    branches: Branch[],
    loading: boolean,
    openAmount: number,
    closedAmount: number,
    mergedAmount: number,
    pullRequests: PullRequest[],
    currentStatus: PULL_REQUEST_STATUS | undefined,
    onStatusButtonClick: (status: PULL_REQUEST_STATUS | undefined) => ButtonProps['onClick'],
    currentPageNumber: number,
    onPrevButtonClick: ButtonProps['onClick'],
    onNextButtonClick: ButtonProps['onClick'],
    noNextPage: boolean,
}

function PullRequests(props: IProps)
{
    const {
        branches, loading,
        match: {params: {username, repositoryName: name}},
        openAmount, closedAmount, mergedAmount, onStatusButtonClick, currentStatus,
        currentPageNumber, pullRequests, onNextButtonClick, onPrevButtonClick, noNextPage,
    } = props;
    let masterBranchName = '';
    for (const {isDefault, name} of branches)
    {
        if (isDefault)
        {
            masterBranchName = name;
        }
    }
    return (
        <div className={Style.PullRequests}>
            <Spin spinning={loading}>
                <div className={Style.list}>
                    <div className={Style.header}>
                        <div className={Style.statusFilter}>
                            <Space size={-1}>
                                <Button size={'small'} type={'link'}
                                        style={{
                                            color: 'unset',
                                            fontWeight: currentStatus === undefined ? 'bolder' : 'inherit',
                                        }}
                                        onClick={onStatusButtonClick(undefined)}>
                                    <EllipsisOutlined /> 所有
                                    <Tag className={Style.tag}>{openAmount + closedAmount + mergedAmount}</Tag>
                                </Button>
                                <Button size={'small'} type={'link'}
                                        style={{
                                            color: 'green',
                                            fontWeight: currentStatus === PULL_REQUEST_STATUS.OPEN ? 'bolder' : 'inherit',
                                        }}
                                        onClick={onStatusButtonClick(PULL_REQUEST_STATUS.OPEN)}>
                                    <ForkOutlined /> 开启的
                                    <Tag className={Style.tag}>{openAmount}</Tag>
                                </Button>
                                <Button size={'small'} type={'link'}
                                        style={{
                                            color: 'red',
                                            fontWeight: currentStatus === PULL_REQUEST_STATUS.CLOSED ? 'bolder' : 'inherit',
                                        }}
                                        onClick={onStatusButtonClick(PULL_REQUEST_STATUS.CLOSED)}>
                                    <CloseOutlined /> 已关闭
                                    <Tag className={Style.tag}>{closedAmount}</Tag>
                                </Button>
                                <Button size={'small'} type={'link'}
                                        style={{
                                            color: 'purple',
                                            fontWeight: currentStatus === PULL_REQUEST_STATUS.MERGED ? 'bolder' : 'inherit',
                                        }}
                                        onClick={onStatusButtonClick(PULL_REQUEST_STATUS.MERGED)}>
                                    <PullRequestOutlined /> 已合并
                                    <Tag className={Style.tag}>{mergedAmount}</Tag>
                                </Button>
                            </Space>
                        </div>
                        <div className={Style.buttonWrapper}>
                            <Link to={RouterFunction.generateRepositoryCompareRoute({
                                sourceRepositoryUsername: username,
                                sourceRepositoryName: name,
                                sourceRepositoryBranch: masterBranchName,
                                targetRepositoryBranch: masterBranchName,
                                repositoryName: name,
                                username,
                            })}>
                                <Button type={'primary'}>
                                    <PlusOutlined />
                                    创建 Pull Request
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className={Style.pullRequestListWrapper}>
                        <PullRequestList pullRequests={pullRequests} />
                    </div>
                </div>
                <div className={Style.pageButtonWrapper}>
                    <Space size={-1}>
                        <Button disabled={currentPageNumber === 0} onClick={onPrevButtonClick}>上一页</Button>
                        <Button onClick={onNextButtonClick} disabled={noNextPage}>下一页</Button>
                    </Space>
                </div>
            </Spin>
        </div>
    );
}

export default withRouter(React.memo(PullRequests));