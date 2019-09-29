import React from 'react';
import {Icon, List} from 'antd';
import {ObjectType} from '../../../../../../CONSTANT';
import {Commit} from '../../../../../../Class';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import Style from './Style.module.scss';

interface Props extends RouteComponentProps
{
    fileInfo: { type: ObjectType, path: string, commit: Commit }
}

function Item(props: Props)
{
    const {fileInfo: {type, path, commit: {message, time}}} = props;
    let {location: {pathname}} = props;
    const pathSplit = path.split('/');
    const fileName = pathSplit[pathSplit.length - 1];
    if (pathname[pathname.length - 1] === '/')
    {
        pathname = pathname.slice(0, -1);
    }
    return (
        <List.Item className={Style.Item}>
            {
                type === ObjectType.BLOB ?
                    <Icon className={Style.icon} type="file-text" /> :
                    <Icon className={Style.icon} type="folder" />
            }
            <div className={Style.fileName}>
                <Link to={type === ObjectType.BLOB ? `${pathname}/${fileName}` : `${pathname}/${fileName}/`}>
                    {fileName}
                </Link>
            </div>
            <div className={Style.message}>{message}</div>
            <div className={Style.time}>{time}</div>
        </List.Item>
    );
}

export default withRouter(React.memo(Item));