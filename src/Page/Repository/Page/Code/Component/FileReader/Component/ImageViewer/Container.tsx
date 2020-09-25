import React, {useEffect, useState} from 'react';
import View from './View';

interface IProps
{
    fileContent: Blob;
    loading: boolean,
}

function ImageViewer(props: IProps)
{
    const [url, setUrl] = useState('');
    const {fileContent, loading} = props;

    useEffect(() =>
    {
        const url = URL.createObjectURL(fileContent);
        setUrl(url);
        return () => URL.revokeObjectURL(url);
    }, [fileContent]);

    return (<View url={url} loading={loading} />);
}

export default React.memo(ImageViewer);