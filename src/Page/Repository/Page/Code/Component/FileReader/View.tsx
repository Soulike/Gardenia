import React, {HTMLAttributes} from 'react';
import Style from './Style.module.scss';
import {Commit} from '../../../../../../Class';
import {Button, Spin} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import CommitInfoBar from '../CommitInfoBar';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import Binary from './Component/Binary';
import Oversize from './Component/Oversize';
import {extname} from 'path';
import CodeReader from '../../../../../../Component/CodeReader';
import MarkdownReader from './Component/MarkdownReader';
import {File as FileFunction} from '../../../../../../Function';
import {FileTextOutlined} from '@ant-design/icons';
import {DrawerProps} from 'antd/lib/drawer';
import CodeCommentDrawer from './Component/CodeCommentDrawer';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    isBinary: boolean,
    isOversize: boolean,
    fileName: string,
    lastCommit: Readonly<Commit>,
    loading: boolean,
    onRawFileButtonClick: ButtonProps['onClick'],
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
        fileName,
        lastCommit,
        loading,
        onRawFileButtonClick,
        fileContent,
        fileSize,
        match: {params: {username, repository: repositoryName, branch, path}},
        onCodeLineClickFactory,
        hasCommentLineNumbers,
        drawerCode,
        drawerLineNumber,
        drawerVisible,
        onDrawerClose,
    } = props;
    const ext = extname(fileName).toLowerCase();
    return (
        <>
            <div className={Style.FileReader}>
                <Spin spinning={loading}>
                    <div className={Style.commitInfoBar}>
                        <CommitInfoBar lastCommit={lastCommit} />
                    </div>
                    <div className={Style.contentWrapper}>
                        <div className={Style.fileInfoBar}>
                            <div className={Style.fileInfoWrapper}>
                                <div className={Style.fileNameWrapper}>
                                    <FileTextOutlined />
                                    <div className={Style.fileName}> {fileName}</div>
                                </div>
                                <div className={Style.fileSize}>{FileFunction.parseFileSize(fileSize)}</div>
                            </div>
                            <Button.Group className={Style.buttonWrapper}>
                                <Button>
                                    <Link to={RouterFunction.generateRepositoryCommitsRoute({
                                        username,
                                        repository: repositoryName,
                                        branch: branch!,
                                        path,
                                    })}>历史
                                    </Link>
                                </Button>
                                <Button onClick={onRawFileButtonClick}>下载</Button>
                            </Button.Group>
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