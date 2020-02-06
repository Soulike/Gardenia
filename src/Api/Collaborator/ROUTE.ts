import {prefix} from '../Function';

function collaboratePrefix(url: string): string
{
    return prefix(`/collaborate${url}`);
}

export const GENERATE_CODE = collaboratePrefix('/generateCode');
export const ADD = collaboratePrefix('/add');
export const REMOVE = collaboratePrefix('/remove');
export const GET_COLLABORATORS = collaboratePrefix('/getCollaborators');
export const GET_COLLABORATORS_AMOUNT = collaboratePrefix('/getCollaboratorsAmount');
export const GET_COLLABORATING_REPOSITORIES = collaboratePrefix('/getCollaboratingRepositories');
export const GET_COLLABORATING_REPOSITORIES_AMOUNT = collaboratePrefix('/getCollaboratingRepositoriesAmount');