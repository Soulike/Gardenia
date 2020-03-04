import React from 'react';
import Style from './Style.module.scss';
import {Button, Icon, Popconfirm} from 'antd';
import {PullRequest} from '../../../../../../../../Class';
import {PULL_REQUEST_STATUS} from '../../../../../../../../CONSTANT';
import {PopconfirmProps} from 'antd/lib/popconfirm';

interface IProps
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
    } = props;
    return (
        <div className={Style.OperationButton}>
            <Button.Group size={'large'}>
                {
                    (() =>
                    {
                        switch (status)
                        {
                            case PULL_REQUEST_STATUS.OPEN:
                            {
                                return (
                                    <>
                                        <Popconfirm title={'确认关闭 Pull Request'}
                                                    onConfirm={onCloseButtonClick}
                                                    disabled={loading}>
                                            <Button type={'danger'} loading={loading} disabled={loading}>
                                                <Icon type="close" />关闭 Pull Request
                                            </Button>
                                        </Popconfirm>
                                        <Popconfirm title={'确认合并 Pull Request'}
                                                    onConfirm={onMergeButtonClick}
                                                    disabled={loading || !isMergeable}>
                                            <Button type={'primary'}
                                                    loading={loading}
                                                    disabled={loading || !isMergeable}>
                                                <Icon type="pull-request" />Merge
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
                                                <Icon type="redo" />重新开启 Pull Request
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
            </Button.Group>
        </div>
    );
}

export default React.memo(OperationButton);