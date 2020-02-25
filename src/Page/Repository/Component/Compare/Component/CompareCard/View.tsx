import React from 'react';
import Style from './Style.module.scss';
import {Card, Icon} from 'antd';
import RepositoriesSelector from './Component/RepositoriesSelector';

interface IProps
{

}

function CompareCard(props: IProps)
{
    return (
        <Card size={'small'}>
            <div className={Style.CompareCard}>
                <div className={Style.selectorWrapper}>
                    <div className={Style.iconWrapper}>
                        <Icon type="pull-request" />
                    </div>
                    <div className={Style.repositoriesSelectorWrapper}>
                        <RepositoriesSelector />
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default React.memo(CompareCard);