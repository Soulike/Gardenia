import React, {useEffect, useState} from 'react';
import {File} from '../../../../../../../../Function';
import View from './View';

interface IProps
{
    fileContent: Blob;
}

function MarkdownReader(props: IProps)
{
    const [markdown, setMarkdown] = useState('');
    const [loading, setLoading] = useState(true);
    const {fileContent} = props;

    useEffect(() =>
    {
        const getMarkdown = async () =>
        {
            setMarkdown(await File.transformBlobToString(fileContent));
            setLoading(false);
        };

        getMarkdown()
            .then(() => setLoading(false));
        setLoading(true);
    }, [fileContent]);

    return (<View markdown={markdown} loading={loading} />);
}

export default React.memo(MarkdownReader);