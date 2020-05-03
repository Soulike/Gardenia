import React, {HTMLAttributes, PureComponent} from 'react';
import View from './View';
import {TextAreaProps} from 'antd/lib/input';
import {promisify} from 'util';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../../../../../Router';
import {notification} from 'antd';
import {CodeComment as CodeCommentApi} from '../../../../../../../../../../Api';
import eventEmitter, {EVENT} from '../../Event';
import {ERROR_MESSAGE, Function as ValidatorFunction} from '../../../../../../../../../../Validator';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    commitHash: string;
    lineNumber: number;
}

interface IState
{
    codeComment: string;
    submitting: boolean;
}

class CodeCommentForm extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            codeComment: '',
            submitting: false,
        };
    }

    async componentDidMount()
    {
        await this.init();
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {commitHash, lineNumber, match: {params: {path}}} = this.props;
        const {commitHash: prevCommitHash, lineNumber: prevLineNumber, match: {params: {path: prevPath}}} = prevProps;
        if (commitHash !== prevCommitHash || lineNumber !== prevLineNumber || path !== prevPath)
        {
            await this.componentDidMount();
        }
    }

    init = async () =>
    {
        await this.setStatePromise({codeComment: ''});
    };

    onCodeCommentChange: TextAreaProps['onChange'] = e =>
    {
        this.setState({codeComment: e.target.value});
    };

    onSubmit: HTMLAttributes<HTMLFormElement>['onSubmit'] = async e =>
    {
        e.preventDefault();
        const {codeComment} = this.state;
        if (!ValidatorFunction.Repository.codeCommentContent(codeComment))
        {
            notification.error({message: ERROR_MESSAGE.Repository.CODE_COMMENT_CONTENT});
        }
        else
        {
            const {
                match: {
                    params: {
                        username, repository: repositoryName, path,
                    },
                }, lineNumber, commitHash,
            } = this.props;
            await this.setStatePromise({submitting: true});
            const result = await CodeCommentApi.add({
                repositoryUsername: username,
                repositoryName, filePath: path!,
                columnNumber: lineNumber, creationCommitHash: commitHash, content: codeComment,
            });
            if (result !== null)
            {
                notification.success({message: '代码批注添加成功'});
                await this.init();
                eventEmitter.emit(EVENT.REFRESH);

            }
            await this.setStatePromise({submitting: false});
        }
    };

    render()
    {
        const {codeComment, submitting} = this.state;
        return (
            <View submitting={submitting}
                  codeComment={codeComment}
                  onSubmit={this.onSubmit}
                  onCodeCommentChange={this.onCodeCommentChange} />);
    }
}

export default withRouter(CodeCommentForm);