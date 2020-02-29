import React, {PureComponent} from 'react';
import View from './View';
import {FileDiff, PullRequest} from '../../../../../../Class';
import {RepositoryInfo} from '../../../../../../Api';

interface IProps
{
    pullRequest: PullRequest,
}

interface IState
{
    fileDiffs: FileDiff[],
    loading: boolean,
}

class FileChanged extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            fileDiffs: [],
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadFileDiffs();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {pullRequest} = this.props;
        const {pullRequest: prevPullRequest} = prevProps;
        if (pullRequest !== prevPullRequest)
        {
            await this.componentDidMount();
        }
    }

    loadFileDiffs = async () =>
    {
        const {
            pullRequest: {
                sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                targetRepositoryUsername, targetRepositoryName, targetRepositoryBranch,
            },
        } = this.props;
        const fileDiffsWrapper = await RepositoryInfo.forkFileDiff(
            {username: sourceRepositoryUsername, name: sourceRepositoryName},
            sourceRepositoryBranch,
            {username: targetRepositoryUsername, name: targetRepositoryName},
            targetRepositoryBranch);
        if (fileDiffsWrapper !== null)
        {
            const {fileDiffs} = fileDiffsWrapper;
            this.setState({fileDiffs});
        }
    };

    render()
    {
        const {fileDiffs, loading} = this.state;
        return (<View fileDiffs={fileDiffs} loading={loading} />);
    }
}

export default FileChanged;