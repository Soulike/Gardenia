import React, {useEffect, useState} from 'react';
import View from './View';
import {Repository} from '../../Class';
import {RepositoryInfo} from '../../Api/RepositoryInfo';

interface IProps
{
    repository: Readonly<Pick<Repository, 'username' | 'name'>>
}

function ForkAmount(props: IProps)
{
    const [forkAmount, setForkAmount] = useState(0);
    const [loading, setLoading] = useState(false);

    const {repository: {username, name}} = props;

    useEffect(() =>
    {
        const loadForkAmount = async () =>
        {
            const forkAmountWrapper = await RepositoryInfo.forkAmount({username, name});
            if (forkAmountWrapper !== null)
            {
                const {amount} = forkAmountWrapper;
                setForkAmount(amount);
            }
        };

        setLoading(true);
        loadForkAmount()
            .finally(() => setLoading(false));
    }, [username, name]);

    return (<View loading={loading} forkAmount={forkAmount} />);
}

export default React.memo(ForkAmount);