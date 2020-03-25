import React from 'react';
import {Button, List, Popconfirm} from 'antd';
import {Repository} from '../../../../../../../../../../Class';
import Style from './Style.module.scss';
import {HomeOutlined} from '@ant-design/icons';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import NewTabLink from '../../../../../../../../../../Component/NewTabLink';
import {Function as RouterFunction} from '../../../../../../../../../../Router';
import AccessibilityTag from '../../../../../../../../../../Component/AccessibilityTag';

interface IProps
{
    repository: Readonly<Repository>,
    onRemoveButtonClick: PopconfirmProps['onConfirm'],
    loading: boolean,
}

function RepositoryItem(props: IProps)
{
    const {repository: {username, name, isPublic}, onRemoveButtonClick, loading} = props;
    return (
        <List.Item>
            <div className={Style.RepositoryItem}>
                <div className={Style.infoWrapper}>
                    <div className={Style.icon}>
                        <HomeOutlined />
                    </div>
                    <div className={Style.tag}>
                        <AccessibilityTag isPublic={isPublic} />
                    </div>
                    <div className={Style.repositoryName}>
                        <NewTabLink to={RouterFunction.generatePersonalCenterRoute({username})}>
                            {username}
                        </NewTabLink>
                        /
                        <NewTabLink to={RouterFunction.generateRepositoryCodeRoute({username, repository: name})}>
                            <span style={{fontWeight: 'bold'}}>{name}</span>
                        </NewTabLink>
                    </div>
                </div>
                <div className={Style.buttonWrapper}>
                    <Popconfirm title={`确认从小组中删除仓库 ${username}/${name} ？`}
                                onConfirm={onRemoveButtonClick}
                                disabled={loading}>
                        <Button type={'danger'}
                                disabled={loading}
                                loading={loading}>从小组中删除</Button>
                    </Popconfirm>
                </div>
            </div>
        </List.Item>
    );
}

export default React.memo(RepositoryItem);