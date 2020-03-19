import React from 'react';
import Style from './Style.module.scss';

export interface IConflictProps
{

}

function Conflict(props: IConflictProps)
{
    return (
        <div className={Style.Conflict}>

        </div>
    );
}

export default React.memo(Conflict);