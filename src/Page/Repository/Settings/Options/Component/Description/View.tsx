import React from 'react';
import Style from './Style.module.scss';
import SettingLabel from '../../../../../../Component/SettingLabel';
import {Button, Input} from 'antd';
import {TextAreaProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';

interface Props
{
    description: string,
    onTextareaChange: TextAreaProps['onChange'],
    onSubmit: ButtonProps['onClick'],
    loading: boolean,
}

function DescriptionView(props: Props)
{
    const {description, onSubmit, onTextareaChange, loading} = props;
    return (
        <div className={Style.Description}>
            <label>
                <SettingLabel>仓库描述</SettingLabel>
                <Input.TextArea disabled={loading}
                                value={description}
                                className={Style.textarea}
                                onChange={onTextareaChange} />
            </label>
            <Button loading={loading} disabled={loading} className={Style.button} onClick={onSubmit}>确定</Button>
        </div>
    );
}

export default React.memo(DescriptionView);