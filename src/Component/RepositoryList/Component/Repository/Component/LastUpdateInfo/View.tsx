import React from 'react';
import Style from './Style.module.scss';
import {Commit} from '../../../../../../Class';
import {Date} from '../../../../../../Function';
import {Spin, Tooltip} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';

interface IProps
{
    lastCommit: Readonly<Commit | null>,
    loading: boolean,
}

function LastUpdateInfo(props: IProps)
{
    const {lastCommit, loading} = props;
    return (
        <div className={Style.LastUpdateInfo}>
            <Spin spinning={loading}>
                {
                    lastCommit === null ? null : (
                        <div className={Style.text}>
                            <ClockCircleOutlined /> 最后更新于 <Tooltip title={Date.parseTimestampToDate(lastCommit.timestamp)}>
                            <span className={Style.time}>{Date.parseTimestampToDifference(lastCommit.timestamp)}</span>
                        </Tooltip>
                        </div>
                    )
                }
            </Spin>
        </div>
    );
}

export default React.memo(LastUpdateInfo);