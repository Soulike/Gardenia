import React, {useCallback, useEffect, useState} from 'react';
import View from './View';
import {Repository} from '../../../../Class';
import {useLocation} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import querystring from 'querystring';
import {Repository as RepositoryApi} from '../../../../Api';
import {notification} from 'antd';
import {ButtonProps} from 'antd/lib/button';

function RepositoryList()
{
    const [loading, setLoading] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const AMOUNT_PER_PAGE = 20;
    const {search} = useLocation();
    const {keyword}: Partial<RouterInterface.ISearch> = querystring.decode(search.slice(1));

    useEffect(() =>
    {
        setCurrentPageNumber(0);
        setRepositories([]);
        setAllLoaded(false);
        setLoading(false);
    }, [keyword]);

    useEffect(() =>
    {
        setLoading(true);
        RepositoryApi.search(keyword!, currentPageNumber * AMOUNT_PER_PAGE, AMOUNT_PER_PAGE)
            .then(repositoriesWrapper =>
            {
                if (repositoriesWrapper !== null)
                {
                    const {repositories: newRepositories} = repositoriesWrapper;
                    setRepositories(repositories => repositories.concat(newRepositories));
                    if (newRepositories.length < AMOUNT_PER_PAGE)
                    {
                        notification.success({message: '已加载所有搜索结果', key: 'profileList'});
                        setAllLoaded(true);
                    }
                }
                setLoading(false);
            });
    }, [keyword, currentPageNumber]);

    const onNextPageButtonClick: ButtonProps['onClick'] = useCallback(() =>
    {
        if (!allLoaded)
        {
            setCurrentPageNumber(currentPageNumber + 1);
        }
    }, [allLoaded, currentPageNumber]);

    return (<View loading={loading}
                  onNextPageButtonClick={onNextPageButtonClick}
                  allLoaded={allLoaded}
                  repositories={repositories} />);
}

export default React.memo(RepositoryList);