import React, {useEffect, useState} from 'react';
import View from '../HTMLPreviewer';
import mdConverter from '../../Singleton/mdConverter';
import {Util} from '../../Function';

interface IProps
{
    readonly markdown: string;
    readonly processHTML?: (html: string) => string | Promise<string>;
    readonly loading: boolean;
}

function MarkdownPreviewer(props: IProps)
{
    const [html, setHtml] = useState('');   // 当前被显示的 HTML
    const [nextHtml, setNextHtml] = useState('');   // markdown 发生变化后的新 HTML
    const [processing, setProcessing] = useState(false);

    const {markdown, processHTML, loading} = props;

    useEffect(() =>
    {
        setProcessing(true);
        setNextHtml(mdConverter.makeHtml(markdown));
        setProcessing(false);
    }, [markdown]);

    useEffect(() =>
    {
        const getProcessedHTML = async (html: string) =>
        {
            const {default: hljs} = await import('../../Singleton/hljs');
            let processedHTML = html;

            // 调用外层处理 HTML 函数
            if (processHTML && !loading)    // 这里要确保外层组件需要的信息都加载完成再调用 processHTML
            {
                processedHTML = await processHTML(html);
            }

            // 处理 HTML 里面的代码块
            const node = document.createElement('div');
            node.innerHTML = processedHTML;
            const pres = Array.from(node.getElementsByTagName('pre'));
            await Promise.all(pres.map(async pre =>
                {
                    // 任务拆分，防止长时间阻塞页面
                    const codes = Array.from(pre.getElementsByTagName('code'));
                    await Promise.all(codes.map(async code =>
                    {
                        hljs.highlightBlock(code);
                        await Util.setImmediatePromise();
                    }));
                    await Util.setImmediatePromise();
                },
            ));
            processedHTML = node.innerHTML;
            return processedHTML;
        };

        setProcessing(true);
        getProcessedHTML(nextHtml)
            .then(processedHTML => setHtml(processedHTML))
            .finally(() => setProcessing(false));

    }, [loading, processHTML, nextHtml]);

    return (<View html={html} processing={processing || loading} />);
}

export default React.memo(MarkdownPreviewer);