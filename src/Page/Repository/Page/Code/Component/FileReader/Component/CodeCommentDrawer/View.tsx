import React from 'react';
import Style from './Style.module.scss';
import {Drawer, Spin} from 'antd';
import {DrawerProps} from 'antd/lib/drawer';
import CodeReader from '../../../../../../../../Component/CodeReader';
import CodeCommentForm from './Component/CodeCommentForm';
import CodeCommentList from './Component/CodeCommentList';

interface IProps
{
    visible: DrawerProps['visible'];
    fileName: string;
    code: string;
    loading: boolean;
    lineNumber: number;
    onClose: DrawerProps['onClose'];
    commitHash: string;
}

function CodeCommentDrawer(props: IProps)
{
    const {visible, fileName, code, loading, onClose, lineNumber, commitHash} = props;
    return (
        <Spin spinning={loading}>
            <Drawer destroyOnClose={true}
                    title={<div className={Style.title}>代码批注 - {fileName}:{lineNumber}</div>}
                    visible={visible}
                    placement={'right'}
                    onClose={onClose}
                    width={'33%'}>
                <div className={Style.CodeCommentDrawer}>
                    <div className={Style.top}>
                        <CodeReader code={code} hasComment={false} hasLineNumber={false} />
                    </div>
                    <div className={Style.mid}>
                        <CodeCommentList commitHash={commitHash} lineNumber={lineNumber} />
                    </div>
                    <div className={Style.bottom}>
                        <CodeCommentForm lineNumber={lineNumber} commitHash={commitHash} />
                    </div>
                </div>
            </Drawer>
        </Spin>
    );
}

export default React.memo(CodeCommentDrawer);