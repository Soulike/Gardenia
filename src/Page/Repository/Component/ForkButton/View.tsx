import React from 'react';
import Style from './Style.module.scss';
import {Button, Tooltip} from 'antd';
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
        <Button.Group className={Style.ForkButton} size={'small'}>
            <Button onClick={onClick} disabled={loading} loading={loading}>
                <ForkOutlined />
                Fork
            </Button>
            <Tooltip title={forkAmount}>
                <Button disabled={loading}>{String.getNumberAbbreviation(forkAmount)}</Button>
            </Tooltip>
        </Button.Group>
    );
}

export default React.memo(ForkButton);