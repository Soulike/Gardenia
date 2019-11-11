export const PAGE_ID = Object.freeze({
    INDEX: 'INDEX',
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
    CREATE_REPOSITORY: 'CREATE_REPOSITORY',
    CREATE_GROUP: 'CREATE_GROUP',
    PERSONAL_CENTER: 'PERSONAL_CENTER',
    REPOSITORY: Object.freeze({
        REPOSITORY: 'REPOSITORY',
        ISSUES: 'REPOSITORY_ISSUES',
        PULL_REQUESTS: 'REPOSITORY_PULL_REQUESTS',
        SETTINGS: {
            SETTINGS: 'REPOSITORY_SETTINGS',
            OPTIONS: 'REPOSITORY_SETTINGS_OPTIONS',
            COLLABORATORS: 'REPOSITORY_SETTINGS_COLLABORATORS',
            BRANCHES: 'REPOSITORY_SETTINGS_BRANCHES',
            GROUPS: 'REPOSITORY_SETTINGS_GROUPS',
        },
        CODE: 'REPOSITORY_CODE',
    }),
    GROUP: Object.freeze({
        GROUP: 'GROUP',
        REPOSITORIES: 'GROUP_REPOSITORIES',
        MEMBERS: 'GROUP_MEMBERS',
        SETTINGS: {
            SETTINGS: 'GROUP_SETTINGS',
            OPTIONS: 'GROUP_SETTINGS_OPTIONS',
        },
    }),
    SETTING: Object.freeze({
        SETTING: 'SETTING',
        PROFILE: 'SETTING_PROFILE',
    }),
});