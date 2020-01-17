import React, {ReactNode} from 'react';
import Style from './Style.module.scss';
import ItemMenu from './Component/ItemMenu';

interface IProps
{
    children: ReactNode
}

function SettingView(props: IProps)
{
    const {children} = props;
    return (
        <div className={Style.Setting}>
            <div className={Style.menuWrapper}>
                <ItemMenu />
            </div>
            <div className={Style.childrenWrapper}>
                {children}
            </div>
        </div>
    );
}

export default React.memo(SettingView);