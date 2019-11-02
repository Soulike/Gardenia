import React from 'react';
import Item from '../Item';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    onButtonClick: ButtonProps['onClick']
}

function TransferOwnershipItemView(props: IProps)
{
    const {onButtonClick} = props;
    return (<Item title={'转移仓库所有人'} description={'将仓库所有人转移为其他人。'} onButtonClick={onButtonClick} />);
}

export default React.memo(TransferOwnershipItemView);