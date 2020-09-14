import React, {HTMLAttributes, PureComponent} from 'react';
import View from './View';
import {promisify} from 'util';
import {Code, File} from '../../Function';

interface IProps
{
    hasLineNumber: boolean;
    fileContent: Blob;
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
        const {fileContent} = this.props;
        await this.setStatePromise({processing: true});
        const code = await File.transformBlobToString(fileContent);
        const highlightedCodeLines = await Code.getHighlightedCodeLines(code);
        await this.setStatePromise({highlightedCodeLines, processing: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {fileContent} = this.props;
        const {fileContent: prevFileContent} = prevProps;
        if (fileContent !== prevFileContent)
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