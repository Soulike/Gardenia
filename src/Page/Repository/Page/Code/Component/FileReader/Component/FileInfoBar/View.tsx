import React from 'react';
import Style from './Style.module.scss';
import {ButtonProps} from 'antd/lib/button';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../../../Router';
import {File as FileFunction} from '../../../../../../../../Function';
import {Button} from 'antd';
import {FileTextOutlined} from '@ant-design/icons';
import path from 'path';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    fileSize: number;
    onRawFileButtonClick: ButtonProps['onClick'],
}

function FileInfoBar(props: IProps)
{
    const {
        fileSize, onRawFileButtonClick,
        match: {
            params: {
                username, repository, branch, path: filePath,
            },
        },
    } = props;
    const fileName = path.basename(filePath!);
    return (
        <div className={Style.FileInfoBar}>
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
                        repository,
                        branch: branch!,
                        path: filePath,
                    })}>历史
                    </Link>
                </Button>
                <Button onClick={onRawFileButtonClick}>下载</Button>
            </Button.Group>
        </div>
    );
}

export default withRouter(FileInfoBar);