import React from 'react';
import Style from './Style.module.scss';

interface IProps
{
    codeLine: string;
    prevLineNumber?: number;
    afterLineNumber?: number;
}

function Line(props: IProps)
{
    const {codeLine, prevLineNumber, afterLineNumber} = props;
    const sign = codeLine.slice(0, 1);
    let codeWrapperStyle = Style.codeWrapper;
    let lineNumberStyle = Style.lineNumber;
    if (sign === ' ')
    {
        codeWrapperStyle = Style.codeWrapper;
        lineNumberStyle = Style.lineNumber;
    }
    else if (sign === '+')
    {
        codeWrapperStyle = `${Style.codeWrapper} ${Style.addition}`;
        lineNumberStyle = `${Style.lineNumber} ${Style.addition}`;
    }
    else if (sign === '-')
    {
        codeWrapperStyle = `${Style.codeWrapper} ${Style.deletion}`;
        lineNumberStyle = `${Style.lineNumber} ${Style.deletion}`;
    }
    return (
        <tr className={Style.Line}>
            <td className={lineNumberStyle}><code>{prevLineNumber !== undefined ? prevLineNumber : ''}</code></td>
            <td className={lineNumberStyle}><code>{afterLineNumber !== undefined ? afterLineNumber : ''}</code></td>
            <td className={codeWrapperStyle}>
                <pre className={Style.code}>{codeLine}</pre>
            </td>
        </tr>
    );
}

export default React.memo(Line);