import React from 'react';
import Style from './Style.module.scss';
import {Alert} from 'antd';

function DevelopingSign()
{
    return (
        <div className={Style.DevelopingSign}>
            <Alert type={'info'} message={'该功能仍在开发中'} description={'下次一定，下次一定……'} showIcon={true} />
        </div>
    );
}

export default React.memo(DevelopingSign);