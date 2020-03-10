import React from 'react';
import Style from './Style.module.scss';
import PageTitle from '../../../../Component/PageTitle';
import CompareCard from './Component/CompareCard';
import PullRequestPoster from './Component/PullRequestPoster';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {Empty, Spin, Tabs, Tag} from 'antd';
import PullRequestCommits from './Component/PullRequestCommits';
import PullRequestDiffs from './Component/PullRequestDiffs';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare>
{
    commitAmount: number,
    fileDiffAmount: number,
    loading: boolean,
}

function Compare(props: IProps)
{
    const {
        match: {
            params: {
                sourceRepositoryUsername, sourceRepositoryName, sourceRepositoryBranch,
                username: targetRepositoryUsername, repository: targetRepositoryName, targetRepositoryBranch,
            },
        },
        commitAmount,
        fileDiffAmount,
        loading,
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
                <Spin spinning={loading}>
                    {
                        theSameBranch ? (<Empty description={'必须是不同分支才可创建 Pull Request'} />) : (
                            <div className={Style.detail}>
                                <div className={Style.commentPosterWrapper}>
                                    <PullRequestPoster />
                                </div>
                                <div className={Style.detailTabs}>
                                    <Tabs defaultActiveKey={'commits'} type={'card'}>
                                        <Tabs.TabPane tab={<>提交<Tag className={Style.tag}>{commitAmount}</Tag></>}
                                                      key={'commits'}>
                                            <div className={Style.pullRequestCommitsWrapper}>
                                                <PullRequestCommits />
                                            </div>
                                        </Tabs.TabPane>
                                        <Tabs.TabPane tab={<>修改的文件<Tag className={Style.tag}>{fileDiffAmount}</Tag></>}
                                                      key={'fileChanged'}>
                                            <div className={Style.pullRequestFileDiffsWrapper}>
                                                <PullRequestDiffs />
                                            </div>
                                        </Tabs.TabPane>
                                    </Tabs>
                                </div>
                            </div>
                        )
                    }
                </Spin>
            </div>
        </div>
    );
}

export default withRouter(React.memo(Compare));