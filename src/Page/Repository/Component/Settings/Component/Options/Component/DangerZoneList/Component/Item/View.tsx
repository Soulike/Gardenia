import React from 'react';
import {Button, List} from 'antd';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    title: string,
    description: string,
    onButtonClick: ButtonProps['onClick']
}

function Item(props: IProps)
{
    const {title, description, onButtonClick} = props;
    return (
        <List.Item extra={<Button type={'danger'} onClick={onButtonClick}>{title}</Button>}>
            <List.Item.Meta title={title} description={description} />
        </List.Item>
    );
}

export default React.memo(Item);