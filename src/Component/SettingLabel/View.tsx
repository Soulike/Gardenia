import React, {ReactNode} from 'react';
import Style from './Style.module.scss';

interface Props
{
    children: ReactNode
}

function SettingLabel(props: Props)
{
    const {children} = props;
    return (
        <div className={Style.SettingLabel}>
            {children}
        </div>
    );
}

export default React.memo(SettingLabel);