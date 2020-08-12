import React, {PureComponent} from 'react';
import View from './View';
import {CONFIG, Function as RouterFunction, Interface as RouterInterface} from '../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Conflict as ConflictClass, PullRequest} from '../../../../Class';
import {PullRequest as PullRequestApi} from '../../../../Api';
import {notification} from 'antd';
import {PULL_REQUEST_STATUS} from '../../../../CONSTANT';
import {IConflictEditorProps} from './Component/ConflictEditor';
import {PopconfirmProps} from 'antd/lib/popconfirm';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

export interface IConflictProps extends RouteComponentProps<RouterInterface.IRepositoryConflict> {}

interface IState
{
    pullRequest: PullRequest,
    conflicts: ConflictClass[],
    resolvedFilePath: Set<string>,
    loading: boolean,
}

class Conflict extends PureComponent<IConflictProps, IState>
{
    constructor(props: IConflictProps)
    {
        super(props);
        this.state = {
            pullRequest: new PullRequest(0, 0,
                '', '', '', '',
                '', '', '', '',
                0, 0, '', '', PULL_REQUEST_STATUS.CLOSED),
            conflicts: [],
            loading: false,
            resolvedFilePath: new Set<string>(),
        };
    }

    async componentDidMount()
    {
        this.checkURL();
        this.setState({loading: true});
        await this.loadPullRequest();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IConflictProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {location: {pathname}} = this.props;
        const {location: {pathname: prevPathname}} = this.props;
        if (pathname !== prevPathname)
        {
            await this.componentDidMount();
        }

        const {pullRequest: {id}} = this.state;
        const {pullRequest: {id: prevId}} = prevState;
        if (prevId !== id)
        {
            this.setState({loading: true});
            await this.loadConflicts();
            this.setState({loading: false});
        }
    }

    checkURL = () =>
    {
        const {match: {params: {no: noString}}, history} = this.props;
        const no = Number.parseInt(noString);
        if (Number.isNaN(no))
        {
            return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    };

    loadPullRequest = async () =>
    {
        return new Promise(async resolve =>
        {
            const {match: {params: {username, repositoryName: name, no: noString}}, history} = this.props;
            const no = Number.parseInt(noString);
            const pullRequest = await PullRequestApi.get({username, name}, {no});
            if (pullRequest !== null)
            {
                const {status} = pullRequest;
                if (status !== PULL_REQUEST_STATUS.OPEN)
                {
                    notification.warn({message: `Pull Request #${no} 已关闭或合并`});
                    resolve();
                    return history.replace(RouterFunction.generateRepositoryPullRequestRoute({
                        username, repositoryName: name, no: noString,
                    }));
                }
                this.setState({pullRequest}, () => resolve());
            }
            else
            {
                resolve();
                return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
            }
        });
    };

    loadConflicts = async () =>
    {
        return new Promise(async resolve =>
        {
            const {pullRequest} = this.state;
            const {id} = pullRequest;
            const conflictsWrapper = await PullRequestApi.getConflicts({id});
            if (conflictsWrapper !== null)
            {
                const {conflicts} = conflictsWrapper;
                const {match: {params: {username, repositoryName, no}}, history} = this.props;
                if (conflicts.length === 0)
                {
                    notification.warn({
                        message: `${username}/${repositoryName} #${no} 没有合并冲突`,
                        description: '您可直接执行合并操作',
                    });
                    resolve();
                    return history.replace(RouterFunction.generateRepositoryPullRequestRoute({
                        username, repositoryName, no,
                    }));
                }
                else
                {
                    conflicts.forEach(({isBinary}) =>
                    {
                        if (isBinary)
                        {
                            notification.warn({
                                message: `存在二进制文件冲突`,
                                description: '请使用命令行解决冲突',
                            });
                            resolve();
                            return history.replace(RouterFunction.generateRepositoryPullRequestRoute({
                                username, repositoryName, no,
                            }));
                        }
                    });
                }
                this.setState({conflicts}, () => resolve());
            }
            else
            {
                resolve();
            }
        });
    };

    onConflictChange: IConflictEditorProps['onChange'] = (filePath, resolved, code) =>
    {
        const {conflicts, resolvedFilePath} = this.state;
        for (let i = 0; i < conflicts.length; i++)
        {
            const {filePath: conflictFilePath, isBinary, content} = conflicts[i];
            if (conflictFilePath === filePath && code !== content)
            {
                conflicts[i] = new ConflictClass(filePath, isBinary, code);
            }
            if (resolved)
            {
                resolvedFilePath.add(filePath);
            }
            else
            {
                resolvedFilePath.delete(filePath);
            }
        }
    };

    onSubmitButtonClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {pullRequest: {id}, resolvedFilePath, conflicts} = this.state;
        const filePaths = conflicts.map(({filePath}) => filePath);
        if (filePaths.length !== resolvedFilePath.size)
        {
            notification.error({message: '请解决所有冲突后再提交'});
        }
        else
        {
            this.setState({loading: true});
            const result = await PullRequestApi.resolveConflicts({id}, conflicts);
            if (result !== null)
            {
                notification.success({message: '解决冲突成功'});
                const {history, match: {params: {username, repositoryName, no}}} = this.props;
                return history.push(RouterFunction.generateRepositoryPullRequestRoute({
                    username, repositoryName, no,
                }));
            }
            this.setState({loading: false});
        }
    };

    render()
    {
        const {loading, pullRequest, conflicts} = this.state;
        return (<View loading={loading}
                      pullRequest={pullRequest}
                      conflicts={conflicts}
                      onConflictChange={this.onConflictChange}
                      onSubmitButtonClick={this.onSubmitButtonClick} />);
    }
}

export default withRouter(Conflict);