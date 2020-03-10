import React from 'react';
import Style from './Style.module.scss';
import {Profile} from '../../../../../../../../../../Class';
import {Avatar, Button, Card, Popconfirm} from 'antd';
import DefaultAvatar from '../../../../../../../../../../Component/DefaultAvatar';
import {Function as RouterFunction} from '../../../../../../../../../../Router';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import NewTabLink from '../../../../../../../../../../Component/NewTabLink';

interface IProps
{
    profile: Profile;
    onRemoveButtonClick: PopconfirmProps['onConfirm'];
    loading: boolean,
}

function CollaboratorCard(props: IProps)
{
    const {profile: {username, nickname, avatar}, onRemoveButtonClick, loading} = props;
    return (
        <div className={Style.CollaboratorCard}>
            <Card bordered={false}>
                <div className={Style.cardContent}>
                    <NewTabLink to={RouterFunction.generatePersonalCenterRoute({username})}
                                className={Style.basicInfo}>
                        <div className={Style.avatarWrapper}>
                            {
                                avatar
                                    ? <Avatar src={avatar} shape={'square'} size={48} />
                                    : <DefaultAvatar />
                            }
                        </div>
                        <div className={Style.nickname}>{nickname}</div>
                        <div className={Style.username}>{username}</div>
                    </NewTabLink>
                    <Popconfirm disabled={loading}
                                title={<>确认取消 <b>{username}</b> 的合作者身份？</>}
                                onConfirm={onRemoveButtonClick}>
                        <Button type={'danger'} disabled={loading} loading={loading}>移除</Button>
                    </Popconfirm>
                </div>

            </Card>
        </div>);
}

export default React.memo(CollaboratorCard);