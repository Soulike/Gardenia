import React from 'react';
import Style from './Style.module.scss';
import {ObjectType} from '../../../../../CONSTANT';
import {Commit} from '../../../../../Class';
import {Empty, List} from 'antd';
import Item from './Component/Item';
import Readme from './Component/Readme';

const PreviousFolderItem = React.lazy(() => import('./Component/PreviousFolderItem'));

interface IProps
{
    fileList: Array<{ type: ObjectType, path: string, commit: Commit }>,
    lastCommit: Commit,
    loading: boolean,
    showPreviousFolderItem: boolean,
}

function FileListView(props: IProps)
{
    const {fileList, lastCommit: {commitHash, committerName, message, time}, loading, showPreviousFolderItem} = props;
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
                        showPreviousFolderItem ? <PreviousFolderItem /> : null
                    }
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