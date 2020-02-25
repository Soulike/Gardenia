import React from 'react';
import Style from './Style.module.scss';
import PageTitle from '../../../../Component/PageTitle';
import CompareCard from './Component/CompareCard';

interface IProps
{

}

function Compare(props: IProps)
{
    return (
        <div className={Style.Compare}>
            <PageTitle>创建 Pull Request</PageTitle>
            <div className={Style.compareCardWrapper}>
                <CompareCard />
            </div>
        </div>
    );
}

export default React.memo(Compare);