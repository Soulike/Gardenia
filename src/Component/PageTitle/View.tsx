import React, {ReactNode} from 'react';
import Style from './Style.module.scss';

interface IProps
{
    children?: ReactNode
}

function PageTitle(props: IProps)
{
    const {children} = props;
    return (<h1 className={Style.PageTitle}>{children}</h1>);
}

export default PageTitle;