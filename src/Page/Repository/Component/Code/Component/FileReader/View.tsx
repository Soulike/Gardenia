import React from 'react';
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

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    isBinary: boolean,
    isOversize: boolean,
    fileName: string,
    lastCommit: Readonly<Commit>,
    loading: boolean,
    onRawFileButtonClick: ButtonProps['onClick'],
    fileContent: string;
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
        match: {params: {username, repository: repositoryName, branch, path}},
    } = props;
    const ext = extname(fileName).toLowerCase();
    return (
        <div className={Style.FileReader}>
            <Spin spinning={loading}>
                <div className={Style.commitInfoBar}>
                    <CommitInfoBar lastCommit={lastCommit} />
                </div>
                <div className={Style.contentWrapper}>
                    <div className={Style.fileInfoBar}>
                        <div className={Style.fileName}>{fileName}</div>
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
                                    return <CodeReader code={fileContent} />;
                                }
                                else if (MARKDOWN.includes(ext))
                                {
                                    return <MarkdownReader markdown={fileContent} />;
                                }
                                else
                                {
                                    return <CodeReader code={fileContent} />;
                                }
                            })()
                        }
                    </div>
                </div>
            </Spin>
        </div>
    );
}

export default withRouter(React.memo(FileReader));