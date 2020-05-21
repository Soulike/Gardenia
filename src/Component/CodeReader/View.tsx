import React, {HTMLAttributes} from 'react';
import Style from './Style.module.scss';
import {Code} from '../../Function';
import {CommentOutlined} from '@ant-design/icons';
import {Tooltip} from 'antd';

interface IProps
{
    hasLineNumber: boolean;
    code: string;
    hasComment: boolean,
    onCodeLineClickFactory?: (lineNumber: number) => HTMLAttributes<HTMLTableRowElement>['onClick'];
    hasCommentLineNumbers?: number[];   // 需要显示批注图标行的行数
}

function CodeReader(props: IProps)
{
    const {code, onCodeLineClickFactory, hasCommentLineNumbers, hasComment, hasLineNumber} = props;
    const highlightedCodeLines = Code.getHighlightedCodeLines(code);

    return (
        <table className={`${Style.CodeReader} hljs`}>
            <tbody>
            {
                highlightedCodeLines.map((codeline, i) =>
                {
                    const children = (
                        <tr key={i}
                            className={Style.line} style={hasComment ? {} : {cursor: 'auto'}}
                            onClick={typeof onCodeLineClickFactory === 'function' ? onCodeLineClickFactory(i + 1) : undefined}>
                            <td className={Style.commentIcon}>
                                {
                                    Array.isArray(hasCommentLineNumbers) ? (
                                        hasCommentLineNumbers.includes(i + 1) ? (
                                            <CommentOutlined />
                                        ) : null
                                    ) : null
                                }
                            </td>
                            {
                                hasLineNumber ? (
                                    <td>
                                        <code className={Style.lineNumber}>{i + 1}</code>
                                    </td>
                                ) : null
                            }
                            <td className={Style.codeWrapper}>
                            <pre className={Style.code}>
                                <code dangerouslySetInnerHTML={{__html: codeline}} />
                            </pre>
                            </td>
                        </tr>);

                    if (hasComment)
                    {
                        return (<Tooltip key={i} title={'点击查看和添加批注'} placement={'left'}>{children}</Tooltip>);
                    }
                    else
                    {
                        return children;
                    }
                })
            }
            </tbody>
        </table>
    );
}

export default React.memo(CodeReader);