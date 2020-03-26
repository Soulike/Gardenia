import React from 'react';
import Style from './Style.module.scss';
import {Repository} from '../../../../Class';
import RepositoryList from '../../../../Component/RepositoryList';
import {Button} from 'antd';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    loading: boolean,
    repositories: Repository[],
    repositoryAmount: number,
    onLoadMoreButtonClick: ButtonProps['onClick'],
}

function Stars(props: IProps)
{
    const {repositories, onLoadMoreButtonClick, repositoryAmount, loading} = props;
    return (
        <div className={Style.Stars}>
            <div className={Style.repositoryListWrapper}>
                <RepositoryList loading={loading} repositories={repositories} showUsername={true} />
            </div>
            <div className={Style.buttonWrapper}>
                <Button loading={loading} onClick={onLoadMoreButtonClick}
                        disabled={loading || repositories.length >= repositoryAmount}>加载更多</Button>
            </div>
        </div>
    );
}

export default React.memo(Stars);