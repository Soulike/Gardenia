import React from 'react';
import Style from './Style.module.scss';
import SettingsTitle from '../../../../../../Component/SettingsTitle';
import AddCollaborationButton from './Component/AddCollaborationButton';
import CollaboratorList from './Component/CollaboratorList';
import {Alert} from 'antd';

function Collaborators()
{
    return (
        <div className={Style.Collaborators}>
            <SettingsTitle>
                <div className={Style.title}>
                    合作者
                    <AddCollaborationButton />
                </div>
            </SettingsTitle>
            <div className={Style.alertWrapper}>
                <Alert type={'info'}
                       message={'仓库合作者可取得和创建者相同的仓库访问权限。'} showIcon={true} />
            </div>
            <CollaboratorList />
        </div>
    );
}

export default React.memo(Collaborators);