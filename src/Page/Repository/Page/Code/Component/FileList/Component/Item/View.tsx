import React from 'react';
import {List} from 'antd';
import {ObjectType} from '../../../../../../../../CONSTANT';
import {Commit} from '../../../../../../../../Class';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import Style from './Style.module.scss';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../../../Router';
import {Date} from '../../../../../../../../Function';
import {FileTextOutlined, FolderOutlined} from '@ant-design/icons';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    fileInfo: Readonly<{ type: ObjectType, path: string, commit: Commit }>;
    masterBranchName: string;
}

function Item(props: Readonly<IProps>)
{
    const {masterBranchName, fileInfo: {type, path, commit: {message, timestamp, commitHash}}, match: {params: {username, repository, branch}}} = props;
    const fileName = getFileNameFromPath(path);
    return (
        <List.Item className={Style.Item}>
            {
                type === ObjectType.BLOB ?
                    <FileTextOutlined className={Style.icon} /> :
                    <FolderOutlined className={Style.icon} />
            }
            <div className={Style.fileName}>
                <Link to={
                    RouterFunction.generateRepositoryCodeRoute({
                        username,
                        repository,
                        objectType: type,
                        branch: branch ? branch : masterBranchName,
                        path,
                    })}>
                    {fileName}
                </Link>
            </div>
            <Link className={Style.message} to={
                RouterFunction.generateRepositoryCommitRoute({username, repository, commitHash})
            }>{message}</Link>
            <div className={Style.time}>{Date.parseTimestampToDifference(timestamp)}</div>
        </List.Item>
    );
}

function getFileNameFromPath(path: string): string
{
    const pathSplit = path.split('/');
    return pathSplit[pathSplit.length - 1];
}

export default withRouter(React.memo(Item));