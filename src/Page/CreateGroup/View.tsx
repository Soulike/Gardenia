import React, {DOMAttributes} from 'react';
import Style from './Style.module.scss';
import {Button, Input} from 'antd';
import {InputProps} from 'antd/lib/input';

interface IProps
{
    name: string,

    onNameInputChange: InputProps['onChange'],
    onSubmit: DOMAttributes<HTMLFormElement>['onSubmit']

    submitting: boolean,
}

function CreateGroupView(props: Readonly<IProps>)
{
    const {
        name,
        onNameInputChange,
        onSubmit,
        submitting,
    } = props;
    return (
        <div className={Style.CreateNewGroup}>
            <h1 className={Style.title}>创建新小组</h1>
            <form action="#" className={Style.form} onSubmit={onSubmit}>
                <label className={Style.label}>
                    <div className={Style.text}>小组名</div>
                    <Input autoFocus={true}
                           value={name}
                           onChange={onNameInputChange} />
                </label>
                <Button htmlType={'submit'}
                        type={'primary'}
                        block={true}
                        className={Style.submitButton}
                        loading={submitting}
                        disabled={submitting}>创建小组</Button>
            </form>
        </div>
    );
}

export default React.memo(CreateGroupView);