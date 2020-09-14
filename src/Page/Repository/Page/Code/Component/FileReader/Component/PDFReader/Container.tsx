import React, {HTMLAttributes, useState} from 'react';
import View from './View';
import {Props as DocumentProps} from 'react-pdf/dist/Document';

interface IProps
{
    pdf: Blob,
}

function PDFReader(props: IProps)
{
    const {pdf} = props;
    const [pageAmount, setPageAmount] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    const onPDFLoadSuccess: DocumentProps['onLoadSuccess'] = pdf =>
    {
        const {numPages} = pdf;
        setPageAmount(numPages);
    };

    const toPreviousPage: HTMLAttributes<HTMLButtonElement>['onClick'] = () =>
    {
        setPageNumber(pageNumber - 1);
    };

    const toNextPage: HTMLAttributes<HTMLButtonElement>['onClick'] = () =>
    {
        setPageNumber(pageNumber + 1);
    };

    return (<View pageNumber={pageNumber}
                  pdfURL={URL.createObjectURL(pdf)}
                  pageAmount={pageAmount}
                  toNextPage={toNextPage}
                  toPreviousPage={toPreviousPage}
                  onPDFLoadSuccess={onPDFLoadSuccess} />);
}

export default React.memo(PDFReader);