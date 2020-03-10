import React from 'react';
import Style from './Style.module.scss';
import {List} from 'antd';
import {Link} from 'react-router-dom';

interface IProps
{
    to: string,
}

function PreviousFolderItemView(props: Readonly<IProps>)
{
    const {to} = props;
    return (
        <List.Item className={Style.PreviousFolderItem}>
            <Link to={to} className={Style.link}>..</Link>
        </List.Item>
    );
}

export default React.memo(PreviousFolderItemView);