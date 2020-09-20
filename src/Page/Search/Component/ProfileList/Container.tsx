import React, {useEffect, useState} from 'react';
import View from './View';
import {Profile} from '../../../../Class';
import querystring from 'querystring';
import {useLocation} from 'react-router-dom';
import {Profile as ProfileApi} from '../../../../Api';
import {Interface as RouterInterface} from '../../../../Router';
import {ButtonProps} from 'antd/lib/button';
import {notification} from 'antd';

function ProfileList()
{
    const [loading, setLoading] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const AMOUNT_PER_PAGE = 20;
    const {search} = useLocation();
    const {keyword}: Partial<RouterInterface.ISearch> = querystring.decode(search.slice(1));

    useEffect(() =>
    {
        setCurrentPageNumber(0);
        setProfiles([]);
        setAllLoaded(false);
        setLoading(false);
    }, [keyword]);

    useEffect(() =>
    {
        setLoading(true);
        ProfileApi.search(keyword!, currentPageNumber * AMOUNT_PER_PAGE, AMOUNT_PER_PAGE)
            .then(profilesWrapper =>
            {
                if (profilesWrapper !== null)
                {
                    const {profiles: newProfiles} = profilesWrapper;
                    setProfiles(profiles => profiles.concat(newProfiles));
                    if (newProfiles.length < AMOUNT_PER_PAGE)
                    {
                        notification.success({message: '已加载所有搜索结果', key: 'profileList'});
                        setAllLoaded(true);
                    }
                }
                setLoading(false);
            });
    }, [keyword, currentPageNumber]);

    const onNextPageButtonClick: ButtonProps['onClick'] = () =>
    {
        if (!allLoaded)
        {
            setCurrentPageNumber(currentPageNumber + 1);
        }
    };

    return (<View loading={loading}
                  profiles={profiles}
                  allLoaded={allLoaded}
                  onNextPageButtonClick={onNextPageButtonClick} />);
}

export default React.memo(ProfileList);