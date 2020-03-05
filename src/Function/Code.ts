import {hljs} from '../Singleton';
import {ICompiledMode} from 'highlight.js';

export function getHighlightedCodeLines(code: string): string[]
{
    const {language} = hljs.highlightAuto(code);
    const codeLines: string[] = code.split('\n');
    let lastTop: ICompiledMode | undefined = undefined;
    return codeLines.map((codeline) =>
    {
        const {top, value} = hljs.highlight(language ? language : 'plaintext', codeline, true, lastTop);
        lastTop = top;
        return value;
    });
}