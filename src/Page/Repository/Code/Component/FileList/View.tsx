import React from 'react';
import Style from './Style.module.scss';
import {ObjectType} from '../../../../../CONSTANT';
import {Commit} from '../../../../../Class';
import {Empty, List} from 'antd';
import Item from './Component/Item';
import Readme from './Component/Readme';

interface Props
{
    fileList: Array<{ type: ObjectType, path: string, commit: Commit }>,
    lastCommit: Commit,
    loading: boolean,
}

function FileListView(props: Props)
{
    const {fileList, lastCommit: {commitHash, committerName, message, time}, loading} = props;
    return (
        <>
            <div className={Style.FileList}>
                <div className={Style.lastCommitInfoBar}>
                    <div className={Style.committerName}>{committerName}</div>
                    <div className={Style.message}>{message}</div>
                    <div className={Style.time}>{time}</div>
                    <div className={Style.commitHash}>最后提交：{commitHash.slice(0, 7)}</div>
                </div>
                <List locale={{emptyText: <Empty description={'没有文件'} />}} loading={loading} className={Style.fileList}>
                    {
                        fileList.map(fileInfo => <Item fileInfo={fileInfo} key={fileInfo.path} />)
                    }
                </List>
            </div>
            <div className={Style.readmeWrapper}>
                <Readme commitHash={commitHash} />
            </div>
        </>
    );
}

export default React.memo(FileListView);