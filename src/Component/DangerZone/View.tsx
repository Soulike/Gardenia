import React, {ReactNode} from 'react';
import {List} from 'antd';

export interface IDangerZoneProps
{
    children?: ReactNode
}

/**
 * @description 配合 DangerZoneItem 使用，children 是在 DangerZoneItem 基础上包装的 Container
 * */
function DangerZone(props: IDangerZoneProps)
{
    const {children} = props;
    return (
        <List bordered={true} split={true}>
            {children}
        </List>
    );
}

export default React.memo(DangerZone);