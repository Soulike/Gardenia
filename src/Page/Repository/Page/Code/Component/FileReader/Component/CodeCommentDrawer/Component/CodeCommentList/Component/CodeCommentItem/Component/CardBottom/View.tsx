import React from 'react';
import Style from './Style.module.scss';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import {Button, Popconfirm} from 'antd';

interface IProps
{
    onDeleteButtonClick: PopconfirmProps['onConfirm'];
    loading: boolean;
}

function CardBottom(props: IProps)
{
    const {onDeleteButtonClick, loading} = props;
    return (
        <div className={Style.CardBottom}>
            <div className={Style.buttonWrapper}>
                <Popconfirm title={'确认删除代码标注？'}
                            placement={'topLeft'}
                            onConfirm={onDeleteButtonClick}
                            disabled={loading}>
                    <Button size={'small'} type={'danger'} disabled={loading} loading={loading}>删除</Button>
                </Popconfirm>
            </div>
        </div>
    );
}

export default React.memo(CardBottom);