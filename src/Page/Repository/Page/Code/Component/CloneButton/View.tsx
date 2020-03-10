import React from 'react';
import {Button, Input, Popover} from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import {CopyOutlined} from '@ant-design/icons';

interface IProps
{
    username: string,
    repository: string,
    onCopy: CopyToClipboard.Props['onCopy']
}

function CloneButtonView(props: Readonly<IProps>)
{
    const {username, repository, onCopy} = props;
    return (
        <Popover title={'通过 HTTPS 克隆'} trigger={'click'} placement={'bottomLeft'} overlayStyle={{
            width: '450px',
        }} content={
            <React.Fragment>
                <p>使用 Git 来克隆以下地址</p>

                <Input value={`${window.location.origin}/${username}/${repository}.git`} addonAfter={
                    <CopyToClipboard text={`${window.location.origin}/${username}/${repository}.git`} onCopy={onCopy}>
                        <CopyOutlined />
                    </CopyToClipboard>
                } />
            </React.Fragment>}>
            <Button type={'primary'}>克隆</Button>
        </Popover>
    );
}

export default React.memo(CloneButtonView);