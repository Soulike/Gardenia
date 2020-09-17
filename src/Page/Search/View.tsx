import React, {ReactNode} from 'react';
import Style from './Style.module.scss';
import TypeMenu from './Component/TypeMenu';
import ProfileList from './Component/ProfileList';
import {SEARCH_TYPE} from '../../CONSTANT';
import RepositoryList from './Component/RepositoryList';

interface IProps
{
    currentType: SEARCH_TYPE,
}

function Search(props: IProps)
{
    const {currentType} = props;
    let listComponent: ReactNode;
    switch (currentType)
    {
        case SEARCH_TYPE.PROFILE:
        {
            listComponent = <ProfileList />;
            break;
        }
        case SEARCH_TYPE.REPOSITORY:
        {
            listComponent = <RepositoryList />;
            break;
        }
        default:
        {
            listComponent = null;
        }
    }

    return (
        <div className={Style.Search}>
            <div className={Style.left}>
                <TypeMenu />
            </div>
            <div className={Style.right}>
                {listComponent}
            </div>
        </div>
    );
}

export default React.memo(Search);