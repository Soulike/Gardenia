import React from 'react';
import Style from './Style.module.scss';

function MenuDivider()
{
    return (<div className={Style.MenuDivider} />);
}

export default React.memo(MenuDivider);