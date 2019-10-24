import React from 'react';
import {Button, Icon, Input, Popover} from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';

interface IProps
{
    username: string,
    repository: string,
    onCopy: CopyToClipboard.Props['onCopy']
}

function CloneButtonView(props: IProps)
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
                        <Icon type="copy" />
                    </CopyToClipboard>
                } />
            </React.Fragment>}>
            <Button type={'primary'}>克隆</Button>
        </Popover>
    );
}

export default React.memo(CloneButtonView);