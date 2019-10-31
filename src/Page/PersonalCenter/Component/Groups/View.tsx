import React from 'react';
import Style from './Style.module.scss';

function GroupsView()
{
    return (
        <div className={Style.Groups}>
            2
        </div>
    );
}

export default React.memo(GroupsView);