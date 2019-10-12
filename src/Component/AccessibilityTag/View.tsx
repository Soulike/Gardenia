import React from 'react';
import {TagProps} from 'antd/lib/tag';
import {Tag} from 'antd';

interface Props extends TagProps
{
    isPublic: boolean
}

function AccessibilityTag(props: Props)
{
    const {isPublic, ...rest} = props;
    return isPublic ?
        <Tag color={'blue'} {...rest}>公共</Tag> :
        <Tag color={'gold'} {...rest}>私人</Tag>;
}

export default React.memo(AccessibilityTag);