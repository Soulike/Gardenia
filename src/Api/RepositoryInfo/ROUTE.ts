import {prefix} from '../Function';

function repositoryInfoPrefix(url: string): string
{
    return prefix(`/repositoryInfo${url}`);
}

export const REPOSITORY = repositoryInfoPrefix('/repository');
export const BRANCHES = repositoryInfoPrefix('/branches');
export const BRANCH_NAMES = repositoryInfoPrefix('/branchNames');
export const LAST_COMMIT = repositoryInfoPrefix('/lastCommit');
export const DIRECTORY = repositoryInfoPrefix('/directory');
export const COMMIT_COUNT = repositoryInfoPrefix('/commitCount');
export const COMMIT_COUNT_BETWEEN_COMMITS = repositoryInfoPrefix('/commitCountBetweenCommits');
export const FILE_INFO = repositoryInfoPrefix('/fileInfo');
export const RAW_FILE = repositoryInfoPrefix('/rawFile');
export const SET_NAME = repositoryInfoPrefix('/setName');
export const SET_DESCRIPTION = repositoryInfoPrefix('/setDescription');
export const SET_IS_PUBLIC = repositoryInfoPrefix('/setIsPublic');
export const GROUPS = repositoryInfoPrefix('/groups');
export const ADD_TO_GROUP = repositoryInfoPrefix('/addToGroup');
export const COMMIT_HISTORY_BETWEEN_COMMITS = repositoryInfoPrefix('/commitHistoryBetweenCommits');
export const COMMIT_HISTORY = repositoryInfoPrefix('/commitHistory');
export const FILE_COMMIT_HISTORY_BETWEEN_COMMITS = repositoryInfoPrefix('/fileCommitHistoryBetweenCommits');
export const FILE_COMMIT_HISTORY = repositoryInfoPrefix('/fileCommitHistory');
export const DIFF_BETWEEN_COMMITS = repositoryInfoPrefix('/diffBetweenCommits');
export const DIFF_AMOUNT_BETWEEN_COMMITS = repositoryInfoPrefix('/diffAmountBetweenCommits');
export const FILE_DIFF_BETWEEN_COMMITS = repositoryInfoPrefix('/fileDiffBetweenCommits');
export const COMMIT = repositoryInfoPrefix('/commit');
export const FILE_COMMIT = repositoryInfoPrefix('/fileCommit');
export const FORK_AMOUNT = repositoryInfoPrefix('/forkAmount');
export const FORK_REPOSITORIES = repositoryInfoPrefix('/forkRepositories');
export const FORK_FROM = repositoryInfoPrefix('/forkFrom');
export const FORK_COMMIT_HISTORY = repositoryInfoPrefix('/forkCommitHistory');
export const FORK_COMMIT_AMOUNT = repositoryInfoPrefix('/forkCommitAmount');
export const FORK_FILE_DIFF = repositoryInfoPrefix('/forkFileDiff');
export const FORK_FILE_DIFF_AMOUNT = repositoryInfoPrefix('/forkFileDiffAmount');