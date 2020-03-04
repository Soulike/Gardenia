import React from 'react';
import Style from './Style.module.scss';
import {Card} from 'antd';
import RepositoriesSelector from './Component/RepositoriesSelector';
import IsMergeableIndicator from './Component/IsMergeableIndicator';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../Router';
import {PullRequestOutlined} from '@ant-design/icons';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare> {}

function CompareCard(props: IProps)
{
    const {
        match: {
            params: {
                sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                username: targetRepositoryUsername, repository: targetRepositoryName, targetRepositoryBranch,
            },
        },
    } = props;
    const theSameBranch = sourceRepositoryUsername === targetRepositoryUsername
        && sourceRepositoryName === targetRepositoryName
        && sourceRepositoryBranch === targetRepositoryBranch;

    return (
        <Card size={'small'}>
            <div className={Style.CompareCard}>
                <div className={Style.selectorWrapper}>
                    <div className={Style.iconWrapper}>
                        <PullRequestOutlined />
                    </div>
                    <div className={Style.repositoriesSelectorWrapper}>
                        <RepositoriesSelector />
                    </div>
                </div>
                {
                    theSameBranch ? null : (
                        <div className={Style.isMergeableIndicatorWrapper}>
                            <IsMergeableIndicator />
                        </div>
                    )
                }
            </div>
        </Card>
    );
}

export default withRouter(React.memo(CompareCard));