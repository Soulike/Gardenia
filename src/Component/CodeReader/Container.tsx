import React, {HTMLAttributes, useEffect, useState} from 'react';
import View from './View';
import {Code, File} from '../../Function';

interface IProps
{
    readonly hasLineNumber: boolean;
    readonly fileContent: Blob;
    readonly hasComment: boolean,
    readonly onCodeLineClickFactory?: (lineNumber: number) => HTMLAttributes<HTMLTableRowElement>['onClick'];
    readonly hasCommentLineNumbers?: number[];   // 需要显示批注图标行的行数
}

function CodeReader(props: IProps)
{
    const {fileContent, hasLineNumber, hasComment, onCodeLineClickFactory, hasCommentLineNumbers} = props;

    const [highlightedCodeLines, setHighlightedCodeLines] = useState<string[]>([]);
    const [processing, setProcessing] = useState(false);

    useEffect(() =>
    {
        setProcessing(true);
        File.transformBlobToString(fileContent)
            .then(code => Code.getHighlightedCodeLines(code))
            .then(highlightedCodeLines => setHighlightedCodeLines(highlightedCodeLines))
            .finally(() => setProcessing(false));
    }, [fileContent]);

    return (<View processing={processing} hasLineNumber={hasLineNumber}
                  hasComment={hasComment}
                  onCodeLineClickFactory={onCodeLineClickFactory}
                  hasCommentLineNumbers={hasCommentLineNumbers}
                  highlightedCodeLines={highlightedCodeLines} />);
}

export default React.memo(CodeReader);