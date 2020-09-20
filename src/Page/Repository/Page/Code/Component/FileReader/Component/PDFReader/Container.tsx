import React, {useEffect, useState} from 'react';
import View from './View';
import {Props as DocumentProps} from 'react-pdf/dist/Document';
import {PaginationProps} from 'antd/lib/pagination';

interface IProps
{
    fileContent: Blob,
}

function PDFReader(props: IProps)
{
    const {fileContent} = props;
    const [pageAmount, setPageAmount] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfURL, setPdfURL] = useState('');

    useEffect(() =>
    {
        setPdfURL(URL.createObjectURL(fileContent));
    }, [fileContent]);

    useEffect(() =>
    {
        return () => URL.revokeObjectURL(pdfURL);
    }, [pdfURL]);

    const onPDFLoadSuccess: DocumentProps['onLoadSuccess'] = pdf =>
    {
        const {numPages} = pdf;
        setPageAmount(numPages);
    };

    const onPaginationChange: PaginationProps['onChange'] = page =>
    {
        setPageNumber(page);
    };

    return (<View pageNumber={pageNumber}
                  pdfURL={pdfURL}
                  pageAmount={pageAmount}
                  onPaginationChange={onPaginationChange}
                  onPDFLoadSuccess={onPDFLoadSuccess} />);
}

export default React.memo(PDFReader);