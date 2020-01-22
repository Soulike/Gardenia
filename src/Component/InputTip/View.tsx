import React, {ReactNode} from 'react';
import Style from './Style.module.scss';

interface IProps
{
    children?: ReactNode
}

function InputTip(props: IProps)
{
    const {children} = props;
    return (<div className={Style.InputTip}>{children}</div>);
}

export default React.memo(InputTip);