import React from 'react';
import Style from './Style.module.scss';
import {Profile} from '../../../../Class';
import {ButtonProps} from 'antd/lib/button';
import {Button, Card, List} from 'antd';
import Avatar from '../../../../Component/Avatar';
import {Function as RouterFunction} from '../../../../Router';
import NewTabLink from '../../../../Component/NewTabLink';

interface IProps
{
    loading: boolean,
    allLoaded: boolean,
    profiles: Readonly<Profile>[],
    onNextPageButtonClick: ButtonProps['onClick'],
}

function ProfileList(props: IProps)
{
    const {loading, allLoaded, profiles, onNextPageButtonClick} = props;
    return (
        <div className={Style.ProfileList}>
            <Card title={'找到的用户'}>
                <List loading={loading}
                      loadMore={
                          <div className={Style.loadMoreButtonWrapper}>
                              <Button loading={loading} disabled={loading || allLoaded}
                                      onClick={onNextPageButtonClick}>
                                  加载更多
                              </Button>
                          </div>} dataSource={profiles}
                      renderItem={profile =>
                      {
                          const {avatar, username, nickname, email} = profile;
                          const personalCenterLink = RouterFunction.generatePersonalCenterRoute({username});
                          return (
                              <List.Item>
                                  <List.Item.Meta avatar={
                                      <NewTabLink to={personalCenterLink}>
                                          <div className={Style.avatarWrapper}>
                                              <Avatar avatar={avatar} />
                                          </div>
                                      </NewTabLink>}
                                                  title={(
                                                      <div className={Style.titleWrapper}>
                                                          <NewTabLink to={personalCenterLink}>
                                                            <span className={Style.nicknameWrapper}>
                                                                {nickname}
                                                            </span>
                                                          </NewTabLink>
                                                          <span className={Style.usernameWrapper}>
                                                              {username}
                                                          </span>
                                                      </div>)} />
                                  <a href={`mailto:${email}`}>
                                      <div className={Style.emailWrapper}>
                                          {email}
                                      </div>
                                  </a>
                              </List.Item>
                          );
                      }} />
            </Card>
        </div>
    );
}

export default React.memo(ProfileList);