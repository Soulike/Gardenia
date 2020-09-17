import React from 'react';
import {Input, notification} from 'antd';
import {useHistory} from 'react-router-dom';
import {SearchProps} from 'antd/lib/input';
import {Function as RouterFunction} from '../../../../Router';

function SearchInput()
{
    const history = useHistory();

    const onSearch: SearchProps['onSearch'] = async value =>
    {
        if (value.length === 0)
        {
            notification.warn({message: '搜索关键词不能为空', key: 'search'});
        }
        else
        {
            const url = RouterFunction.generateSearchRoute({type: 'profile', keyword: value});
            history.push(url);
        }
    };

    return (<Input.Search onSearch={onSearch} placeholder={'搜索...'} />);
}

export default React.memo(SearchInput);