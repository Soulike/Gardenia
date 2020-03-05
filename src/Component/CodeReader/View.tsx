import React from 'react';
import Style from './Style.module.scss';

interface IProps
{
    code: string;
}

function CodeReader(props: IProps)
{
    const {code} = props;
    const codeLines = code.split('\n');

    return (
        <table className={Style.CodeReader}>
            <tbody>
            {
                codeLines.map((codeline, i) => (
                    <tr key={i} className={Style.line}>
                        <td>
                            <div className={Style.lineNumber}>{i + 1}</div>
                        </td>
                        <td>
                            <pre className={Style.code}><code>{codeline}</code></pre>
                        </td>
                    </tr>))
            }
            </tbody>
        </table>
    );
}

export default React.memo(CodeReader);