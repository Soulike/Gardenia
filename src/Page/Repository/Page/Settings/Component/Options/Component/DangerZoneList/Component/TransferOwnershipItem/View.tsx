import React from 'react';
import {ButtonProps} from 'antd/lib/button';
import DangerZoneItem from '../../../../../../../../../../Component/DangerZoneItem';

interface IProps
{
    onButtonClick: ButtonProps['onClick']
}

function TransferOwnershipItemView(props: Readonly<IProps>)
{
    const {onButtonClick} = props;
    return (<DangerZoneItem title={'转移仓库所有人'}
                            buttonText={'转移仓库所有人'}
                            description={'将仓库所有人转移为其他人。'}
                            onButtonClick={onButtonClick} />);
}

export default React.memo(TransferOwnershipItemView);