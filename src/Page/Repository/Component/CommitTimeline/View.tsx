import React from 'react';
import Style from './Style.module.scss';
import {Empty, Timeline} from 'antd';
import {Commit, Repository} from '../../../../Class';
import TimelineItemContent from './Component/TimelineItemContent';

interface IProps
{
    repository: Pick<Repository, 'username' | 'name'>,  // 指定这些提交历史是哪一个仓库的
    commits: Readonly<Commit[]>,
}

function CommitTimeline(props: IProps)
{
    const {commits, repository} = props;
    return (
        <div className={Style.CommitTimeline}>
            {
                commits.length !== 0 ? (
                    <Timeline pending={true}>
                        {
                            commits.map(commit =>
                                <Timeline.Item key={commit.commitHash}>
                                    <TimelineItemContent commit={commit} repository={repository} />
                                </Timeline.Item>)
                        }
                    </Timeline>
                ) : (
                    <Empty description={'没有提交记录'} />
                )
            }
        </div>
    );
}

export default React.memo(CommitTimeline);