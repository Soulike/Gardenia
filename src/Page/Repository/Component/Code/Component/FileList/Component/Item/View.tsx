import React from 'react';
import {Icon, List} from 'antd';
import {ObjectType} from '../../../../../../../../CONSTANT';
import {Commit} from '../../../../../../../../Class';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import Style from './Style.module.scss';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../../../Router';
import {Date} from '../../../../../../../../Function';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    fileInfo: Readonly<{ type: ObjectType, path: string, commit: Commit }>
}

function Item(props: Readonly<IProps>)
{
    const {fileInfo: {type, path, commit: {message, timestamp}}, match: {params: {username, repository, branch}}} = props;
    const fileName = getFileNameFromPath(path);
    return (
        <List.Item className={Style.Item}>
            {
                type === ObjectType.BLOB ?
                    <Icon className={Style.icon} type="file-text" /> :
                    <Icon className={Style.icon} type="folder" />
            }
            <div className={Style.fileName}>
                <Link to={
                    RouterFunction.generateRepositoryCodeRoute({
                        username,
                        repository,
                        objectType: type,
                        branch: branch ? branch : 'master',
                        path,
                    })}>
                    {fileName}
                </Link>
            </div>
            <div className={Style.message}>{message}</div>
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