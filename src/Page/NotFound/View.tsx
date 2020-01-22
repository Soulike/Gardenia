import React from 'react';
import Style from './Style.module.scss';
import svg from '../../Static/404.svg';

function NotFound()
{
    return (
        <div className={Style.NotFound}>
            <img src={svg} alt="boom" className={Style.img} />
            <div className={Style.title}>404</div>
            <div className={Style.text}>请求的页面不存在</div>
        </div>
    );
}

export default React.memo(NotFound);