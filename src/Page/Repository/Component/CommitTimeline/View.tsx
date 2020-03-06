import React from 'react';
import Style from './Style.module.scss';
import {Empty, Timeline} from 'antd';
import {Commit} from '../../../../Class';
import TimelineItemContent from './Component/TimelineItemContent';

interface IProps
{
    commits: Readonly<Commit[]>
}

function CommitTimeline(props: IProps)
{
    const {commits} = props;
    return (
        <div className={Style.CommitTimeline}>
            {
                commits.length !== 0 ? (
                    <Timeline pending={true}>
                        {
                            commits.map(commit =>
                                <Timeline.Item key={commit.commitHash}>
                                    <TimelineItemContent commit={commit} />
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