import React, {useEffect} from 'react';
import View from './View';
import {CONFIG as ROUTER_CONFIG, Interface as RouterInterface} from '../../Router';
import querystring from 'querystring';
import {useHistory, useLocation} from 'react-router-dom';
import {SEARCH_TYPE} from '../../CONSTANT';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

function Search()
{
    const {search} = useLocation();
    const history = useHistory();

    const TYPES = Object.values(SEARCH_TYPE);

    useEffect(() =>
    {
        const {type, keyword}: Partial<RouterInterface.ISearch> = querystring.decode(search.slice(1));
        if (type === undefined || !TYPES.includes(type) || keyword === undefined)
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    }, [search]);

    return (<View />);
}

export default React.memo(Search);