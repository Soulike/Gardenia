import React from 'react';
import Style from './Style.module.scss';
import RepositoryList from '../../../../Component/RepositoryList';
import {Repository} from '../../../../Class';
import {Button, Space} from 'antd';
import {ButtonProps} from 'antd/lib/button';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';
import {PlusOutlined} from '@ant-design/icons';
import NewTabLink from '../../../../Component/NewTabLink';

interface IProps
{
    repositories: Readonly<Readonly<Repository>[]>,
    loading: boolean,
    onNextPageButtonClick: ButtonProps['onClick'],
    onPrevPageButtonClick: ButtonProps['onClick'],
    hasNextPage: boolean,
    hasPrevPage: boolean,
    showCreateRepositoryButton: boolean,
}

function RepositoriesView(props: Readonly<IProps>)
{
    const {repositories, loading, onNextPageButtonClick, onPrevPageButtonClick, hasNextPage, hasPrevPage, showCreateRepositoryButton} = props;
    return (
        <div className={Style.Repositories}>
            <div className={Style.tools}>
                {
                    showCreateRepositoryButton ? (
                        <NewTabLink to={PAGE_ID_TO_ROUTE[PAGE_ID.CREATE_REPOSITORY]}>
                            <Button type={'primary'}><PlusOutlined />添加仓库</Button>
                        </NewTabLink>
                    ) : null
                }
            </div>
            <RepositoryList repositories={repositories} loading={loading} showUsername={false} />
            <div className={Style.buttonWrapper}>
                {
                    hasNextPage || hasPrevPage ? (
                            <Space size={-1}>
                                <Button onClick={onPrevPageButtonClick} disabled={!hasPrevPage}>上一页</Button>
                                <Button onClick={onNextPageButtonClick} disabled={!hasNextPage}>下一页</Button>
                            </Space>)
                        : null
                }
            </div>
        </div>
    );
}

export default RepositoriesView;