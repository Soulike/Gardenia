import React from 'react';
import {Button, Input, Popover, Spin} from 'antd';
import Style from './Style.module.scss';
import CopyToClipboard from 'react-copy-to-clipboard';
import {ButtonProps} from 'antd/lib/button';
import InputTip from '../../../../../../../../Component/InputTip';
import {CopyOutlined, PlusOutlined} from '@ant-design/icons';

interface IProps
{
    onClick: ButtonProps['onClick'],
    code: string,
    loading: boolean,
    onCopy: CopyToClipboard.Props['onCopy']
}

function AddCollaborationButton(props: IProps)
{
    const {code, loading, onClick, onCopy} = props;
    return (
        <Popover trigger={'click'} title={'邀请码'} placement={'bottomRight'}
                 content={
                     <div className={Style.AddCollaborationButton}>
                         {loading
                             ? <div className={Style.loadingSpin}><Spin /></div>
                             : <div>
                                 <Input value={code} addonAfter={
                                     <CopyToClipboard text={code} onCopy={onCopy}>
                                         <CopyOutlined />
                                     </CopyToClipboard>
                                 } />
                                 <InputTip>邀请码有效期 10 分钟，且只可使用一次。</InputTip>
                             </div>
                         }
                     </div>
                 }>
            <Button type={'primary'} onClick={onClick}>
                <PlusOutlined />添加
            </Button>
        </Popover>
    );
}

export default React.memo(AddCollaborationButton);