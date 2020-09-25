import React, {HTMLAttributes} from 'react';
import Style from './Style.module.scss';
import {Commit} from '../../../../../../Class';
import {Skeleton} from 'antd';
import CommitInfoBar from '../CommitInfoBar';
import Binary from './Component/Binary';
import Oversize from './Component/Oversize';
import path from 'path';
import CodeReader from '../../../../../../Component/CodeReader';
import MarkdownReader from './Component/MarkdownReader';
import {DrawerProps} from 'antd/lib/drawer';
import CodeCommentDrawer from './Component/CodeCommentDrawer';
import FileInfoBar from './Component/FileInfoBar';
import PDFReader from './Component/PDFReader';
import ImageViewer from './Component/ImageViewer';

interface IProps
{
    isOversize: boolean,
    lastCommit: Readonly<Commit>,
    loading: boolean,
    fileType: string,
    fileContent: Blob;
    fileSize: number;
    fileName: string;
    onCodeLineClickFactory: (lineNumber: number) => HTMLAttributes<HTMLTableRowElement>['onClick'];
    hasCommentLineNumbers: number[];

    drawerVisible: DrawerProps['visible'];
    drawerCode: string;
    drawerLineNumber: number;
    onDrawerClose: DrawerProps['onClose'];
}

function FileReader(props: Readonly<IProps>)
{
    // 文件类型扩展名
    const MARKDOWN = ['.md', '.markdown', '.mdwn'];
    const {
        isOversize,
        lastCommit,
        loading,
        fileContent,
        fileType,
        fileSize,
        fileName,
        onCodeLineClickFactory,
        hasCommentLineNumbers,
        drawerCode,
        drawerLineNumber,
        drawerVisible,
        onDrawerClose,
    } = props;
    const ext = path.extname(fileName).toLowerCase();

    const lowerCasedFileType = fileType.toLowerCase();
    const isText = lowerCasedFileType.includes('text');
    return (
        <>
            <div className={Style.FileReader}>
                <Skeleton loading={loading} active={true}>
                    <div className={Style.commitInfoBar}>
                        <CommitInfoBar lastCommit={lastCommit} />
                    </div>
                    <div className={Style.contentWrapper}>
                        <div className={Style.fileInfoBarWrapper}>
                            <FileInfoBar fileSize={fileSize} lastCommitHash={lastCommit.commitHash} />
                        </div>
                        <div className={Style.readerWrapper}>
                            {
                                (() =>
                                {
                                    if (isOversize)
                                    {
                                        return <Oversize />;
                                    }
                                    else if (isText && MARKDOWN.includes(ext))
                                    {
                                        return <MarkdownReader fileContent={fileContent} />;
                                    }
                                    else if (lowerCasedFileType.includes('pdf'))
                                    {
                                        return <PDFReader fileContent={fileContent} />;
                                    }
                                    else if (isText || lowerCasedFileType.includes('json'))
                                    {
                                        return <CodeReader fileContent={fileContent}
                                                           hasComment={true} hasLineNumber={true}
                                                           onCodeLineClickFactory={onCodeLineClickFactory}
                                                           hasCommentLineNumbers={hasCommentLineNumbers} />;
                                    }
                                    else if (lowerCasedFileType.includes('image'))
                                    {
                                        return <ImageViewer loading={loading} fileContent={fileContent} />;
                                    }
                                    else
                                    {
                                        return <Binary />;
                                    }
                                })()
                            }
                        </div>
                    </div>
                </Skeleton>
            </div>
            <CodeCommentDrawer lineNumber={drawerLineNumber}
                               code={drawerCode}
                               visible={drawerVisible}
                               fileName={fileName} onClose={onDrawerClose} commitHash={lastCommit.commitHash} />
        </>
    );
}

export default React.memo(FileReader);