import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RepositoryInfo} from '../../../../../../../../Api/RepositoryInfo';
import {join} from 'path';
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

class Readme extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            exists: false,
            readme: '',
            loading: true,
        };
    }

    async componentDidMount()
    {
        const {commitHash} = this.props;
        if (commitHash)
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

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {location: {pathname}, commitHash} = this.props;
        const {location: {pathname: prevPathName}, commitHash: prevCommitHash} = prevProps;
        if (pathname !== prevPathName || commitHash !== prevCommitHash)
        {
            await this.componentDidMount();
        }
    }

    readmeExists = async () =>
    {
        const {match: {params: {username, repository, path}}, commitHash} = this.props;
        const info = await RepositoryInfo.fileInfo({username}, {name: repository}, join(path ? path : '', 'README.md'), commitHash);
        return info !== null && info.exists;
    };

    loadRawReadme = async () =>
    {
        const {match: {params: {username, repository, path}}, commitHash} = this.props;
        const raw = await RepositoryInfo.rawFile({username}, {name: repository}, join(path ? path : '', 'README.md'), commitHash);
        if (raw !== null)
        {
            this.setState({readme: await File.transformBlobToString(raw), exists: true});
        }
    };

    render()
    {
        const {readme, exists, loading} = this.state;
        return (
            <View exists={exists} readme={readme} loading={loading} />
        );
    }
}

export default withRouter(Readme);