import React from 'react';
import Style from './Style.module.scss';
import TypeMenu from './Component/TypeMenu';

function Search()
{
    return (
        <div className={Style.Search}>
            <div className={Style.left}>
                <TypeMenu />
            </div>
            <div className={Style.right}>

            </div>
        </div>
    );
}

export default React.memo(Search);