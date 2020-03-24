import React from 'react';
import Style from './Style.module.scss';
import DevelopingSign from '../../../../../../Component/DevelopingSign';

interface IProps
{

}

function Repositories(props: IProps)
{
    return (
        <div className={Style.Repositories}>
            <DevelopingSign />
        </div>
    );
}

export default React.memo(Repositories);