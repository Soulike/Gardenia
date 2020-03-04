import React from 'react';
import Style from './Style.module.scss';
import MarkdownPreviewer from '../../../../../../../../Component/MarkdownPreviewer';
import {Spin} from 'antd';

interface IProps
{
    exists: boolean,
    readme: string,
    loading: boolean;
}

function ReadmeView(props: Readonly<IProps>)
{
    const {readme, exists, loading} = props;
    return exists ?
        (<div className={Style.Readme}>
            <Spin spinning={loading}>
                <div className={Style.title}>README.md</div>
                <div className={Style.contentWrapper}>
                    <MarkdownPreviewer markdown={readme} />
                </div>
            </Spin>
        </div>) :
        null;
}

export default React.memo(ReadmeView);