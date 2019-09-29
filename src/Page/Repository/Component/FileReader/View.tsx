import React from 'react';
import Style from './Style.module.scss';
import 'highlight.js/scss/github-gist.scss';
import {Commit} from '../../../../Class';
import {Spin} from 'antd';

interface Props
{
    fileName: string,
    html: string,
    lastCommit: Commit,
    loading: boolean,
}

function FileReader(props: Props)
{
    const {fileName, html, lastCommit: {committerName, message, time, commitHash}, loading} = props;
    return (
        <div className={Style.FileReader}>
            <Spin spinning={loading}>
                <div className={Style.fileInfoBar}>
                    <div className={Style.fileName}>{fileName}</div>
                    <div className={Style.committerName}>{committerName}</div>
                    <div className={Style.message}>{message}</div>
                    <div className={Style.time}>{time}</div>
                    <div className={Style.commitHash}>最后提交：{commitHash.slice(0, 7)}</div>
                </div>
                <div className={Style.content} dangerouslySetInnerHTML={{__html: html}} />
            </Spin>
        </div>
    );
}

export default React.memo(FileReader);