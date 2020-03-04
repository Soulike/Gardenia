import React from 'react';
import Style from './Style.module.scss';
import RepositoryList from '../../../../Component/RepositoryList';
import {Repository} from '../../../../Class';
import {Button} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../Router/CONFIG';
import {PlusOutlined} from '@ant-design/icons';

interface IProps
{
    repositories: Readonly<Readonly<Repository>[]>,
    loading: boolean,
    onNextPageButtonClick: ButtonProps['onClick'],
    onPrevPageButtonClick: ButtonProps['onClick'],
    hasNextPage: boolean,
    hasPrevPage: boolean,
}

function RepositoriesView(props: Readonly<IProps>)
{
    const {repositories, loading, onNextPageButtonClick, onPrevPageButtonClick, hasNextPage, hasPrevPage} = props;
    return (
        <div className={Style.Repositories}>
            <div className={Style.tools}>
                <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.CREATE_REPOSITORY]} target={'_blank'} rel={'noreferrer noopener'}>
                    <Button type={'primary'}><PlusOutlined />添加仓库</Button>
                </Link>
            </div>
            <RepositoryList repositories={repositories} loading={loading} showUsername={false} />
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