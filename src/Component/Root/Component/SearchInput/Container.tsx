import React, {useState} from 'react';
import {Input} from 'antd';
import {SearchProps} from 'antd/lib/input';

interface IProps
{

}

function SearchInput(props: IProps)
{
    const [loading] = useState(false);

    const onSearch: SearchProps['onSearch'] = async value =>
    {
        console.log(value);
    };

    return (<Input.Search loading={loading} onSearch={onSearch} placeholder={'搜索...'} />);
}

export default React.memo(SearchInput);