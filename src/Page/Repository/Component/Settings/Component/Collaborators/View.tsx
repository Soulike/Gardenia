import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../../Group/Component/Settings/Component/SettingsTitle';
import AddCollaborationButton from './Component/AddCollaborationButton';

interface IProps
{

}

function Collaborators(props: IProps)
{
    return (
        <div className={Style.Collaborators}>
            <SettingsTitle>
                <div className={Style.title}>
                    合作者
                    <AddCollaborationButton />
                </div>
            </SettingsTitle>
        </div>
    );
}

export default React.memo(Collaborators);