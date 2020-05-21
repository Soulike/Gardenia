import React, {PureComponent} from 'react';
import View from './View';
import path from 'path';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import {RepositoryInfo} from '../../../../../../../../Api/RepositoryInfo';
import {File} from '../../../../../../../../Function';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{
    fileSize: number;
    lastCommitHash: string;
}

interface IState {}

class FileInfoBar extends PureComponent<IProps, IState>
{
    onRawFileButtonClick = async () =>
    {
        const {match: {params: {username, repository, path}}, lastCommitHash} = this.props;
        const rawFile = await RepositoryInfo.rawFile({username}, {name: repository}, path!, lastCommitHash);
        if (rawFile !== null)
        {
            this.startDownload(rawFile);
        }
    };

    startDownload = (blob: Blob) =>
    {
        const {match: {params: {path: filePath}}} = this.props;
        const url = URL.createObjectURL(blob);
        File.startDownload(url, path.basename(filePath!));
        URL.revokeObjectURL(url);
    };

    render()
    {
        const {fileSize} = this.props;

        return (
            <View fileSize={fileSize}
                  onRawFileButtonClick={this.onRawFileButtonClick} />
        );
    }
}

export default withRouter(FileInfoBar);