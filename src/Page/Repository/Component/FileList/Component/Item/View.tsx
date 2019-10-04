import React from 'react';
import {Icon, List} from 'antd';
import {ObjectType} from '../../../../../../CONSTANT';
import {Commit} from '../../../../../../Class';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import Style from './Style.module.scss';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';

interface Props extends RouteComponentProps<RouterInterface.Repository>
{
    fileInfo: { type: ObjectType, path: string, commit: Commit }
}

function Item(props: Props)
{
    const {fileInfo: {type, path, commit: {message, time}}, match: {params: {username, repository, branch}}} = props;
    const pathSplit = path.split('/');
    const fileName = pathSplit[pathSplit.length - 1];
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

export default withRouter(React.memo(Item));