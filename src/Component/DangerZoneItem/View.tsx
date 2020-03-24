import React from 'react';
import {Button, List} from 'antd';
import {ButtonProps} from 'antd/lib/button';

export interface IDangerZoneItemProps
{
    title: string,
    buttonText: string,
    description: string,
    onButtonClick: ButtonProps['onClick']
}

/**
 * @description 配合 DangerZone 使用
 * */
function DangerZoneItem(props: Readonly<IDangerZoneItemProps>)
{
    const {title, description, onButtonClick, buttonText} = props;
    return (
        <List.Item extra={<Button type={'danger'} onClick={onButtonClick}>{buttonText}</Button>}>
            <List.Item.Meta title={title} description={description} />
        </List.Item>
    );
}

export default React.memo(DangerZoneItem);