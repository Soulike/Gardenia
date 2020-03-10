import React from 'react';
import Style from './Style.module.scss';
import RepositoryMarkdownPreviewer from '../../../RepositoryMarkdownPreviewer';

interface IProps
{
    markdown: string;
}

function MarkdownReader(props: IProps)
{
    const {markdown} = props;
    return (
        <div className={Style.MarkdownReader}>
            <RepositoryMarkdownPreviewer markdown={markdown} />
        </div>
    );
}

export default React.memo(MarkdownReader);