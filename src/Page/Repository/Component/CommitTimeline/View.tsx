import React from 'react';
import Style from './Style.module.scss';
import {Timeline} from 'antd';
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
            <Timeline>
                {
                    commits.map(commit =>
                        <Timeline.Item>
                            <TimelineItemContent commit={commit} />
                        </Timeline.Item>)
                }
            </Timeline>
        </div>
    );
}

export default React.memo(CommitTimeline);