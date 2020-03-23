import React from 'react';
import Style from './Style.module.scss';
import {Button, Card, Empty, List, Popconfirm} from 'antd';
import {Profile} from '../../../../Class';
import {Function as RouterFunction} from '../../../../Router';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import NewTabLink from '../../../../Component/NewTabLink';
import DefaultAvatar from '../../../../Component/DefaultAvatar';

interface IProps
{
    profiles: Readonly<(Readonly<Profile> | null)[]>,
    loading: boolean,
    onRemoveAccountConfirm: (username: string) => PopconfirmProps['onConfirm'],
    isAdmin: boolean,
}

function MembersView(props: Readonly<IProps>)
{
    const {profiles, loading, onRemoveAccountConfirm, isAdmin} = props;
    return (
        <div className={Style.Members}>
            <List loading={loading}
                  locale={{emptyText: <Empty description={'没有成员'} />}}
                  dataSource={[...profiles]}
                  renderItem={profile =>
                  {
                      if (profile !== null)
                      {
                          const {nickname, username, avatar} = profile;
                          return (
                              <Card size={'small'}>
                                  <div className={Style.cardContent}>
                                      <NewTabLink className={Style.titleWrapper}
                                                  to={RouterFunction.generatePersonalCenterRoute({username})}>
                                          <div className={Style.avatarWrapper}>
                                              {
                                                  avatar.length === 0 ? (
                                                      <DefaultAvatar />) : (
                                                      <img src={avatar} alt={'avatar'} className={Style.avatar} />
                                                  )
                                              }
                                          </div>
                                          <div className={Style.title}>{nickname}({username})</div>
                                      </NewTabLink>
                                      {
                                          isAdmin ? (
                                              <div className={Style.buttonWrapper}>
                                                  <Popconfirm title={`确认移除成员 ${nickname}？`}
                                                              onConfirm={onRemoveAccountConfirm(username)}>
                                                      <Button type={'danger'}>移除</Button>
                                                  </Popconfirm>
                                              </div>
                                          ) : null
                                      }
                                  </div>
                              </Card>);
                      }
                      else
                      {
                          return null;
                      }
                  }
                  } />
        </div>
    );
}

export default React.memo(MembersView);