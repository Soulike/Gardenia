import React from 'react';
import Style from './Style.module.scss';
import PageTitle from '../../../../Component/PageTitle';
import CompareCard from './Component/CompareCard';
import CommentPoster from './Component/CommentPoster';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {Empty, Tabs} from 'antd';
import PullRequestCommits from './Component/PullRequestCommits';
import PullRequestDiffs from './Component/PullRequestDiffs';

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
            <div className={Style.detailWrapper}>
                {
                    theSameBranch ? (<Empty description={'必须是不同分支才可创建 Pull Request'} />) : (
                        <div className={Style.detail}>
                            <div className={Style.commentPosterWrapper}>
                                <CommentPoster />
                            </div>
                            <div className={Style.detailTabs}>
                                <Tabs defaultActiveKey={'commits'} type={'card'}>
                                    <Tabs.TabPane tab={'提交'} key={'commits'}>
                                        <div className={Style.pullRequestCommitsWrapper}>
                                            <PullRequestCommits />
                                        </div>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab={'修改的文件'} key={'fileChanged'}>
                                        <div className={Style.pullRequestFileDiffsWrapper}>
                                            <PullRequestDiffs />
                                        </div>
                                    </Tabs.TabPane>
                                </Tabs>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default withRouter(React.memo(Compare));