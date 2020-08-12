import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG, Interface as RouterInterface} from '../../../../../../Router';
import {IssueComment} from '../../../../../../Class';
import {Issue as IssueApi} from '../../../../../../Api';
import {notification} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import {IIssueState, IState as StoreState} from '../../../../../../Store';
import {connect} from 'react-redux';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

interface IProps extends IIssueState, RouteComponentProps<RouterInterface.IRepositoryIssue> {}

interface IState
{
    loading: boolean;
    comments: IssueComment[];
}

class Comments extends PureComponent<IProps, IState>
{
    private static COMMENT_AMOUNT_PER_PAGE = 25;

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            comments: [],
            loading: false,
        };
    }

    async componentDidMount()
    {
        await this.init();
        this.setState({loading: true});
        await this.loadMoreComments();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username, repositoryName, no}}} = this.props;
        const {match: {params: {username: prevUsername, repositoryName: prevRepositoryName, no: prevNo}}} = prevProps;
        if (username !== prevUsername || repositoryName !== prevRepositoryName || no !== prevNo)
        {
            await this.componentDidMount();
        }
    }

    init = async () =>
    {
        return new Promise(resolve =>
        {
            this.setState({comments: []}, () => resolve());
        });
    };

    loadMoreComments = async () =>
    {
        return new Promise(async resolve =>
        {
            const {
                match: {params: {username, repositoryName, no: noString}},
                history,
            } = this.props;
            const no = Number.parseInt(noString);
            if (Number.isNaN(no) || no <= 0)
            {
                resolve();
                return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
            }
            else
            {
                const {comments} = this.state;
                const commentsWrapper = await IssueApi.getComments({
                    repositoryUsername: username,
                    repositoryName,
                    no,
                }, comments.length, Comments.COMMENT_AMOUNT_PER_PAGE);
                if (commentsWrapper !== null)
                {
                    const {comments: moreComments} = commentsWrapper;
                    if (moreComments.length > 0)
                    {
                        this.setState({comments: [...comments, ...moreComments]}, () => resolve());
                    }
                    else
                    {
                        notification.success({message: '已加载所有讨论'});
                        resolve();
                    }
                }
            }
        });
    };

    onLoadMoreClick: ButtonProps['onClick'] = async () =>
    {
        this.setState({loading: true});
        await this.loadMoreComments();
        this.setState({loading: false});
    };

    render()
    {
        const {loading, comments} = this.state;
        const {loading: issueLoading, issue: {username}} = this.props;
        return (<View onLoadMoreClick={this.onLoadMoreClick}
                      comments={comments} loading={loading || issueLoading} issueCreatorUsername={username} />);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {Issue: {loading, issue}} = state;
    return {loading, issue};
};

export default connect(mapStateToProps)(withRouter(Comments));