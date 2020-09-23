import React from 'react';
import Style from './Style.module.scss';
import {Drawer} from 'antd';
import {DrawerProps} from 'antd/lib/drawer';
import CodeCommentForm from './Component/CodeCommentForm';
import CodeCommentList from './Component/CodeCommentList';
import CodeReader from '../../../../../../../../Component/CodeReader';

interface IProps
{
    visible: DrawerProps['visible'];
    fileName: string;
    code: string;
    lineNumber: number;
    onClose: DrawerProps['onClose'];
    commitHash: string;
}

function CodeCommentDrawer(props: IProps)
{
    const {visible, fileName, code, onClose, lineNumber, commitHash} = props;
    return (
        <Drawer destroyOnClose={true}
                title={<div className={Style.title}>代码批注 - {fileName}:{lineNumber}</div>}
                visible={visible}
                placement={'right'}
                onClose={onClose}
                width={'33%'}>
            <div className={Style.CodeCommentDrawer}>
                <div className={Style.top}>
                    <CodeReader fileContent={code} hasLineNumber={false} hasComment={false} />
                </div>
                <div className={Style.mid}>
                    <CodeCommentList commitHash={commitHash} lineNumber={lineNumber} />
                </div>
                <div className={Style.bottom}>
                    <CodeCommentForm lineNumber={lineNumber} commitHash={commitHash} />
                </div>
            </div>
        </Drawer>
    );
}

export default React.memo(CodeCommentDrawer);