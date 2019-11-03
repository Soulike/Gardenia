import React from 'react';
import Item from '../Item';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    onButtonClick: ButtonProps['onClick']
}

function DeleteRepositoryItemView(props: Readonly<IProps>)
{
    const {onButtonClick} = props;
    return (<Item title={'删除仓库'} description={'删除仓库的操作不可恢复，请慎重。'} onButtonClick={onButtonClick} />);
}

export default React.memo(DeleteRepositoryItemView);