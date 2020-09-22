import React, {useEffect} from 'react';
import View from './View';
import {Interface as RouterInterface} from '../../Router';
import querystring from 'querystring';
import {useHistory, useLocation} from 'react-router-dom';
import {SEARCH_TYPE} from '../../CONSTANT';
import * as CONFIG from '../../CONFIG';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';

function Search()
{
    const {search} = useLocation();
    const history = useHistory();

    const TYPES = Object.values(SEARCH_TYPE);

    const {type, keyword}: Partial<RouterInterface.ISearch> = querystring.decode(search.slice(1));

    useEffect(() =>
    {
        document.title = `${keyword} 的搜索结果 - ${CONFIG.NAME}`;
    }, [keyword]);

    useEffect(() =>
    {
        if (type === undefined || !TYPES.includes(type) || type === SEARCH_TYPE.UNKNOWN
            || keyword === undefined)
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    }, [search, type, TYPES, keyword, history]);

    return (<View currentType={type!} />);
}

export default React.memo(Search);