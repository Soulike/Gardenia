import React from 'react';
import Style from './Style.module.scss';
import {Code} from '../../Function';

interface IProps
{
    code: string;
}

function CodeReader(props: IProps)
{
    const {code} = props;
    const highlightedCodeLines = Code.getHighlightedCodeLines(code);

    return (
        <table className={Style.CodeReader}>
            <tbody>
            {
                highlightedCodeLines.map((codeline, i) => (
                    <tr key={i} className={Style.line}>
                        <td>
                            <div className={Style.lineNumber}>{i + 1}</div>
                        </td>
                        <td>
                            <pre className={Style.code}>
                                <code dangerouslySetInnerHTML={{__html: codeline}} />
                            </pre>
                        </td>
                    </tr>))
            }
            </tbody>
        </table>
    );
}

export default React.memo(CodeReader);