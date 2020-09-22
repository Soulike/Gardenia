import React, {useLayoutEffect, useState} from 'react';
import {SEARCH_TYPE} from '../../../../CONSTANT';
import {useHistory, useLocation} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../Router';
import querystring from 'querystring';
import {MenuProps} from 'antd/lib/menu';
import View from './View';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';

function TypeMenu()
{
    const [currentSearchType, setCurrentSearchType] = useState(SEARCH_TYPE.UNKNOWN);

    const {search} = useLocation();
    const {type, keyword}: Partial<RouterInterface.ISearch> = querystring.decode(search.slice(1));
    const history = useHistory();

    useLayoutEffect(() =>
    {
        setCurrentSearchType(type as SEARCH_TYPE);
    }, [type]);

    const onMenuItemClick: MenuProps['onClick'] = menuInfo =>
    {
        const {key} = menuInfo;
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
    };

    return (<View currentSearchType={currentSearchType}
                  onMenuItemClick={onMenuItemClick} />);
}

export default React.memo(TypeMenu);