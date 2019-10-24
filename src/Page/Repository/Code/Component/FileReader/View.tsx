import React from 'react';
import Style from './Style.module.scss';
import 'highlight.js/scss/github-gist.scss';
import {Commit} from '../../../../../Class';
import {Alert, Button, Spin} from 'antd';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    isBinary: boolean,
    isOversize: boolean,
    exists: boolean,
    fileName: string,
    html: string,
    lastCommit: Commit,
    loading: boolean,
    onRawFileButtonClick: ButtonProps['onClick'],
}

function FileReader(props: IProps)
{
    const {
        isBinary,
        isOversize,
        exists,
        fileName,
        html,
        lastCommit: {committerName, message, time, commitHash},
        loading,
        onRawFileButtonClick,
    } = props;
    return (
        <div className={Style.FileReader}>
            <Spin spinning={loading}>
                <div className={Style.commitInfoBar}>
                    <div className={Style.committerName}>{committerName}</div>
                    <div className={Style.message}>{message}</div>
                    <div className={Style.time}>{time}</div>
                    <div className={Style.commitHash}>最后提交：{commitHash.slice(0, 7)}</div>
                </div>
                <div className={Style.contentWrapper}>
                    <div className={Style.fileInfoBar}>
                        <div className={Style.fileName}>{fileName}</div>
                        <div className={Style.buttonWrapper}>
                            <Button onClick={onRawFileButtonClick}>下载</Button>
                        </div>
                    </div>
                    {
                        exists ?
                            isBinary ?
                                <Alert type={'info'}
                                       showIcon={true}
                                       message={'二进制文件无法显示'}
                                       description={'你可以直接查看原文件'} /> :
                                isOversize ?
                                    <Alert type={'info'}
                                           showIcon={true}
                                           message={'文件太大'}
                                           description={'你可以直接查看原文件'} /> :
                                    <div className={Style.content} dangerouslySetInnerHTML={{__html: html}} /> :
                            <Alert type={'error'} showIcon={true} message={'文件不存在'} />
                    }
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(FileReader);