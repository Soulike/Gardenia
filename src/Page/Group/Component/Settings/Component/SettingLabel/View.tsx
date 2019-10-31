import React, {ReactNode} from 'react';
import Style from './Style.module.scss';

interface IProps
{
    children: ReactNode
}

function SettingLabel(props: IProps)
{
    const {children} = props;
    return (
        <div className={Style.SettingLabel}>
            {children}
        </div>
    );
}

export default React.memo(SettingLabel);