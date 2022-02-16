import React, {PureComponent} from 'react';
import View from './View';
import {Code as CodeFunction} from '../../../../../../../../../../Function';

interface IProps
{
    code: string;
    prevStartLineNumber: number;
    afterStartLineNumber: number;
}

interface IState
{
    codeLines: string[];
    highlightedCodeLines: string[];
    processing: boolean;
}

class Code extends PureComponent<IProps, IState>
{
    private setStatePromise = (state: any) =>
    {
        return new Promise<void>(resolve =>
        {
            this.setState(state, () =>
            {
                resolve();
            });
        });
    };

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            codeLines: [],
            highlightedCodeLines: [],
            processing: false,
        };
    }

    async componentDidMount()
    {
        const {code} = this.props;
        const codeLines = code.split('\n');
        const codeLinesWithoutSign = codeLines.map(line => line.slice(1));
        const codeWithoutSigns = codeLinesWithoutSign.join('\n');
        await this.setStatePromise({processing: true});
        const highlightedCodeLines = await CodeFunction.getHighlightedCodeLines(codeWithoutSigns);
        await this.setStatePromise({highlightedCodeLines, codeLines, processing: false});
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
        const {afterStartLineNumber, prevStartLineNumber} = this.props;
        const {codeLines, highlightedCodeLines, processing} = this.state;
        return (<View codeLines={codeLines}
                      processing={processing}
                      highlightedCodeLines={highlightedCodeLines}
                      afterStartLineNumber={afterStartLineNumber}
                      prevStartLineNumber={prevStartLineNumber} />);
    }
}

export default Code;