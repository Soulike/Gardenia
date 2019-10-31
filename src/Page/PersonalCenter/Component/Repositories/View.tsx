import React from 'react';
import Style from './Style.module.scss';
import RepositoryList from '../../../../Component/RepositoryList';
import {Repository} from '../../../../Class';
import {Button} from 'antd';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    repositories: Repository[],
    loading: boolean,
    onNextPageButtonClick: ButtonProps['onClick'],
    onPrevPageButtonClick: ButtonProps['onClick'],
    hasNextPage: boolean,
    hasPrevPage: boolean,
}

function RepositoriesView(props: IProps)
{
    const {repositories, loading, onNextPageButtonClick, onPrevPageButtonClick, hasNextPage, hasPrevPage} = props;
    return (
        <div className={Style.Repositories}>
            <RepositoryList repositoryList={repositories} loading={loading} />
            <div className={Style.buttonWrapper}>
                {
                    hasNextPage || hasPrevPage ? (
                            <Button.Group>
                                <Button onClick={onPrevPageButtonClick} disabled={!hasPrevPage}>上一页</Button>
                                <Button onClick={onNextPageButtonClick} disabled={!hasNextPage}>下一页</Button>
                            </Button.Group>)
                        : null
                }
            </div>
        </div>
    );
}

export default RepositoriesView;