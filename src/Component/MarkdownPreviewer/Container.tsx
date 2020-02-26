import React, {PureComponent} from 'react';
import View from '../HTMLPreviewer';
import hljs from 'highlight.js';
import {mdConverter} from '../../Singleton';

interface IProps
{
    markdown: string;
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

    componentDidMount()
    {
        this.processMarkdown();
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {markdown} = this.props;
        const {markdown: prevMarkdown} = prevProps;
        if (markdown !== prevMarkdown)
        {
            this.processMarkdown();
        }
    }

    processMarkdown = () =>
    {
        const {markdown} = this.props;
        this.setState({processing: true});
        const html = mdConverter.makeHtml(markdown);
        const node = document.createElement('div');
        node.innerHTML = html;
        node.querySelectorAll('pre code')
            .forEach(block => hljs.highlightBlock(block));
        this.setState({html: node.innerHTML, processing: false});
    };

    render()
    {
        const {html, processing} = this.state;
        return (<View html={html} processing={processing} />);
    }
}

export default MarkdownPreviewer;