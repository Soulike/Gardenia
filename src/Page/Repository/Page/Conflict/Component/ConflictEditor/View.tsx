import React from 'react';
import Style from './Style.module.scss';
import {Conflict} from '../../../../../../Class';
import {CheckboxProps} from 'antd/lib/checkbox';
import {Checkbox} from 'antd';
import {IControlledCodeMirror} from 'react-codemirror2';

const CodeMirror = React.lazy(() => import('../../../../../../Component/CodeMirror'));

export interface IConflictEditorProps
{
    conflict: Conflict,

    code: string,
    onCodeChange: IControlledCodeMirror['onBeforeChange'],

    resolved: boolean,
    onResolvedCheckboxChange: CheckboxProps['onChange']
}

function ConflictEditor(props: IConflictEditorProps)
{
    const {conflict: {filePath}, code, onCodeChange, onResolvedCheckboxChange, resolved} = props;
    return (
        <div className={Style.ConflictEditor}>
            <div className={Style.header}>
                <code className={Style.filePath}>{filePath}</code>
                <label className={Style.checkboxWrapper}>
                    <Checkbox onChange={onResolvedCheckboxChange} checked={resolved} />
                    <div className={Style.text}>已解决</div>
                </label>
            </div>
            <div className={Style.codeWrapper} style={resolved ? {position: 'fixed', top: '99999999px'} : {}}>
                <CodeMirror onBeforeChange={onCodeChange} value={code} options={{
                    lineNumbers: true,
                    indentUnit: 0,
                }} />
            </div>
        </div>
    );
}

export default React.memo(ConflictEditor);