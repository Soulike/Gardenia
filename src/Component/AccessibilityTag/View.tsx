import React from 'react';
import {TagProps} from 'antd/lib/tag';
import {Tag} from 'antd';
import Style from './Style.module.scss';

interface IProps extends Omit<TagProps, 'color'>
{
    isPublic: boolean
}

function AccessibilityTag(props: Readonly<IProps>)
{
    const {isPublic, ...rest} = props;
    return isPublic ?
        <Tag className={Style.AccessibilityTag} color={'blue'} {...rest}>公共</Tag> :
        <Tag className={Style.AccessibilityTag} color={'gold'} {...rest}>私人</Tag>;
}

export default React.memo(AccessibilityTag);