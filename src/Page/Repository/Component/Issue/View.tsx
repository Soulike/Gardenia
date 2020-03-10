import React from 'react';
import Style from './Style.module.scss';
import {Issue as IssueClass} from '../../../../Class';
import IssueInfo from './Component/IssueInfo';
import {Spin} from 'antd';
import Comments from './Component/Comments';

interface IProps
{
    loading: boolean;
    issue: IssueClass;
}

function Issue(props: IProps)
{
    const {issue, loading} = props;
    return (
        <div className={Style.Issue}>
            <Spin spinning={loading}>
                <div className={Style.infoWrapper}>
                    <IssueInfo issue={issue} />
                </div>
                <div className={Style.commentsWrapper}>
                    <Comments />
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(Issue);