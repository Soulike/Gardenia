import React from 'react';
import Style from './Style.module.scss';
import {Spin} from 'antd';

interface IProps
{
    url: string,
    loading: boolean,
}

function ImageViewer(props: IProps)
{
    const {url, loading} = props;
    return (
        <div className={Style.ImageViewer}>
            <Spin spinning={loading}>
                <img src={url} alt={'file preview'} className={Style.image} />
            </Spin>
        </div>);
}

export default React.memo(ImageViewer);