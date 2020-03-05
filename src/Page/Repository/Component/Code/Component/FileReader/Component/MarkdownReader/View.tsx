import React from 'react';
import Style from './Style.module.scss';
import MarkdownPreviewer from '../../../../../../../../Component/MarkdownPreviewer';

interface IProps
{
    markdown: string;
}

function MarkdownReader(props: IProps)
{
    const {markdown} = props;
    return (
        <div className={Style.MarkdownReader}>
            <MarkdownPreviewer markdown={markdown} />
        </div>
    );
}

export default React.memo(MarkdownReader);