import React from 'react';
import Style from './Style.module.scss';
import {ForkOutlined} from '@ant-design/icons';
import {Spin} from 'antd';

interface IProps
{
    forkAmount: number,
    loading: boolean,
}

function ForkAmount(props: IProps)
{
    const {forkAmount, loading} = props;
    return (
        <div className={Style.ForkAmount}>
            <Spin spinning={loading}>
                <ForkOutlined /> {forkAmount}
            </Spin>
        </div>
    );
}

export default React.memo(ForkAmount);