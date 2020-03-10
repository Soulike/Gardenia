import React from 'react';
import Style from './Style.module.scss';
import {Repository} from '../../../../Class';
import RepositoryList from '../../../../Component/RepositoryList';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../Router/CONFIG';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import NewTabLink from '../../../../Component/NewTabLink';

interface IProps
{
    repositories: Repository[];
    loading: boolean;
}

function Collaborations(props: IProps)
{
    const {repositories, loading} = props;
    return (
        <div className={Style.Collaborations}>
            <div className={Style.tools}>
                <NewTabLink to={PAGE_ID_TO_ROUTE[PAGE_ID.ADD_COLLABORATION]}>
                    <Button type={'primary'}><PlusOutlined />成为仓库合作者</Button>
                </NewTabLink>
            </div>
            <RepositoryList repositories={repositories}
                            loading={loading} showUsername={true} />
        </div>
    );
}

export default React.memo(Collaborations);