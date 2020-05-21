import React from 'react';
import {Issue} from '../../../../../../Class';
import {ISSUE_STATUS} from '../../../../../../CONSTANT';
import {Button, Popconfirm} from 'antd';
import {IssuesCloseOutlined, RedoOutlined} from '@ant-design/icons';
import {PopconfirmProps} from 'antd/lib/popconfirm';

interface IProps
{
    issueStatus: Issue['status'];
    onCloseButtonClick: PopconfirmProps['onConfirm'];
    onReopenButtonClick: PopconfirmProps['onConfirm'];
    loading: boolean;
}

function OperationButtons(props: IProps)
{
    const {issueStatus, onReopenButtonClick, onCloseButtonClick, loading} = props;

    return (
        issueStatus === ISSUE_STATUS.OPEN ? (
            <Popconfirm title={'确定关闭 Issue？'} onConfirm={onCloseButtonClick} disabled={loading}>
                <Button type={'primary'} danger={true} loading={loading} disabled={loading}>
                    <IssuesCloseOutlined />关闭 Issue
                </Button>
            </Popconfirm>
        ) : (
            <Popconfirm title={'确定重新开启 Issue？'} onConfirm={onReopenButtonClick} disabled={loading}>
                <Button type={'primary'} loading={loading} disabled={loading}>
                    <RedoOutlined />重新开启 Issue
                </Button>
            </Popconfirm>
        )
    );
}

export default React.memo(OperationButtons);