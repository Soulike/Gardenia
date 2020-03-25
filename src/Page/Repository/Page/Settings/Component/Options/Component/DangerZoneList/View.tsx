import React from 'react';
import DeleteRepositoryItem from './Component/DeleteRepositoryItem';
import DangerZone from '../../../../../../../../Component/DangerZone';

function DangerZoneList()
{
    return (
        <DangerZone>
            <DeleteRepositoryItem />
        </DangerZone>
    );
}

export default React.memo(DangerZoneList);