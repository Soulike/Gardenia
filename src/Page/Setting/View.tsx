import React, {ReactNode} from 'react';
import Style from './Style.module.scss';

interface IProps
{
    children: ReactNode
}

function SettingView(props: IProps)
{
    const {children} = props;
    return (
        <div className={Style.Setting}>
            {children}
        </div>
    );
}

export default React.memo(SettingView);