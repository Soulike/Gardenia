import React from 'react';
import Style from './Style.module.scss';
import InputLabel from '../../../../../../Component/InputLabel/View';
import {Button, Input, Tooltip} from 'antd';
import {HINT} from '../../../../../../Validator';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    nickname: string,
    onNicknameInputChange: InputProps['onChange'],
    onNicknameSubmit: ButtonProps['onClick'],
    loading: boolean,
}

function Nickname(props: IProps)
{
    const {nickname, loading, onNicknameInputChange, onNicknameSubmit} = props;
    return (
        <div className={Style.Nickname}>
            <InputLabel>昵称</InputLabel>
            <div className={Style.form}>
                <div className={Style.inputWrapper}>
                    <Tooltip title={HINT.Profile.NICKNAME} trigger={'focus'}>
                        <Input onChange={onNicknameInputChange}
                               value={nickname}
                               disabled={loading} />
                    </Tooltip>
                </div>
                <div className={Style.saveButtonWrapper}>
                    <Button type={'primary'}
                            onClick={onNicknameSubmit}
                            loading={loading}
                            disabled={loading}>保存</Button>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Nickname);