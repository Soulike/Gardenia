import React, {PureComponent} from 'react';
import View from './View';
import {CodeComment} from '../../../../../../../../../../Class';
import {CodeComment as CodeCommentApi} from '../../../../../../../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../../../../../Router';
import {promisify} from 'util';
import eventEmitter, {EVENT} from '../../../../Event';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    lineNumber: number;
    commitHash: string;
}

interface IState
{
    codeComments: CodeComment[];
    loading: boolean;
}

class CodeCommentList extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            codeComments: [],
            loading: false,
        };

        eventEmitter.on(EVENT.CODE_COMMENT_CHANGE, this.onListChange);
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        await this.loadCodeComments();
        await this.setStatePromise({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {lineNumber, commitHash, match: {params: {path}}} = this.props;
        const {lineNumber: prevLineNumber, commitHash: prevCommitHash, match: {params: {path: prevPath}}} = prevProps;
        if (lineNumber !== prevLineNumber || commitHash !== prevCommitHash || path !== prevPath)
        {
            await this.componentDidMount();
        }
    }

    componentWillUnmount()
    {
        eventEmitter.removeListener(EVENT.CODE_COMMENT_CHANGE, this.onListChange);
    }

    onListChange = async () => await this.componentDidMount();

    loadCodeComments = async () =>
    {
        const {lineNumber, commitHash, match: {params: {repository, path, username}}} = this.props;
        const codeCommentsWrapper = await CodeCommentApi.get({
            repositoryUsername: username,
            repositoryName: repository, columnNumber: lineNumber, filePath: path!,
        }, commitHash);
        if (codeCommentsWrapper !== null)
        {
            const {codeComments} = codeCommentsWrapper;
            await this.setStatePromise({codeComments});
        }
    };

    render()
    {
        const {loading, codeComments} = this.state;
        return (<View loading={loading} codeComments={codeComments} />);
    }
}

export default withRouter(CodeCommentList);