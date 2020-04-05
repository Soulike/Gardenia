import React from 'react';
import Style from './Style.module.scss';
import {Spin} from 'antd';
import RepositoryMarkdownPreviewer from '../../../RepositoryMarkdownPreviewer';
import {FileTextOutlined} from '@ant-design/icons';

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
                <div className={Style.titleWrapper}>
                    <FileTextOutlined />
                    <div className={Style.title}>README.md</div>
                </div>
                <div className={Style.contentWrapper}>
                    <RepositoryMarkdownPreviewer markdown={readme} />
                </div>
            </Spin>
        </div>) :
        null;
}

export default React.memo(ReadmeView);