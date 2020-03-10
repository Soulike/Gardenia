import React from 'react';
import {Alert} from 'antd';

function Binary()
{
    return (
        <Alert type={'warning'}
               showIcon={true}
               message={'二进制文件无法显示'}
               description={'你可以直接下载查看原文件'} />
    );
}

export default React.memo(Binary);