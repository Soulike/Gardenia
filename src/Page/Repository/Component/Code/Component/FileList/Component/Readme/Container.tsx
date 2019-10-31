import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RepositoryInfo} from '../../../../../../../../Api/RepositoryInfo';
import {join} from 'path';
import {mdConverter} from '../../../../../../../../Singleton';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import {File} from '../../../../../../../../Function';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    commitHash: string,
}

interface IState
{
    exists: boolean,
    readme: string,
    loading: boolean,
}

class Readme extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            exists: false,
            readme: '',
            loading: true,
        };
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {path}}, commitHash} = this.props;
        const {match: {params: {path: prevPath}}, commitHash: prevCommitHash} = prevProps;
        if (commitHash.length !== 0 && (prevPath !== path || prevCommitHash !== commitHash))
        {
            this.setState({loading: true});
            if (await this.readmeExists())
            {
                await this.loadRawReadme();
            }
            else
            {
                this.setState({exists: false});
            }
            this.setState({loading: false});
        }
    }

    readmeExists = async () =>
    {
        const {match: {params: {username, repository, path}}, commitHash} = this.props;
        const info = await RepositoryInfo.fileInfo(username, repository, join(path ? path : '', 'README.md'), commitHash);
        return info !== null && info.exists;
    };

    loadRawReadme = async () =>
    {
        const {match: {params: {username, repository, path}}, commitHash} = this.props;
        const raw = await RepositoryInfo.rawFile(username, repository, join(path ? path : '', 'README.md'), commitHash);
        if (raw !== null)
        {
            this.setState({readme: await File.transformBlobToString(raw), exists: true});
        }
    };

    render()
    {
        const {readme, exists, loading} = this.state;
        return (
            <View exists={exists} html={mdConverter.makeHtml(readme)} loading={loading} />
        );
    }
}

export default withRouter(Readme);