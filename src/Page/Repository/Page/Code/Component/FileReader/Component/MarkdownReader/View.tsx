import React from 'react';
import Style from './Style.module.scss';
import RepositoryMarkdownPreviewer from '../../../RepositoryMarkdownPreviewer';
import {Spin} from 'antd';

interface IProps
{
    markdown: string;
    loading: boolean;
}

function MarkdownReader(props: IProps)
{
    const {markdown, loading} = props;
    return (
        <div className={Style.MarkdownReader}>
            <Spin spinning={loading}>
                <RepositoryMarkdownPreviewer markdown={markdown} />
            </Spin>
        </div>
    );
}

export default React.memo(MarkdownReader);