import React, {Component} from 'react';
import View from './View';
import {RepositoryInfo} from '../../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {ObjectType} from '../../../../../CONSTANT';
import {Commit} from '../../../../../Class';
import {Interface as RouterInterface} from '../../../../../Router';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode> {}

interface IState
{
    fileList: Array<{ type: ObjectType, path: string, commit: Commit }>,
    lastCommit: Commit,
    loading: boolean,
}

class FileList extends Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            fileList: [],
            lastCommit: new Commit('', '', '', '', ''),
            loading: true,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await Promise.all([
            this.loadDirectory(),
            this.loadLastCommit(),
        ]);
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {branch: preBranch, path: prePath}}} = prevProps;
        const {match: {params: {branch, path}}} = this.props;
        if (preBranch !== branch || prePath !== path)
        {
            await this.componentDidMount();
        }
    }

    loadDirectory = async () =>
    {
        const {match: {params: {username, repository: name, path, branch}}} = this.props;
        const fileList = await RepositoryInfo.directory(
            username, name,
            branch ? branch : 'HEAD',
            path === undefined ? '' : path + '/');
        if (fileList !== null)
        {
            this.setState({fileList});
        }
    };

    loadLastCommit = async () =>
    {
        const {match: {params: {username, repository: name, branch, path}}} = this.props;
        const lastCommit = await RepositoryInfo.lastCommit(username, name, branch ? branch : 'HEAD', path);
        if (lastCommit !== null)
        {
            this.setState({lastCommit});
        }
    };

    render()
    {
        const {fileList, lastCommit, loading} = this.state;
        const {match: {params: {path}}} = this.props;
        return (<View fileList={fileList}
                      lastCommit={lastCommit}
                      loading={loading}
                      showPreviousFolderItem={path !== undefined} />);
    }
}

export default withRouter(FileList);