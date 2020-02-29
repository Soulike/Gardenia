import React from 'react';
import Style from './Style.module.scss';
import {Spin} from 'antd';
import {PullRequest as PullRequestClass, PullRequestComment} from '../../../../Class';
import PullRequestInfo from './Component/PullRequestInfo';

interface IProps
{
    loading: boolean,
    pullRequest: PullRequestClass,
    comments: PullRequestComment[],
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
            </Spin>
        </div>
    );
}

export default React.memo(PullRequest);