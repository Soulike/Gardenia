import React from 'react';
import Style from './Style.module.scss';
import {Button, Space, Spin, Tag} from 'antd';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../Router';
import {ISSUE_STATUS} from '../../../../CONSTANT';
import {ButtonProps} from 'antd/lib/button';
import {EllipsisOutlined, InfoCircleOutlined, IssuesCloseOutlined, PlusOutlined} from '@ant-design/icons';

import {Issue} from '../../../../Class';
import IssueList from './Component/IssueList';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryIssues>
{
    loading: boolean,
    openAmount: number,
    closedAmount: number,
    currentStatus: ISSUE_STATUS | undefined,
    onStatusButtonClick: (status: ISSUE_STATUS | undefined) => ButtonProps['onClick'],
    issues: Issue[],

    currentPageNumber: number,
    onPrevButtonClick: ButtonProps['onClick'],
    onNextButtonClick: ButtonProps['onClick'],
    noNextPage: boolean,
}

function Issues(props: IProps)
{
    const {
        match: {params: {username, repositoryName}},
        loading, openAmount, closedAmount, currentStatus, onStatusButtonClick,
        currentPageNumber, onPrevButtonClick, onNextButtonClick, noNextPage, issues,
    } = props;
    return (
        <div className={Style.Issues}>
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
                                    <Tag className={Style.tag}>{openAmount + closedAmount}</Tag>
                                </Button>
                                <Button size={'small'} type={'link'}
                                        style={{
                                            color: 'green',
                                            fontWeight: currentStatus === ISSUE_STATUS.OPEN ? 'bolder' : 'inherit',
                                        }}
                                        onClick={onStatusButtonClick(ISSUE_STATUS.OPEN)}>
                                    <InfoCircleOutlined /> 开启的
                                    <Tag className={Style.tag}>{openAmount}</Tag>
                                </Button>
                                <Button size={'small'} type={'link'}
                                        style={{
                                            color: 'red',
                                            fontWeight: currentStatus === ISSUE_STATUS.CLOSED ? 'bolder' : 'inherit',
                                        }}
                                        onClick={onStatusButtonClick(ISSUE_STATUS.CLOSED)}>
                                    <IssuesCloseOutlined /> 已关闭
                                    <Tag className={Style.tag}>{closedAmount}</Tag>
                                </Button>
                            </Space>
                        </div>
                        <Link to={RouterFunction.generateRepositoryCreateIssueRoute({
                            username, repositoryName,
                        })}>
                            <Button type={'primary'}>
                                <PlusOutlined />
                                创建 Issue
                            </Button>
                        </Link>
                    </div>
                    <div className={Style.issueListWrapper}>
                        <IssueList issues={issues} />
                    </div>
                    <div className={Style.pageButtonWrapper}>
                        <Space size={-1}>
                            <Button disabled={currentPageNumber === 0} onClick={onPrevButtonClick}>上一页</Button>
                            <Button onClick={onNextButtonClick} disabled={noNextPage}>下一页</Button>
                        </Space>
                    </div>
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(withRouter(Issues));