import React from 'react';
import Style from './Style.module.scss';
import {ObjectType} from '../../../../../../CONSTANT';
import {Commit} from '../../../../../../Class';
import {Empty, List} from 'antd';
import Item from './Component/Item';
import Readme from './Component/Readme';
import CommitInfoBar from '../CommitInfoBar';

const PreviousFolderItem = React.lazy(() => import('./Component/PreviousFolderItem'));

interface IProps
{
    fileList: Readonly<Array<Readonly<{ type: ObjectType, path: string, commit: Commit }>>>,
    lastCommit: Readonly<Commit>,
    loading: boolean,
    showPreviousFolderItem: boolean,
}

function FileListView(props: Readonly<IProps>)
{
    const {fileList, lastCommit, loading, showPreviousFolderItem} = props;
    const {commitHash} = lastCommit;
    return (
        <>
            <div className={Style.FileList}>
                <div className={Style.lastCommitInfoBar}>
                    <CommitInfoBar lastCommit={lastCommit} />
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