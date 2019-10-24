import React from 'react';
import {Icon, List} from 'antd';
import {ObjectType} from '../../../../../../../CONSTANT';
import {Commit} from '../../../../../../../Class';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import Style from './Style.module.scss';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../../Router';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    fileInfo: { type: ObjectType, path: string, commit: Commit }
}

function Item(props: IProps)
{
    const {fileInfo: {type, path, commit: {message, time}}, match: {params: {username, repository, branch}}} = props;
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
                    RouterFunction.generateRepositoryRoute({
                        username,
                        repository,
                        objectType: type,
                        branch: branch ? branch : 'HEAD',
                        path,
                    })}>
                    {fileName}
                </Link>
            </div>
            <div className={Style.message}>{message}</div>
            <div className={Style.time}>{time}</div>
        </List.Item>
    );
}

function getFileNameFromPath(path: string): string
{
    const pathSplit = path.split('/');
    return pathSplit[pathSplit.length - 1];
}

export default withRouter(React.memo(Item));