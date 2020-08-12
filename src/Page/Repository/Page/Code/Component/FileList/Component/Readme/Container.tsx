import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RepositoryInfo} from '../../../../../../../../Api/RepositoryInfo';
import {join} from 'path';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import {File} from '../../../../../../../../Function';
import {promisify} from 'util';

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
    private setStatePromise = promisify(this.setState);

    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            exists: false,
            readme: '',
            loading: false,
        };
    }

    async componentDidMount()
    {
        const {commitHash} = this.props;
        if (commitHash)
        {
            await this.setStatePromise({loading: true});
            await this.loadRawReadme();
            await this.setStatePromise({loading: false});
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

    loadRawReadme = async () =>
    {
        await this.setStatePromise({exists: false});
        const readmeNames = [
            'README.md', 'readme.md', 'readMe.md', 'ReadMe.md',
            'README.MD', 'readme.MD', 'readMe.MD', 'ReadMe.MD',
        ];
        const {match: {params: {username, repositoryName, path}}, commitHash} = this.props;
        for (const readmeName of readmeNames)
        {
            const info = await RepositoryInfo.fileInfo({username}, {name: repositoryName}, join(path ? path : '', readmeName), commitHash);
            if (info !== null && info.exists)
            {
                const raw = await RepositoryInfo.rawFile({username}, {name: repositoryName}, join(path ? path : '', readmeName), commitHash);
                if (raw !== null)
                {
                    await this.setStatePromise({
                        readme: await File.transformBlobToString(raw),
                        exists: true,
                    });
                }
                break;
            }
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