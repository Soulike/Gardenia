import React, {PureComponent} from 'react';
import View from './View';
import {InputProps, TextAreaProps} from 'antd/lib/input';
import {TabsProps} from 'antd/lib/tabs';
import {ButtonProps} from 'antd/lib/button';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../Router';
import {notification} from 'antd';
import {Issue as IssueApi} from '../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCreateIssue> {}

interface IState
{
    title: string;
    content: string;
    contentToPreview: string;
    submitting: boolean;
}

class CreateIssue extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            title: '',
            content: '',
            contentToPreview: '',
            submitting: false,
        };
    }

    onTitleChange: InputProps['onChange'] = e =>
    {
        this.setState({title: e.target.value});
    };

    onContentChange: TextAreaProps['onChange'] = e =>
    {
        this.setState({content: e.target.value});
    };

    onTabChange: TabsProps['onChange'] = activeKey =>
    {
        if (activeKey === 'preview')
        {
            const {content} = this.state;
            this.setState({contentToPreview: content});
        }
    };

    onSubmitButtonClick: ButtonProps['onClick'] = async () =>
    {
        const {title, content} = this.state;
        if (title.length === 0)
        {
            notification.error({message: 'Issue 标题不能为空'});
        }
        else
        {
            this.setState({submitting: true});
            const {match: {params: {username, repository: name}}, history} = this.props;
            const result = await IssueApi.add({
                repositoryUsername: username,
                repositoryName: name, title,
            }, {content});
            if (result !== null)
            {
                notification.success({message: 'Issue 创建成功'});
                return history.replace(RouterFunction.generateRepositoryIssuesRoute({
                    username, repository: name,
                }));
            }
            this.setState({submitting: false});
        }
    };

    render()
    {
        const {title, content, contentToPreview, submitting} = this.state;
        return (<View title={title}
                      contentToPreview={contentToPreview}
                      submitting={submitting}
                      onTitleChange={this.onTitleChange}
                      onTabChange={this.onTabChange}
                      onSubmitButtonClick={this.onSubmitButtonClick}
                      onContentChange={this.onContentChange}
                      content={content} />);
    }
}

export default withRouter(CreateIssue);