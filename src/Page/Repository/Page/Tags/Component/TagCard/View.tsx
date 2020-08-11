import React from 'react';
import Style from './Style.module.scss';
import {Tag} from '../../../../../../Class';
import {Button, Card, Tooltip} from 'antd';
import {Date} from '../../../../../../Function';
import {ClockCircleOutlined, NodeIndexOutlined, SmallDashOutlined} from '@ant-design/icons';
import NewTabLink from '../../../../../../Component/NewTabLink';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {ButtonProps} from 'antd/lib/button';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryTags>
{
    tag: Tag,
    showBody: boolean,
    onShowBodyButtonClick: ButtonProps['onClick'],
}

function TagCard(props: IProps)
{
    const {
        showBody,
        tag: {name, annotation: {subject, body}, lastCommit: {commitHash, timestamp}},
        match: {params: {username, repository}},
        onShowBodyButtonClick,
    } = props;
    return (
        <div className={Style.TagCard}>
            <Card title={name}>
                <div className={Style.content}>
                    <div className={Style.top}>
                        <div className={Style.subjectWrapper}>{subject}</div>
                        {
                            body.length > 0 ? (
                                <div className={Style.showBodyButtonWrapper}>
                                    <Button size={'small'} onClick={onShowBodyButtonClick}>
                                        <SmallDashOutlined />
                                    </Button>
                                </div>) : null
                        }
                    </div>
                    {
                        showBody ? (
                            <div className={Style.annotationBodyWrapper}>
                                <pre className={Style.annotationBody}>
                                {body}
                            </pre>
                            </div>) : null
                    }
                    <div className={Style.bottom}>
                        <Tooltip title={Date.parseTimestampToDate(timestamp)}>
                            <span className={Style.timeWrapper}>
                                <span className={Style.iconWrapper}>
                                    <ClockCircleOutlined />
                                </span>
                                {Date.parseTimestampToDifference(timestamp)}
                            </span>
                        </Tooltip>
                        <span className={Style.commitHashWrapper}>
                            <NewTabLink to={RouterFunction.generateRepositoryCommitRoute(
                                {username, repository, commitHash},
                            )}>
                            <span className={Style.iconWrapper}>
                                <NodeIndexOutlined />
                            </span>

                                {commitHash.slice(0, 7)}
                            </NewTabLink>
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default React.memo(withRouter(TagCard));