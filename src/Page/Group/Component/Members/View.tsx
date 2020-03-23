import React from 'react';
import Style from './Style.module.scss';
import {Alert, Button, Card, Empty, List, Popconfirm, Tag} from 'antd';
import {Profile} from '../../../../Class';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../Router';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import NewTabLink from '../../../../Component/NewTabLink';
import DefaultAvatar from '../../../../Component/DefaultAvatar';
import {Link} from 'react-router-dom';
import {RouteComponentProps, withRouter} from 'react-router';

interface IProps extends RouteComponentProps<RouterInterface.IGroup>
{
    profiles: Readonly<(Readonly<Profile> | null)[]>,
    adminUsernames: string[],
    loading: boolean,
    onRemoveAccountConfirm: (username: string) => PopconfirmProps['onConfirm'],
    onSetAdminConfirm: (username: string) => PopconfirmProps['onConfirm'],
    onRemoveAdminConfirm: (username: string) => PopconfirmProps['onConfirm'],
    isAdmin: boolean,
}

function MembersView(props: Readonly<IProps>)
{
    const {
        profiles, loading, isAdmin, adminUsernames,
        onSetAdminConfirm, onRemoveAccountConfirm, onRemoveAdminConfirm,
        match: {params: {id}},
    } = props;
    return (
        <div className={Style.Members}>
            <div className={Style.banner}>
                <Alert type={'info'}
                       showIcon={true}
                       banner={true}
                       message={
                           <div>
                               可在
                               <Link to={RouterFunction.generateGroupSettingsRoute({id})}>
                                   小组设置页面
                               </Link>
                               中添加新成员
                           </div>} />
            </div>
            <List loading={loading}
                  locale={{emptyText: <Empty description={'没有成员'} />}}
                  dataSource={[...profiles]}
                  renderItem={profile =>
                  {
                      if (profile !== null)
                      {
                          const {nickname, username, avatar} = profile;
                          return (
                              <Card size={'small'} key={username}>
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
                                          <div className={Style.name}>{nickname}({username})</div>
                                          <div className={Style.isAdminTagWrapper}>
                                              {
                                                  adminUsernames.includes(username) ? (
                                                      <Tag color={'blue'} className={Style.isAdminTag}>管理员</Tag>
                                                  ) : null
                                              }
                                          </div>
                                      </NewTabLink>
                                      {
                                          isAdmin ? (
                                              <div className={Style.buttonWrapper}>
                                                  <Button.Group>
                                                      {
                                                          adminUsernames.includes(username) ? (
                                                              <Popconfirm title={`确认撤销成员 ${username} 的管理员权限？`}
                                                                          onConfirm={onRemoveAdminConfirm(username)}
                                                                          disabled={loading}>
                                                                  <Button loading={loading}
                                                                          disabled={loading}>撤销管理员</Button>
                                                              </Popconfirm>
                                                          ) : (
                                                              <Popconfirm title={`确认设置成员 ${username} 为管理员？`}
                                                                          onConfirm={onSetAdminConfirm(username)}
                                                                          disabled={loading}>
                                                                  <Button type={'primary'}
                                                                          loading={loading}
                                                                          disabled={loading}>设为管理员</Button>
                                                              </Popconfirm>
                                                          )
                                                      }
                                                      <Popconfirm title={`确认移除成员 ${username}？`}
                                                                  onConfirm={onRemoveAccountConfirm(username)}
                                                                  disabled={loading}>
                                                          <Button type={'danger'}
                                                                  loading={loading}
                                                                  disabled={loading}>移除</Button>
                                                      </Popconfirm>
                                                  </Button.Group>
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

export default React.memo(withRouter(MembersView));