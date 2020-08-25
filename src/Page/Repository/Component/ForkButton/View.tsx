import React from 'react';
import Style from './Style.module.scss';
import {Button, Space, Tooltip} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import {String} from '../../../../Function';
import {ForkOutlined} from '@ant-design/icons';

interface IProps
{
    onClick: ButtonProps['onClick'];
    forkAmount: number;
    loading: boolean;
}

function ForkButton(props: IProps)
{
    const {onClick, forkAmount, loading} = props;
    return (
        <Space className={Style.ForkButton} size={-1}>
            <Button onClick={onClick} disabled={loading} loading={loading} size={'small'}>
                <ForkOutlined />
                Fork
            </Button>
            <Tooltip title={forkAmount}>
                <Button disabled={loading} size={'small'}>
                    {String.getNumberAbbreviation(forkAmount)}
                </Button>
            </Tooltip>
        </Space>
    );
}

export default React.memo(ForkButton);