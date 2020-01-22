import React, {ReactNode} from 'react';
import Style from './Style.module.scss';

interface IProps
{
    children?: ReactNode,
    required?: boolean,
}

function InputLabel(props: Readonly<IProps>)
{
    const {children, required} = props;
    return (
        <div className={Style.InputLabel}>
            {children}
            <span className={Style.requiredSign}>{required ? ' *' : ''}</span>
        </div>
    );
}

export default React.memo(InputLabel);