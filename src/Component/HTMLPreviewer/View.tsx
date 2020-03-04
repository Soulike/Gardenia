import React from 'react';
import Style from './Style.module.scss';
import {Empty, Spin} from 'antd';

interface IProps
{
    html: string;
    processing: boolean;
}

function HTMLPreviewer(props: IProps)
{
    const {html, processing} = props;
    return (
        <div className={Style.HTMLPreviewer}>
            <Spin spinning={processing}>
                {
                    html.length === 0 ? (<Empty description={'没有可预览的内容'} />) :
                        (<div className={Style.preview}
                              dangerouslySetInnerHTML={{__html: html}} />)
                }
            </Spin>
        </div>
    );
}

export default React.memo(HTMLPreviewer);