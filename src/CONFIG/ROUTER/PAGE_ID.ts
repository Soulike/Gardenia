export const PAGE_ID = Object.freeze({
    NOT_FOUND: 'NOT_FOUND',
    REPOSITORY_REDIRECT: 'REPOSITORY_REDIRECT',
    INDEX: 'INDEX',
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    CREATE_REPOSITORY: 'CREATE_REPOSITORY',
    CREATE_GROUP: 'CREATE_GROUP',
    ADD_COLLABORATION: 'ADD_COLLABORATION',
    PERSONAL_CENTER: 'PERSONAL_CENTER',
    NOTIFICATIONS: 'NOTIFICATIONS',
    SEARCH: 'SEARCH',
    REPOSITORY: Object.freeze({
        REPOSITORY: 'REPOSITORY',
        ISSUES: 'REPOSITORY_ISSUES',
        ISSUE: 'REPOSITORY_ISSUE',
        CREATE_ISSUE: 'REPOSITORY_CREATE_ISSUE',
        PULL_REQUESTS: 'REPOSITORY_PULL_REQUESTS',
        PULL_REQUEST: 'REPOSITORY_PULL_REQUEST',
        CONFLICT: 'REPOSITORY_CONFLICT',
        COMPARE: 'REPOSITORY_COMPARE',
        SETTINGS: {
            SETTINGS: 'REPOSITORY_SETTINGS',
            OPTIONS: 'REPOSITORY_SETTINGS_OPTIONS',
            COLLABORATORS: 'REPOSITORY_SETTINGS_COLLABORATORS',
            GROUPS: 'REPOSITORY_SETTINGS_GROUPS',
        },
        CODE: 'REPOSITORY_CODE',
        COMMITS: 'REPOSITORY_COMMITS',
        COMMIT: 'REPOSITORY_COMMIT',
        BRANCHES: 'REPOSITORY_BRANCHES',
        TAGS: 'REPOSITORY_TAGS',
    }),
    GROUP: Object.freeze({
        GROUP: 'GROUP',
        REPOSITORIES: 'GROUP_REPOSITORIES',
        MEMBERS: 'GROUP_MEMBERS',
        SETTINGS: {
            SETTINGS: 'GROUP_SETTINGS',
            OPTIONS: 'GROUP_SETTINGS_OPTIONS',
            REPOSITORIES: 'GROUP_SETTINGS_REPOSITORIES',
        },
    }),
    SETTING: Object.freeze({
        SETTING: 'SETTING',
        PROFILE: 'SETTING_PROFILE',
        AVATAR: 'SETTING_AVATAR',
    }),
});