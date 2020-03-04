import React from 'react';
import Style from './Style.module.scss';
import {Spin, Tabs} from 'antd';
import {PullRequest as PullRequestClass} from '../../../../Class';
import PullRequestInfo from './Component/PullRequestInfo';
import Commits from './Component/Commits';
import FileChanged from './Component/FileChanged';
import Comments from './Component/Comments';
import {BarsOutlined, DiffOutlined, MessageOutlined} from '@ant-design/icons';

interface IProps
{
    loading: boolean,
    pullRequest: PullRequestClass,
}

function PullRequest(props: IProps)
{
    const {loading, pullRequest} = props;
    return (
        <div className={Style.PullRequest}>
            <Spin spinning={loading}>
                <div className={Style.infoWrapper}>
                    <PullRequestInfo pullRequest={pullRequest} />
                </div>
                <div className={Style.tabsWrapper}>
                    <Tabs type={'card'} defaultActiveKey={'comments'}>
                        <Tabs.TabPane key={'comments'} tab={<div><MessageOutlined />讨论</div>}>
                            <div className={Style.commentsWrapper}>
                                <Comments />
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane key={'commits'}
                                      tab={<div><BarsOutlined />提交</div>}>
                            <div className={Style.commitsWrapper}>
                                <Commits />
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane key={'fileChanged'}
                                      tab={<div><DiffOutlined />文件修改</div>}>
                            <div className={Style.fileChangedWrapper}>
                                <FileChanged />
                            </div>
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(PullRequest);