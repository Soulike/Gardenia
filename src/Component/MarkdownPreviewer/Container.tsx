import React, {PureComponent} from 'react';
import View from '../HTMLPreviewer';
import {hljs, mdConverter} from '../../Singleton';
import {promisify} from 'util';
import {setImmediatePromise} from '../../Function/Util';

interface IProps
{
    markdown: string;
    processHTML?: (html: string) => string | Promise<string>;
    loading: boolean;
}

interface IState
{
    html: string;
    processing: boolean;
}

class MarkdownPreviewer extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            html: '',
            processing: false,
        };
    }

    async componentDidMount()
    {
        this.setState({processing: true});
        await this.markdownToHTML();
        await this.processHTML();
        await this.processCodes();
        this.setState({processing: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {markdown, loading} = this.props;
        const {markdown: prevMarkdown, loading: prevLoading} = prevProps;
        if (markdown !== prevMarkdown)
        {
            await this.componentDidMount();
        }
        else if (loading !== prevLoading)
        {
            this.setState({processing: true});
            await this.processHTML();
            this.setState({processing: false});
        }
    }

    markdownToHTML = async () =>
    {
        const {markdown} = this.props;
        const html = mdConverter.makeHtml(markdown);
        await this.setStatePromise({html});
    };

    processHTML = async () =>
    {
        const {processHTML, loading} = this.props;
        if (processHTML && !loading)    // 这里要确保外层组件需要的信息都加载完成再调用 processHTML
        {
            const {html} = this.state;
            const newHTML = await processHTML(html);
            await this.setStatePromise({html: newHTML});
        }
    };

    processCodes = async () =>
    {
        const {html} = this.state;
        const node = document.createElement('div');
        node.innerHTML = html;
        const pres = Array.from(node.getElementsByTagName('pre'));
        await Promise.all(pres.map(async pre =>
            {
                // 任务拆分，防止长时间阻塞页面
                const codes = Array.from(pre.getElementsByTagName('code'));
                await Promise.all(codes.map(async code =>
                {
                    hljs.highlightBlock(code);
                    await setImmediatePromise();
                }));
                await setImmediatePromise();
            },
        ));
        await this.setStatePromise({html: node.innerHTML});
    };

    render()
    {
        const {html, processing} = this.state;
        const {loading} = this.props;
        return (<View html={html} processing={processing || loading} />);
    }
}

export default MarkdownPreviewer;