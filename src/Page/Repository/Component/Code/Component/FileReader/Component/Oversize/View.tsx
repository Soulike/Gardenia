import React from 'react';
import {Alert} from 'antd';

function Oversize()
{
    return (
        <Alert type={'warning'}
               showIcon={true}
               message={'文件过大，不能直接查看'}
               description={'你可以直接下载查看原文件'} />
    );
}

export default React.memo(Oversize);