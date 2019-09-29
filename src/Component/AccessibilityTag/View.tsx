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
    return (
        <React.Fragment>
            {
                isPublic ?
                    <Tag color={'blue'} {...rest}>公共</Tag> :
                    <Tag color={'gold'} {...rest}>私人</Tag>
            }
        </React.Fragment>
    );
}

export default React.memo(AccessibilityTag);