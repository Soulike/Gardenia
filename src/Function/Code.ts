import {setImmediatePromise} from './Util';

export async function getHighlightedCodeLines(code: string): Promise<string[]>
{
    const {default: hljs} = await import('../Singleton/hljs');
    // 任务拆分，防止长时间阻塞页面
    await setImmediatePromise();
    const codeLines: string[] = code.split('\n');
    await setImmediatePromise();
    const {language} = hljs.highlightAuto(codeLines.slice(0, 250).join('\n'));    // 只取部分内容判定语言
    await setImmediatePromise();
    const highlightedCodeLines: string[] = [];
    for (const codeLine of codeLines)
    {
        await setImmediatePromise();
        const {value} = hljs.highlight(codeLine, {language: language ? language : 'plaintext', ignoreIllegals: true});
        highlightedCodeLines.push(value);
    }
    return highlightedCodeLines;
}