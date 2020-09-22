import React, {useEffect, useState} from 'react';
import View from '../../../StarButton';
import {ButtonProps} from 'antd/lib/button';
import {Star as StarApi} from '../../../../Api';
import {Repository} from '../../../../Class';

interface IProps
{
    repository: Readonly<Pick<Repository, 'username' | 'name'>>
}

function StarButton(props: IProps)
{
    const [hasStared, setHasStared] = useState(false);
    const [starAmount, setStarAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const {repository: {username, name}} = props;

    useEffect(() =>
    {
        const loadHasStared = async () =>
        {
            const hasStaredWrapper = await StarApi.isStaredRepository({username, name});
            if (hasStaredWrapper !== null)
            {
                const {isStared} = hasStaredWrapper;
                setHasStared(isStared);
            }
        };

        const loadStarAmount = async () =>
        {
            const starAmountWrapper = await StarApi.getRepositoryStarAmount({username, name});
            if (starAmountWrapper !== null)
            {
                const {amount} = starAmountWrapper;
                setStarAmount(amount);
            }
        };

        setLoading(true);
        Promise.all([
            loadHasStared(),
            loadStarAmount(),
        ])
            .finally(() => setLoading(false));
    }, [username, name]);

    const onClick: ButtonProps['onClick'] = async () =>
    {
        setLoading(true);
        if (hasStared)
        {
            const result = await StarApi.remove({username, name});
            if (result !== null)
            {
                setHasStared(false);
                setStarAmount(starAmount => starAmount - 1);
            }
        }
        else
        {
            const result = await StarApi.add({username, name});
            if (result !== null)
            {
                setHasStared(false);
                setStarAmount(starAmount => starAmount + 1);
            }
        }
        setLoading(false);
    };

    return (
        <View hasStared={hasStared}
              loading={loading}
              starAmount={starAmount}
              onClick={onClick} />
    );
}

export default React.memo(StarButton);