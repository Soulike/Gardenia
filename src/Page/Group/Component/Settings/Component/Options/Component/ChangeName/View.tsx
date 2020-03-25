import React from 'react';
import InputLabel from '../../../../../../../../Component/InputLabel';
import {Button, Input, Tooltip} from 'antd';
import Style from './Style.module.scss';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {HINT} from '../../../../../../../../Validator';

export interface IChangeNameProps
{
    groupName: string,

    onGroupNameChange: InputProps['onChange'],
    onButtonClick: ButtonProps['onClick'],

    loading: boolean,
}

function ChangeName(props: IChangeNameProps)
{
    const {groupName, onButtonClick, onGroupNameChange, loading} = props;
    return (
        <div className={Style.ChangeName}>
            <InputLabel>小组名</InputLabel>
            <Tooltip trigger={'focus'} title={HINT.Group.NAME}>
                <Input disabled={loading} className={Style.input} value={groupName} onChange={onGroupNameChange} />
            </Tooltip>
            <Button disabled={loading} loading={loading} className={Style.button} onClick={onButtonClick}>重命名</Button>
        </div>
    );
}

export default React.memo(ChangeName);