import React from 'react';
import Style from './Style.module.scss';
import {Button, Popconfirm, Space} from 'antd';
import {PullRequest} from '../../../../../../../../Class';
import {PULL_REQUEST_STATUS} from '../../../../../../../../CONSTANT';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import {CloseOutlined, PullRequestOutlined, RedoOutlined, ToolOutlined} from '@ant-design/icons';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../../../Router';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryConflict>
{
    pullRequest: Pick<PullRequest, 'status'>;
    onCloseButtonClick: PopconfirmProps['onConfirm'];
    onMergeButtonClick: PopconfirmProps['onConfirm'];
    onReopenButtonClick: PopconfirmProps['onConfirm'];
    loading: boolean;
    isMergeable: boolean;
}

function OperationButton(props: IProps)
{
    const {
        pullRequest: {status},
        onCloseButtonClick, onMergeButtonClick, onReopenButtonClick, loading, isMergeable,
        match: {
            params: {username, repositoryName, no},
        },
    } = props;
    return (
        <div className={Style.OperationButton}>
            <Space size={-1}>
                {
                    (() =>
                    {
                        switch (status)
                        {
                            case PULL_REQUEST_STATUS.OPEN:
                            {
                                return (
                                    <>
                                        {
                                            isMergeable ?
                                                (<Popconfirm title={'确认合并 Pull Request'}
                                                             onConfirm={onMergeButtonClick}
                                                             disabled={loading || !isMergeable}>
                                                    <Button type={'primary'}
                                                            loading={loading}
                                                            disabled={loading || !isMergeable}>
                                                        <PullRequestOutlined />Merge
                                                    </Button>
                                                </Popconfirm>) :
                                                (<Button type={'primary'}>
                                                    <Link to={RouterFunction.generateRepositoryConflictRoute({
                                                        username, repositoryName, no,
                                                    })}>
                                                        <ToolOutlined /> 解决冲突
                                                    </Link>
                                                </Button>)
                                        }
                                        <Popconfirm title={'确认关闭 Pull Request'}
                                                    onConfirm={onCloseButtonClick}
                                                    disabled={loading}>
                                            <Button type={'primary'} danger={true} loading={loading} disabled={loading}>
                                                <CloseOutlined />关闭 Pull Request
                                            </Button>
                                        </Popconfirm>
                                    </>);
                            }
                            case PULL_REQUEST_STATUS.CLOSED:
                            {
                                return (
                                    <>
                                        <Popconfirm title={'确认重新开启 Pull Request'}
                                                    onConfirm={onReopenButtonClick}
                                                    disabled={loading}>
                                            <Button type={'primary'}
                                                    loading={loading}
                                                    disabled={loading}>
                                                <RedoOutlined />重新开启 Pull Request
                                            </Button>
                                        </Popconfirm>
                                    </>);
                            }
                            case PULL_REQUEST_STATUS.MERGED:
                            {
                                return null;
                            }
                        }
                    })()
                }
            </Space>
        </div>
    );
}

export default React.memo(withRouter(OperationButton));