import React, {PureComponent} from 'react';
import View from '../../../../Component/TopicPoster';
import {InputProps, TextAreaProps} from 'antd/lib/input';
import {TabsProps} from 'antd/lib/tabs';
import {ButtonProps} from 'antd/lib/button';
import {PullRequest} from '../../../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {notification} from 'antd';
import {ERROR_MESSAGE, Function as ValidatorFunction} from '../../../../../../Validator';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare> {}

interface IState
{
    title: string;
    content: string;
    contentToPreview: string;
    submitting: boolean;
}

class PullRequestPoster extends PureComponent<IProps, IState>
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
        if (!ValidatorFunction.Repository.pullRequestTitle(title))
        {
            notification.warn({message: ERROR_MESSAGE.Repository.PULL_REQUEST_TITLE});
        }
        else
        {
            const {
                history,
                match: {
                    params: {
                        sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                        repository: targetRepositoryName, username: targetRepositoryUsername, targetRepositoryBranch,
                    },
                },
            } = this.props;
            this.setState({submitting: true});
            const result = await PullRequest.add({
                title,
                content,
                sourceRepositoryUsername,
                sourceRepositoryName,
                sourceRepositoryBranchName: sourceRepositoryBranch,
                targetRepositoryUsername,
                targetRepositoryName,
                targetRepositoryBranchName: targetRepositoryBranch,
            });
            if (result !== null)
            {
                notification.success({message: '创建 Pull Request 成功'});
                return history.replace(RouterFunction.generateRepositoryPullRequestsRoute({
                    username: targetRepositoryUsername,
                    repository: targetRepositoryName,
                }));
            }
            this.setState({submitting: false});
        }
    };

    render()
    {
        const {title, content, contentToPreview, submitting} = this.state;
        return (<View title={title}
                      content={content}
                      contentToPreview={contentToPreview}
                      onTitleChange={this.onTitleChange}
                      onContentChange={this.onContentChange}
                      onTabChange={this.onTabChange}
                      submitting={submitting}
                      onSubmitButtonClick={this.onSubmitButtonClick} buttonText={'创建 Pull Request'} />);
    }
}

export default withRouter(PullRequestPoster);