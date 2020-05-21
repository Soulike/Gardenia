import React, {HTMLAttributes} from 'react';
import Style from './Style.module.scss';
import {Commit} from '../../../../../../Class';
import {Spin} from 'antd';
import CommitInfoBar from '../CommitInfoBar';
import {Interface as RouterInterface} from '../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import Binary from './Component/Binary';
import Oversize from './Component/Oversize';
import {basename, extname} from 'path';
import CodeReader from '../../../../../../Component/CodeReader';
import MarkdownReader from './Component/MarkdownReader';
import {DrawerProps} from 'antd/lib/drawer';
import CodeCommentDrawer from './Component/CodeCommentDrawer';
import FileInfoBar from './Component/FileInfoBar';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    isBinary: boolean,
    isOversize: boolean,
    lastCommit: Readonly<Commit>,
    loading: boolean,
    fileContent: string;
    fileSize: number;
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
    const JSON = ['.json'];
    const MARKDOWN = ['.md', '.markdown', '.mdwn'];
    const {
        isBinary,
        isOversize,
        lastCommit,
        loading,
        fileContent,
        fileSize,
        match: {params: {path}},
        onCodeLineClickFactory,
        hasCommentLineNumbers,
        drawerCode,
        drawerLineNumber,
        drawerVisible,
        onDrawerClose,
    } = props;
    const fileName = basename(path!);
    const ext = extname(fileName).toLowerCase();
    return (
        <>
            <div className={Style.FileReader}>
                <Spin spinning={loading}>
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
                                    if (isBinary)
                                    {
                                        return <Binary />;
                                    }
                                    else if (isOversize)
                                    {
                                        return <Oversize />;
                                    }
                                    else if (JSON.includes(ext))
                                    {
                                        return <CodeReader code={fileContent}
                                                           hasComment={true} hasLineNumber={true}
                                                           hasCommentLineNumbers={hasCommentLineNumbers}
                                                           onCodeLineClickFactory={onCodeLineClickFactory} />;
                                    }
                                    else if (MARKDOWN.includes(ext))
                                    {
                                        return <MarkdownReader markdown={fileContent} />;
                                    }
                                    else
                                    {
                                        return <CodeReader code={fileContent}
                                                           hasComment={true} hasLineNumber={true}
                                                           onCodeLineClickFactory={onCodeLineClickFactory}
                                                           hasCommentLineNumbers={hasCommentLineNumbers} />;
                                    }
                                })()
                            }
                        </div>
                    </div>
                </Spin>
            </div>
            <CodeCommentDrawer lineNumber={drawerLineNumber}
                               code={drawerCode}
                               visible={drawerVisible}
                               fileName={fileName} onClose={onDrawerClose} commitHash={lastCommit.commitHash} />
        </>
    );
}

export default withRouter(React.memo(FileReader));