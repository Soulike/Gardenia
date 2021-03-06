import React, {PureComponent} from 'react';
import View from '../../../../Component/CommentPoster';
import {TextAreaProps} from 'antd/lib/input';
import {TabsProps} from 'antd/lib/tabs';
import {ButtonProps} from 'antd/lib/button';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../Router';
import {notification} from 'antd';
import {Issue as IssueApi} from '../../../../../../Api';
import {ERROR_MESSAGE, Function as ValidatorFunction} from '../../../../../../Validator';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../../../CONFIG';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryIssue> {}

interface IState
{
    content: string;
    contentToPreview: string;
    submitting: boolean;
}

class CommentPoster extends PureComponent<IProps, IState>
{
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
        if (!ValidatorFunction.Repository.issueComment(content))
        {
            notification.warn({message: ERROR_MESSAGE.Repository.ISSUE_COMMENT});
        }
        else
        {
            this.setState({submitting: true});
            const {match: {params: {username, repositoryName, no: noString}}, history} = this.props;
            const no = Number.parseInt(noString);
            if (Number.isNaN(no) || no <= 0)
            {
                return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
            }
            else
            {
                const result = await IssueApi.addComments({
                    repositoryUsername: username,
                    repositoryName, no,
                }, {content});
                if (result !== null)
                {
                    notification.success({message: '提交评论成功'});
                    setTimeout(() =>
                    {
                        window.location.reload();
                    }, 1000);
                }
            }
            this.setState({submitting: false});
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