import React from 'react';
import Style from './Style.module.scss';
import {Profile} from '../../../../Class';
import {ButtonProps} from 'antd/lib/button';
import {Button, Card, List} from 'antd';
import ProfileItem from './Component/ProfileItem';

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
                      renderItem={profile => <ProfileItem profile={profile} />} />
            </Card>
        </div>
    );
}

export default React.memo(ProfileList);