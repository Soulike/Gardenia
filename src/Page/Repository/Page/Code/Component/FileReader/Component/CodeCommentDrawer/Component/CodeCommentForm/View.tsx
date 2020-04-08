import React, {HTMLAttributes} from 'react';
import Style from './Style.module.scss';
import {Button, Input} from 'antd';
import {TextAreaProps} from 'antd/lib/input';

interface IProps
{
    onSubmit: HTMLAttributes<HTMLFormElement>['onSubmit'];
    codeComment: string;
    onCodeCommentChange: TextAreaProps['onChange'];
    submitting: boolean;
}

function CodeCommentForm(props: IProps)
{
    const {onSubmit, codeComment, onCodeCommentChange, submitting} = props;
    return (
        <form className={Style.CodeCommentForm} onSubmit={onSubmit}>
            <Input.TextArea onChange={onCodeCommentChange}
                            value={codeComment}
                            autoFocus={true}
                            placeholder={'想要补充些什么？'}
                            className={Style.textarea} disabled={submitting} />
            <div className={Style.buttonWrapper}>
                <Button htmlType={'submit'} type={'primary'} disabled={submitting} loading={submitting}>提交</Button>
            </div>
        </form>
    );
}

export default React.memo(CodeCommentForm);