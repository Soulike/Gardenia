import React from 'react';
import Style from './Style.module.scss';
import logo from '../../../../Static/logo.svg';
import * as CONFIG from '../../../../CONFIG';

function Logo()
{
    return (
        <div className={Style.Logo}>
            <div className={Style.logoWrapper}>
                <img src={logo} alt={'icon'} className={Style.logo} />
            </div>
            <span className={Style.title}>{CONFIG.NAME}</span>
        </div>
    );
}

export default React.memo(Logo);