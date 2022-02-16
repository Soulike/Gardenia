import React, {PureComponent} from 'react';
import View from '../../../../../../Component/CommentPoster';
import {TextAreaProps} from 'antd/lib/input';
import {TabsProps} from 'antd/lib/tabs';
import {ButtonProps} from 'antd/lib/button';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import {notification} from 'antd';
import {PullRequest as PullRequestApi} from '../../../../../../../../Api';

import {PullRequest} from '../../../../../../../../Class';
import {ERROR_MESSAGE, Function as ValidatorFunction} from '../../../../../../../../Validator';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryPullRequest>
{
    pullRequest: Pick<PullRequest, 'id'>,
    loading: boolean,
}

interface IState
{
    content: string;
    contentToPreview: string;
    submitting: boolean;
}

class CommentPoster extends PureComponent<IProps, IState>
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
            content: '',
            contentToPreview: '',
            submitting: false,
        };
    }

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
        const {content} = this.state;
        if (!ValidatorFunction.Repository.pullRequestComment(content))
        {
            notification.warn({message: ERROR_MESSAGE.Repository.PULL_REQUEST_COMMENT});
        }
        else
        {
            await this.setStatePromise({submitting: true});
            const {pullRequest: {id}} = this.props;
            const result = await PullRequestApi.addComment({
                content,
                belongsTo: id!,
            });
            if (result !== null)
            {
                notification.success({message: '提交评论成功'});
                setTimeout(() =>
                {
                    window.location.reload();
                }, 1000);
            }
            await this.setStatePromise({submitting: false});
        }
    };

    render()
    {
        const {content, contentToPreview, submitting} = this.state;
        return (<View placeholder={'评论'}
                      buttonText={'提交'}
                      content={content}
                      contentToPreview={contentToPreview}
                      submitting={submitting}
                      onTabChange={this.onTabChange}
                      onSubmitButtonClick={this.onSubmitButtonClick}
                      onContentChange={this.onContentChange} />);
    }
}

export default withRouter(CommentPoster);