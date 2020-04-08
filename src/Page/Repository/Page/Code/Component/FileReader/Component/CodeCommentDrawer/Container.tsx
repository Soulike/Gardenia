import React, {PureComponent} from 'react';
import {DrawerProps} from 'antd/lib/drawer';
import View from './View';

interface IProps
{
    visible: DrawerProps['visible'];
    fileName: string;
    code: string;
    lineNumber: number;
    onClose: DrawerProps['onClose'];
    commitHash: string;
}

interface IState
{
    loading: boolean;
}

class CodeCommentDrawer extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            loading: false,
        };
    }

    render()
    {
        const {visible, fileName, code, lineNumber, onClose, commitHash} = this.props;
        const {loading} = this.state;
        return (<View visible={visible}
                      fileName={fileName}
                      code={code}
                      loading={loading}
                      lineNumber={lineNumber} onClose={onClose} commitHash={commitHash} />);
    }
}

export default CodeCommentDrawer;