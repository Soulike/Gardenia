import React from 'react';
import Style from './Style.module.scss';
import RepositoryList from '../../../../Component/RepositoryList';
import {Repository} from '../../../../Class';
import {Button, Icon} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../Router/CONFIG';

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
            <div className={Style.tools}>
                <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.CREATE_REPOSITORY]} target={'_blank'} rel={'noreferrer noopener'}>
                    <Button type={'primary'}><Icon type={'plus'} />添加仓库</Button>
                </Link>
            </div>
            <RepositoryList repositoryList={repositories} loading={loading} showUsername={false} />
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