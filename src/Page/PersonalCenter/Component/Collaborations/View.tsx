import React from 'react';
import Style from './Style.module.scss';
import {Repository} from '../../../../Class';
import RepositoryList from '../../../../Component/RepositoryList';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../Router/CONFIG';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

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
                <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.ADD_COLLABORATION]} target={'_blank'} rel={'noreferrer noopener'}>
                    <Button type={'primary'}><PlusOutlined />成为仓库合作者</Button>
                </Link>
            </div>
            <RepositoryList repositories={repositories}
                            loading={loading} showUsername={true} />
        </div>
    );
}

export default React.memo(Collaborations);