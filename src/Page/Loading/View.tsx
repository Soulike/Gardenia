import React from 'react';
import Style from './Style.module.scss';


function Loading()
{
    return (
        <div className={Style.Loading}>

        </div>
    );
}

export default React.memo(Loading);