import {prefix} from '../Function';

function repositoryInfoPrefix(url: string): string
{
    return prefix(`/repositoryInfo${url}`);
}

export const REPOSITORY = repositoryInfoPrefix('/repository');
export const BRANCH = repositoryInfoPrefix('/branch');
export const LAST_COMMIT = repositoryInfoPrefix('/lastCommit');
export const DIRECTORY = repositoryInfoPrefix('/directory');
export const COMMIT_COUNT = repositoryInfoPrefix('/commitCount');
export const FILE_INFO = repositoryInfoPrefix('/fileInfo');
export const RAW_FILE = repositoryInfoPrefix('/rawFile');