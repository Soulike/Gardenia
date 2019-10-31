import React from 'react';
import Style from './Style.module.scss';

function RepositoriesView()
{
    return (
        <div className={Style.Repositories}>
            1
        </div>
    );
}

export default React.memo(RepositoriesView);