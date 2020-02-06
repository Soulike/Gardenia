import React, {DOMAttributes} from 'react';
import Style from './Style.module.scss';
import {Button, Input, Switch, Tooltip} from 'antd';
import {InputProps} from 'antd/lib/input';
import {SwitchProps} from 'antd/lib/switch';
import {HINT} from '../../Validator';
import PageTitle from '../../Component/PageTitle';
import InputLabel from '../../Component/InputLabel/View';

interface IProps
{
    username: string,
    name: string,
    description: string,
    isPublic: boolean,

    onNameInputChange: InputProps['onChange'],
    onDescriptionInputChange: InputProps['onChange'],
    onIsPublicSwitchChange: SwitchProps['onChange'],
    onSubmit: DOMAttributes<HTMLFormElement>['onSubmit']

    submitting: boolean,
    loading: boolean,
}

function CreateRepositoryView(props: Readonly<IProps>)
{
    const {
        username,
        name,
        description,
        isPublic,
        onNameInputChange,
        onDescriptionInputChange,
        onIsPublicSwitchChange,
        onSubmit,
        submitting,
        loading,
    } = props;
    return (
        <div className={Style.CreateRepository}>
            <PageTitle>创建新仓库</PageTitle>
            <form action="#" className={Style.form} onSubmit={onSubmit}>
                <label className={Style.label}>
                    <InputLabel required={true}>仓库名</InputLabel>
                    <Tooltip trigger={'focus'} title={HINT.Repository.NAME}>
                        <Input addonBefore={<div>{username} /</div>}
                               autoFocus={true}
                               value={name}
                               onChange={onNameInputChange}
                               disabled={loading} />
                    </Tooltip>
                </label>
                <label className={Style.label}>
                    <InputLabel>描述</InputLabel>
                    <Input value={description} onChange={onDescriptionInputChange} disabled={loading} />
                </label>
                <label className={Style.label}>
                    <InputLabel>公开</InputLabel>
                    <Switch checked={isPublic} onChange={onIsPublicSwitchChange} disabled={loading} />
                    <div className={Style.inlineDescription}>
                        {
                            isPublic ?
                                '所有人都能看到该仓库' :
                                '只有你和仓库合作者能看到该仓库'
                        }
                    </div>
                </label>
                <Button htmlType={'submit'}
                        type={'primary'}
                        block={true}
                        className={Style.submitButton}
                        loading={submitting}
                        disabled={submitting || loading}>创建仓库</Button>
            </form>
        </div>
    );
}

export default React.memo(CreateRepositoryView);