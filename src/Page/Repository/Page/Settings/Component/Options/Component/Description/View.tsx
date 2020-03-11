import React from 'react';
import Style from './Style.module.scss';
import InputLabel from '../../../../../../../../Component/InputLabel';
import {Button, Input, Spin} from 'antd';
import {TextAreaProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    description: string,
    onTextareaChange: TextAreaProps['onChange'],
    onSubmit: ButtonProps['onClick'],
    loading: boolean,
    submitting: boolean
}

function DescriptionView(props: Readonly<IProps>)
{
    const {description, onSubmit, onTextareaChange, loading, submitting} = props;
    return (
        <div className={Style.Description}>
            <label>
                <InputLabel>仓库描述</InputLabel>
                <Spin spinning={loading}>
                    <Input.TextArea disabled={loading || submitting}
                                    value={description}
                                    className={Style.textarea}
                                    onChange={onTextareaChange} />
                </Spin>
            </label>
            <div className={Style.buttonWrapper}>
                <Button loading={submitting}
                        disabled={loading || submitting}
                        className={Style.button}
                        onClick={onSubmit}>确定</Button>
            </div>
        </div>
    );
}

export default React.memo(DescriptionView);