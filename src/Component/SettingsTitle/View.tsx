import React, {ReactNode} from 'react';
import Style from './Style.module.scss';

interface Props
{
    children: ReactNode
}

function SettingsTitle(props: Props)
{
    const {children} = props;
    return (
        <h2 className={Style.SettingsTitle}>
            {children}
        </h2>
    );
}

export default React.memo(SettingsTitle);