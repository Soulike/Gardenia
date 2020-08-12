import React from 'react';
import Style from './Style.module.scss';
import {Card, Input} from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import svg from '../../../../../../Static/Repository/process_building.svg';
import {CopyOutlined} from '@ant-design/icons';

interface IProps
{
    username: string,
    repositoryName: string,
    onCopy: CopyToClipboard.Props['onCopy']
}

function EmptyView(props: Readonly<IProps>)
{
    const {username, repositoryName, onCopy} = props;
    return (
        <Card className={Style.Empty}>
            <img className={Style.img} src={svg} alt="icon" />
            <p><strong>该仓库没有进行过提交。</strong></p>
            <p>可复制以下链接，在本地克隆本仓库并开始您的工作。</p>
            <Input value={`${window.location.origin}/${username}/${repositoryName}.git`} size={'large'} addonAfter={
                <CopyToClipboard text={`${window.location.origin}/${username}/${repositoryName}.git`} onCopy={onCopy}>
                    <CopyOutlined />
                </CopyToClipboard>
            } />
        </Card>
    );
}

export default React.memo(EmptyView);