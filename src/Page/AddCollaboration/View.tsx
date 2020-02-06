import React from 'react';
import Style from './Style.module.scss';
import PageTitle from '../../Component/PageTitle';
import InputLabel from '../../Component/InputLabel';
import InputTip from '../../Component/InputTip';
import {Button, Input} from 'antd';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    code: string,
    loading: boolean,
    onCodeInputChange: InputProps['onChange'],
    onSubmitButtonClick: ButtonProps['onClick'],
}

function AddCollaboration(props: IProps)
{
    const {code, onCodeInputChange, onSubmitButtonClick, loading} = props;
    return (
        <div className={Style.AddCollaboration}>
            <PageTitle>成为仓库合作者</PageTitle>
            <div className={Style.inputWrapper}>
                <InputLabel required={true}>邀请码</InputLabel>
                <Input disabled={loading} autoFocus={true} type="text" value={code} onChange={onCodeInputChange} />
                <InputTip>仓库合作邀请码可由仓库创建者生成，提交成功后您即可获得仓库的 push 权限。</InputTip>
            </div>
            <div className={Style.buttonWrapper}>
                <Button disabled={loading}
                        loading={loading}
                        type={'primary'}
                        block={true}
                        onClick={onSubmitButtonClick}>提交</Button>
            </div>
        </div>
    );
}

export default React.memo(AddCollaboration);