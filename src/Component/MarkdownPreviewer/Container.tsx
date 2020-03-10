import React, {PureComponent} from 'react';
import View from '../HTMLPreviewer';
import {hljs, mdConverter} from '../../Singleton';

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
        return new Promise(resolve =>
        {
            const {markdown} = this.props;
            const html = mdConverter.makeHtml(markdown);
            this.setState({html}, () => resolve());
        });
    };

    processHTML = async () =>
    {
        return new Promise(async resolve =>
        {
            const {processHTML, loading} = this.props;
            if (processHTML && !loading)    // 这里要确保外层组件需要的信息都加载完成再调用 processHTML
            {
                const {html} = this.state;
                const newHTML = await processHTML(html);
                this.setState({html: newHTML}, () => resolve());
            }
            else
            {
                resolve();
            }
        });
    };

    processCodes = async () =>
    {
        return new Promise(resolve =>
        {
            const {html} = this.state;
            const node = document.createElement('div');
            node.innerHTML = html;
            node.querySelectorAll('pre code')
                .forEach(block => hljs.highlightBlock(block));
            this.setState({html: node.innerHTML}, () => resolve());
        });
    };

    render()
    {
        const {html, processing} = this.state;
        const {loading} = this.props;
        return (<View html={html} processing={processing || loading} />);
    }
}

export default MarkdownPreviewer;