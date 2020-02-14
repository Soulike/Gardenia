import React from 'react';
import Style from './Style.module.scss';
import Line from './Component/Line';

interface IProps
{
    code: string;
    prevStartLineNumber: number;
    afterStartLineNumber: number;
}

function Code(props: IProps)
{
    const {code, prevStartLineNumber, afterStartLineNumber} = props;
    const codeLines = splitToLines(code);
    let currentPrevLineNumber = prevStartLineNumber;
    let currentAfterLineNumber = afterStartLineNumber;
    return (
        <table className={Style.Code}>
            <tbody>
            {
                codeLines.map((rawLine, i) =>
                {
                    const sign = rawLine.slice(0, 1);
                    const code = rawLine.slice(1);
                    const line = `${sign} ${code}`;
                    let node = <Line codeLine={line} key={i} />;
                    if (sign === ' ')
                    {
                        node = <Line codeLine={line}
                                     key={i}
                                     prevLineNumber={currentPrevLineNumber}
                                     afterLineNumber={currentAfterLineNumber} />;
                        currentPrevLineNumber++;
                        currentAfterLineNumber++;
                    }
                    else if (sign === '+')
                    {
                        node = <Line codeLine={line}
                                     key={i}
                                     afterLineNumber={currentAfterLineNumber} />;
                        currentAfterLineNumber++;
                    }
                    else if (sign === '-')
                    {
                        node = <Line codeLine={line}
                                     key={i}
                                     prevLineNumber={currentPrevLineNumber} />;
                        currentPrevLineNumber++;
                    }
                    return node;
                })
            }
            </tbody>
        </table>
    );
}

function splitToLines(string: string)
{
    return string.split('\n').filter(line => line.length > 0);
}

export default React.memo(Code);