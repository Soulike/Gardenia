import React from 'react';
import {Button, Tooltip} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import {StarFilled, StarOutlined} from '@ant-design/icons';
import {String} from '../../Function';

interface IProps
{
    hasStared: boolean,
    starAmount: number,
    loading: boolean,
    onClick: ButtonProps['onClick'],
}

function StarButton(props: IProps)
{
    const {hasStared, starAmount, loading, onClick} = props;
    // TODO: star 人员列表
    return (
        <Button.Group size={'small'}>
            <Button onClick={async e =>
            {
                e.preventDefault();
                if (typeof onClick === 'function')
                {
                    await onClick(e);
                }
            }} loading={loading} disabled={loading}>
                {
                    hasStared ? (
                        <>
                            <StarFilled /> Unstar
                        </>) : (
                        <>
                            <StarOutlined /> Star
                        </>)
                }
            </Button>
            <Tooltip title={starAmount}>
                <Button onClick={async e => e.preventDefault()}>
                    {String.getNumberAbbreviation(starAmount)}
                </Button>
            </Tooltip>
        </Button.Group>
    );
}

export default React.memo(StarButton);