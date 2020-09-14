import React, {HTMLAttributes} from 'react';
import {Document, Page} from 'react-pdf';
import {Props as DocumentProps} from 'react-pdf/dist/Document';
import Style from './Style.module.scss';

interface IProps
{
    pdfURL: string,
    pageAmount: number,
    pageNumber: number,
    onPDFLoadSuccess: DocumentProps['onLoadSuccess'],
    toPreviousPage: HTMLAttributes<HTMLButtonElement>['onClick'],
    toNextPage: HTMLAttributes<HTMLButtonElement>['onClick'],
}

function PDFReader(props: IProps)
{
    const {pdfURL, pageNumber, onPDFLoadSuccess, pageAmount, toNextPage, toPreviousPage} = props;
    return (
        <div className={Style.PDFReader}>
            <Document
                file={pdfURL}
                onLoadSuccess={onPDFLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <div className={Style.control}>
                <p>
                    Page {pageNumber || (pageAmount ? 1 : '--')} of {pageAmount || '--'}
                </p>
                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={toPreviousPage}
                >
                    上一页
                </button>
                <button
                    type="button"
                    disabled={pageNumber >= pageAmount}
                    onClick={toNextPage}
                >
                    下一页
                </button>
            </div>
        </div>
    );
}

export default React.memo(PDFReader);