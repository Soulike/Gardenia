import React from 'react';
import Style from './Style.module.scss';

interface IProps
{

}

function Notifications(props: IProps)
{
    return (
        <div className={Style.Notifications}>

        </div>);
}

export default React.memo(Notifications);