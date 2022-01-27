import React from 'react';
import View from './View';
import {useRouteMatch} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import {RepositoryInfo} from '../../../../../../../../Api/RepositoryInfo';
import {File} from '../../../../../../../../Function';
import path from 'path-browserify';

interface IProps
{
    fileSize: number;
    lastCommitHash: string;
}

function FileInfoBar(props: IProps)
{
    const {fileSize, lastCommitHash} = props;

    const {params: {username, repositoryName, path: filePath}} = useRouteMatch<RouterInterface.IRepositoryCode>();

    const startDownload = (blob: Blob) =>
    {
        const url = URL.createObjectURL(blob);
        File.startDownload(url, path.basename(filePath!));
        URL.revokeObjectURL(url);
    };

    const onRawFileButtonClick = async () =>
    {
        const rawFile = await RepositoryInfo.rawFile({username}, {name: repositoryName}, filePath!, lastCommitHash);
        if (rawFile !== null)
        {
            startDownload(rawFile);
        }
    };

    return (
        <View fileSize={fileSize}
              onRawFileButtonClick={onRawFileButtonClick} />
    );
}

export default React.memo(FileInfoBar);