import React, {useEffect, useState} from 'react';
import View from './View';
import {Commit, Repository} from '../../../../Class';
import {RepositoryInfo} from '../../../../Api';

interface IProps
{
    repository: Readonly<Pick<Repository, 'username' | 'name'>>
}

function LastUpdateInfo(props: IProps)
{
    const [lastCommit, setLastCommit] = useState<Commit | null>(null);
    const [loading, setLoading] = useState(false);

    const {repository: {username, name}} = props;

    useEffect(() =>
    {
        const loadLastCommit = async () =>
        {
            const lastCommit = await RepositoryInfo.lastCommit({username, name});
            setLastCommit(lastCommit);
        };

        setLoading(true);
        loadLastCommit()
            .finally(() => setLoading(false));
    }, [username, name]);

    return (<View lastCommit={lastCommit} loading={loading} />);
}

export default React.memo(LastUpdateInfo);