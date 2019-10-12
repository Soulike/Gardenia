import React from 'react';
import Style from './Style.module.scss';
import {Spin} from 'antd';

interface Props
{
    exists: boolean,
    html: string,
    loading: boolean,
}

function ReadmeView(props: Props)
{
    const {html, exists, loading} = props;
    return exists ?
        (<div className={Style.Readme}>
            <Spin spinning={loading}>
                <div className={Style.title}>README.md</div>
                <div className={Style.content} dangerouslySetInnerHTML={{__html: html}} />
            </Spin>
        </div>) :
        null;
}

export default React.memo(ReadmeView);