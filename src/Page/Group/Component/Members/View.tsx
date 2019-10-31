import React from 'react';
import Style from './Style.module.scss';
import {Button, Card, Empty, Icon, List, Popconfirm} from 'antd';
import {Profile} from '../../../../Class';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../../../Router';
import {PopconfirmProps} from 'antd/lib/popconfirm';

interface IProps
{
    profiles: (Profile | null)[],
    loading: boolean,
    onRemoveAccountConfirm: (username: string) => PopconfirmProps['onConfirm']
}

function MembersView(props: IProps)
{
    const {profiles, loading, onRemoveAccountConfirm} = props;
    return (
        <div className={Style.Members}>
            <List loading={loading}
                  locale={{emptyText: <Empty description={'没有成员'} />}}
                  dataSource={profiles}
                  renderItem={profile =>
                  {
                      if (profile !== null)
                      {
                          const {nickname, username} = profile;
                          return (
                              <Card size={'small'}>
                                  <div className={Style.cardContent}>
                                      <div className={Style.titleWrapper}>
                                          <Icon type={'user'} />
                                          <Link to={RouterFunction.generatePersonalCenterRoute({username})}
                                                target={'_blank'}
                                                className={Style.title}>{nickname}({username})</Link>
                                      </div>
                                      <div className={Style.buttonWrapper}>
                                          <Popconfirm title={`确认移除成员 ${nickname}？`}
                                                      onConfirm={onRemoveAccountConfirm(username)}>
                                              <Button type={'danger'}>移除</Button>
                                          </Popconfirm>
                                      </div>
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