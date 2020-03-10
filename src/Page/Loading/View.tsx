import React from 'react';
import Style from './Style.module.scss';
import {LoadingOutlined} from '@ant-design/icons';

function Loading()
{
    return (
        <div className={Style.Loading}>
            <div className={Style.iconWrapper}>
                <LoadingOutlined />
            </div>
            <div className={Style.text}>
                Loading...
            </div>
        </div>
    );
}

export default React.memo(Loading);