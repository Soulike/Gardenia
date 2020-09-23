import React from 'react';
import {Document, Page} from '../../../../../../../../Component/react-pdf';
import {Props as DocumentProps} from 'react-pdf/dist/Document';
import Style from './Style.module.scss';
import {Pagination, Spin} from 'antd';
import {PaginationProps} from 'antd/lib/pagination';

interface IProps
{
    pdfURL: string,
    pageAmount: number,
    pageNumber: number,
    onPDFLoadSuccess: DocumentProps['onLoadSuccess'],
    onPaginationChange: PaginationProps['onChange'];
}

function PDFReader(props: IProps)
{
    const {pdfURL, pageNumber, onPDFLoadSuccess, pageAmount, onPaginationChange} = props;
    return (
        <div className={Style.PDFReader}>
            <Document
                file={pdfURL}
                loading={<Spin spinning={true} />}
                error={<Spin spinning={true} />}
                onLoadSuccess={onPDFLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <div className={Style.control}>
                <Pagination pageSize={1}
                            showSizeChanger={false}
                            showQuickJumper={true}
                            current={pageNumber}
                            total={pageAmount}
                            onChange={onPaginationChange} />
            </div>
        </div>
    );
}

export default React.memo(PDFReader);