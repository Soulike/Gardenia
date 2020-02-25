import React from 'react';
import Style from './Style.module.scss';
import {Card, Icon} from 'antd';
import RepositoriesSelector from './Component/RepositoriesSelector';
import IsMergeableIndicator from './Component/IsMergeableIndicator';

function CompareCard()
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
                <div className={Style.isMergeableIndicatorWrapper}>
                    <IsMergeableIndicator />
                </div>
            </div>
        </Card>
    );
}

export default React.memo(CompareCard);