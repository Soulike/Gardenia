import React from 'react';
import Style from './Style.module.scss';
import Line from './Component/Line';
import {Spin} from 'antd';

interface IProps
{
    codeLines: string[];
    highlightedCodeLines: string[];
    prevStartLineNumber: number;
    afterStartLineNumber: number;
    processing: boolean,
}

function Code(props: IProps)
{
    const {highlightedCodeLines, codeLines, prevStartLineNumber, afterStartLineNumber, processing} = props;
    let currentPrevLineNumber = prevStartLineNumber;
    let currentAfterLineNumber = afterStartLineNumber;
    return (
        <Spin spinning={processing}>
            <table className={`${Style.Code} hljs`}>
                <tbody>
                {
                    codeLines.map((rawLine, i) =>
                    {
                        const sign = rawLine.slice(0, 1);
                        const code = highlightedCodeLines[i];
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
        </Spin>
    );
}

export default React.memo(Code);