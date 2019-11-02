import React from 'react';
import {List} from 'antd';
import DeleteRepositoryItem from './Component/DeleteRepositoryItem';
import TransferOwnershipItem from './Component/TransferOwnershipItem';

function DangerZoneList()
{
    return (
        <List bordered={true} split={true}>
            <TransferOwnershipItem />
            <DeleteRepositoryItem />
        </List>
    );
}

export default React.memo(DangerZoneList);