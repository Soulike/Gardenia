import React from 'react';
import Style from './Style.module.scss';
import {Notification as NotificationClass} from '../../../../Class';
import {ButtonProps} from 'antd/lib/button';
import {Button, List, Space, Tooltip} from 'antd';
import {CheckOutlined, MessageOutlined, ReloadOutlined} from '@ant-design/icons';
import {Date} from '../../../../Function';

interface IProps
{
    notification: NotificationClass,
    onConfirmButtonClickFactory: (id: NotificationClass['id']) => ButtonProps['onClick'],
    onUnconfirmButtonClickFactory: (id: NotificationClass['id']) => ButtonProps['onClick'],
}

function Notification(props: IProps)
{
    const {
        notification: {id, confirmed, content, type, timestamp},
        onConfirmButtonClickFactory, onUnconfirmButtonClickFactory,
    } = props;
    return (
        <List.Item>
            <div className={Style.Notification}>
                <div className={Style.left}>
                    <div className={Style.unconfirmedDotWrapper}>
                        {
                            confirmed ? null : <span className={Style.unconfirmedDot} />
                        }
                    </div>
                    <div className={Style.iconWrapper}>
                        <MessageOutlined />
                    </div>
                    <div className={Style.contentWrapper}>
                        {content}
                    </div>
                </div>
                <div className={Style.right}>
                    <div className={Style.typeWrapper}>{type}</div>
                    <div className={Style.timeWrapper}>
                        <Tooltip title={Date.parseTimestampToDate(timestamp)}>
                            <span>{Date.parseTimestampToDifference(timestamp)}</span>
                        </Tooltip>
                    </div>
                    <div className={Style.buttonWrapper}>
                        <Space size={-1}>
                            <Tooltip title={'确认消息'}>
                                <Button onClick={onConfirmButtonClickFactory(id)} size={'small'}
                                        disabled={confirmed}>
                                    <CheckOutlined />
                                </Button>
                            </Tooltip>
                            <Tooltip title={'撤销确认消息'}>
                                <Button onClick={onUnconfirmButtonClickFactory(id)} size={'small'}
                                        disabled={!confirmed}>
                                    <ReloadOutlined />
                                </Button>
                            </Tooltip>
                        </Space>
                    </div>
                </div>
            </div>
        </List.Item>
    );
}

export default React.memo(Notification);