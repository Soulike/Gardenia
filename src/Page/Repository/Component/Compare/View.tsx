import React from 'react';
import Style from './Style.module.scss';
import PageTitle from '../../../../Component/PageTitle';
import CompareCard from './Component/CompareCard';
import CommentPoster from './Component/CommentPoster';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {Empty} from 'antd';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare> {}

function Compare(props: IProps)
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
        <div className={Style.Compare}>
            <PageTitle>创建 Pull Request</PageTitle>
            <div className={Style.compareCardWrapper}>
                <CompareCard />
            </div>
            <div className={Style.detail}>
                {
                    theSameBranch ? (<Empty description={'必须是不同分支才可创建 Pull Request'} />) : (
                        <div className={Style.commentPosterWrapper}>
                            <CommentPoster />
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default withRouter(React.memo(Compare));