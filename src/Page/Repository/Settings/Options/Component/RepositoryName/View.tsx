import React from 'react';
import Style from './Style.module.scss';
import {Button, Input, Popconfirm} from 'antd';
import {InputProps} from 'antd/lib/input';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import SettingLabel from '../../../../../../Component/SettingLabel';

interface Props
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

function RepositoryNameView(props: Props)
{
    const {repositoryName, onRenameConfirm, onRepositoryNameInputChange, submitting} = props;
    return (
        <div className={Style.RepositoryName}>
            <label className={Style.label}>
                <SettingLabel>仓库名</SettingLabel>
                <Input className={Style.input}
                       value={repositoryName}
                       onChange={onRepositoryNameInputChange}
                       disabled={submitting} />
                <Popconfirm title={'重命名仓库会导致原仓库网址与克隆路径失效，确定继续？'} onConfirm={onRenameConfirm}>
                    <Button className={Style.button} loading={submitting}
                            disabled={shouldRenameButtonBeDisabled(repositoryName, submitting)}>重命名</Button>
                </Popconfirm>
            </label>
        </div>
    );
}

export default React.memo(RepositoryNameView);