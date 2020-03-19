import React, {PureComponent} from 'react';
import View from './View';
import {Conflict} from '../../../../../../Class';
import {IControlledCodeMirror} from 'react-codemirror2';
import {CheckboxProps} from 'antd/lib/checkbox';
import {notification} from 'antd';

export interface IConflictEditorProps
{
    conflict: Conflict;
    onChange?: (filePath: string, resolved: boolean, code: string) => void;
}

interface IState
{
    code: string,
    resolved: boolean,
}

class ConflictEditor extends PureComponent<IConflictEditorProps, IState>
{
    constructor(props: IConflictEditorProps)
    {
        super(props);
        this.state = {
            code: '',
            resolved: false,
        };
    }

    componentDidMount()
    {
        const {conflict: {content}} = this.props;
        this.setState({code: content});
    }

    async componentDidUpdate(prevProps: Readonly<IConflictEditorProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {conflict} = this.props;
        const {conflict: prevConflict} = prevProps;
        if (conflict !== prevConflict)
        {
            await this.componentDidMount();
        }

        const {onChange} = this.props;
        if (typeof onChange === 'function')
        {
            const {code, resolved} = this.state;
            const {filePath} = conflict;
            const {code: prevCode, resolved: prevResolve} = prevState;
            if (code !== prevCode || resolved !== prevResolve)
            {
                await onChange(filePath, resolved, code);
            }
        }
    }

    onCodeChange: IControlledCodeMirror['onBeforeChange'] = (editor, data, value) =>
    {
        this.setState({code: value});
    };

    onResolvedCheckboxChange: CheckboxProps['onChange'] = e =>
    {
        const {code} = this.state;
        const {conflict: {filePath}} = this.props;
        if (code.search(/^<<<<<<< .+$/m) !== -1
            || code.search(/^=======$/m) !== -1
            || code.search(/^>>>>>>> .+$/m) !== -1)
        {
            notification.warning({
                message: <div><code>{filePath}</code> 中仍存在冲突</div>,
                description: '请解决冲突，并删除所有的冲突标记',
            });
        }
        else
        {
            this.setState({resolved: e.target.checked});
        }
    };

    render()
    {
        const {code, resolved} = this.state;
        const {conflict} = this.props;
        return (<View conflict={conflict}
                      code={code}
                      onCodeChange={this.onCodeChange}
                      resolved={resolved}
                      onResolvedCheckboxChange={this.onResolvedCheckboxChange} />);
    }
}

export default ConflictEditor;