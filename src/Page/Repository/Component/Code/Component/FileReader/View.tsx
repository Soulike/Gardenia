import React from 'react';
import Style from './Style.module.scss';
import 'highlight.js/scss/github-gist.scss';
import {Commit} from '../../../../../../Class';
import {Alert, Button, Spin} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import CommitInfoBar from '../CommitInfoBar';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import HTMLPreviewer from '../../../../../../Component/HTMLPreviewer';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    isBinary: boolean,
    isOversize: boolean,
    exists: boolean,
    fileName: string,
    html: string,
    lastCommit: Readonly<Commit>,
    loading: boolean,
    onRawFileButtonClick: ButtonProps['onClick'],
}

function FileReader(props: Readonly<IProps>)
{
    const {
        isBinary,
        isOversize,
        exists,
        fileName,
        html,
        lastCommit,
        loading,
        onRawFileButtonClick,
        match: {params: {username, repository: repositoryName, branch, path}},
    } = props;
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
                                    (<HTMLPreviewer html={html} processing={loading} />) :
                            <Alert type={'error'} showIcon={true} message={'文件不存在'} />
                    }
                </div>
            </Spin>
        </div>
    );
}

export default withRouter(React.memo(FileReader));