import React from 'react';
import Style from './Style.module.scss';
import {Button, Input, Popconfirm, Tooltip} from 'antd';
import {InputProps} from 'antd/lib/input';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import InputLabel from '../../../../../../../../Component/InputLabel';
import {HINT} from '../../../../../../../../Validator';

interface IProps
{
    repositoryName: string,
    onRepositoryNameInputChange: InputProps['onChange'],
    onRenameConfirm: PopconfirmProps['onConfirm'],
    submitting: boolean,
}

function shouldRenameButtonBeDisabled(repositoryName: string, submitting: boolean): boolean
{
    return repositoryName.length === 0 || submitting;
}

function RepositoryNameView(props: Readonly<IProps>)
{
    const {repositoryName, onRenameConfirm, onRepositoryNameInputChange, submitting} = props;
    return (
        <div className={Style.RepositoryName}>
            <label className={Style.label}>
                <InputLabel>仓库名</InputLabel>
                <Tooltip trigger={'focus'} title={HINT.Repository.NAME}>
                    <Input className={Style.input}
                           value={repositoryName}
                           onChange={onRepositoryNameInputChange}
                           disabled={submitting} />
                </Tooltip>
                <Popconfirm title={'重命名仓库会导致原仓库网址与克隆路径失效，确定继续？'}
                            onConfirm={onRenameConfirm}
                            disabled={shouldRenameButtonBeDisabled(repositoryName, submitting)}>
                    <Button className={Style.button} loading={submitting}
                            disabled={shouldRenameButtonBeDisabled(repositoryName, submitting)}>重命名</Button>
                </Popconfirm>
            </label>
        </div>
    );
}

export default React.memo(RepositoryNameView);