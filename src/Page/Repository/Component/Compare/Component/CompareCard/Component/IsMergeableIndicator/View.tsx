import React from 'react';
import Style from './Style.module.scss';
import {Alert} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

interface IProps
{
    isMergeable: boolean;
    loading: boolean;
}

function IsMergeableIndicator(props: IProps)
{
    const {isMergeable, loading} = props;
    return (
        <div className={Style.IsMergeableIndicator}>
            {
                loading ? (
                        <Alert showIcon={true} icon={<LoadingOutlined />} type={'info'} message={'正在检查是否可自动合并'} />) :
                    isMergeable ? (<Alert showIcon={true} type={'success'} message={'可以自动合并'} />) :
                        (<Alert showIcon={true} type={'error'} message={'不能自动合并，但您仍可创建 Pull Request'} />)
            }
        </div>
    );
}

export default React.memo(IsMergeableIndicator);