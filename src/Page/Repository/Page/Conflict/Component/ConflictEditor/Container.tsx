import React, {PureComponent} from 'react';
import View from './View';
import {Conflict} from '../../../../../../Class';
import {IControlledCodeMirror} from 'react-codemirror2';
import {CheckboxProps} from 'antd/lib/checkbox';

export interface IConflictEditorProps
{
    conflict: Conflict;
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
    }

    onCodeChange: IControlledCodeMirror['onBeforeChange'] = (editor, data, value) =>
    {
        this.setState({code: value});
    };

    onResolvedCheckboxChange: CheckboxProps['onChange'] = e =>
    {
        this.setState({resolved: e.target.checked});
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