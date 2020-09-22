import React from 'react';
import Style from './Style.module.scss';
import {Repository} from '../../../../Class';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    loading: boolean,
    allLoaded: boolean,
    repositories: Readonly<Repository>[],
    onNextPageButtonClick: ButtonProps['onClick'],
}

function RepositoryList(props: IProps)
{
    return (
        <div className={Style.RepositoryList}>

        </div>);
}

export default React.memo(RepositoryList);