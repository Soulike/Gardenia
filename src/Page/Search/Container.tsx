import React, {useEffect, useState} from 'react';
import View from './View';
import {SEARCH_TYPE} from '../../CONSTANT';
import {MenuProps} from 'antd/lib/menu';
import {useHistory, useLocation} from 'react-router-dom';
import querystring from 'querystring';
import {CONFIG as ROUTER_CONFIG, Function as RouterFunction, Interface as RouterInterface} from '../../Router';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

function Search()
{
    const [currentSearchType, setCurrentSearchType] = useState(SEARCH_TYPE.PROFILE);

    const {search} = useLocation();
    const history = useHistory();

    const TYPES = Object.values(SEARCH_TYPE);

    useEffect(() =>
    {
        const {type, keyword}: Partial<RouterInterface.ISearch> = querystring.decode(search.slice(1));
        if (type === undefined || keyword === undefined)
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    }, [search]);

    const onMenuItemClick: MenuProps['onClick'] = menuInfo =>
    {
        const {key} = menuInfo;
        if (TYPES.includes(key as SEARCH_TYPE))
        {
            const {keyword}: Partial<RouterInterface.ISearch> = querystring.decode(search.slice(1));
            if (keyword === undefined)
            {
                history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
            }
            else
            {
                const url = RouterFunction.generateSearchRoute({type: key as SEARCH_TYPE, keyword});
                setCurrentSearchType(key as SEARCH_TYPE);
                history.replace(url);
            }
        }
    };

    return (<View currentSearchType={currentSearchType}
                  onMenuItemClick={onMenuItemClick} />);
}

export default React.memo(Search);