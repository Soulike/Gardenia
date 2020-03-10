import React from 'react';
import Style from './Style.module.scss';
import {Issue as IssueClass} from '../../../../Class';
import IssueInfo from './Component/IssueInfo';
import {Spin} from 'antd';
import Comments from './Component/Comments';
import {ISSUE_STATUS} from '../../../../CONSTANT';
import CommentPoster from './Component/CommentPoster/Container';

interface IProps
{
    loading: boolean;
    issue: IssueClass;
}

function Issue(props: IProps)
{
    const {issue, loading} = props;
    const {status} = issue;
    return (
        <div className={Style.Issue}>
            <Spin spinning={loading}>
                <div className={Style.infoWrapper}>
                    <IssueInfo issue={issue} />
                </div>
                <div className={Style.commentsWrapper}>
                    <Comments />
                </div>
                {
                    status === ISSUE_STATUS.OPEN ?
                        (<div className={Style.commentPosterWrapper}>
                            <CommentPoster />
                        </div>) : null
                }
            </Spin>
        </div>
    );
}

export default React.memo(Issue);