import React, {HTMLAttributes, PureComponent} from 'react';
import View from './View';
import {promisify} from 'util';
import {Code} from '../../Function';

interface IProps
{
    hasLineNumber: boolean;
    code: string;
    hasComment: boolean,
    onCodeLineClickFactory?: (lineNumber: number) => HTMLAttributes<HTMLTableRowElement>['onClick'];
    hasCommentLineNumbers?: number[];   // 需要显示批注图标行的行数
}

interface IState
{
    highlightedCodeLines: string[];
    processing: boolean;
}

class CodeReader extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            highlightedCodeLines: [],
            processing: false,
        };
    }

    async componentDidMount()
    {
        const {code} = this.props;
        await this.setStatePromise({processing: true});
        const highlightedCodeLines = await Code.getHighlightedCodeLines(code);
        await this.setStatePromise({highlightedCodeLines, processing: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {code} = this.props;
        const {code: prevCode} = prevProps;
        if (code !== prevCode)
        {
            await this.componentDidMount();
        }
    }

    render()
    {
        const {hasLineNumber, hasComment, onCodeLineClickFactory, hasCommentLineNumbers} = this.props;
        const {highlightedCodeLines, processing} = this.state;
        return (<View processing={processing} hasLineNumber={hasLineNumber}
                      hasComment={hasComment}
                      onCodeLineClickFactory={onCodeLineClickFactory}
                      hasCommentLineNumbers={hasCommentLineNumbers}
                      highlightedCodeLines={highlightedCodeLines} />);
    }

}

export default CodeReader;