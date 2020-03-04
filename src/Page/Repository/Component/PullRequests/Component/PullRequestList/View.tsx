import React from 'react';
import Style from './Style.module.scss';
import {PullRequest as PullRequestClass} from '../../../../../../Class';
import PullRequest from './Component/PullRequest';
import {Empty} from 'antd';

interface IProps
{
    pullRequests: PullRequestClass[]
}

function PullRequestList(props: IProps)
{
    const {pullRequests} = props;
    return (
        <div className={Style.PullRequests}>
            {
                pullRequests.length > 0
                    ? pullRequests.map(pullRequest => <PullRequest pullRequest={pullRequest} key={pullRequest.id} />)
                    : <div className={Style.emptyWrapper}><Empty description={'没有符合条件的 Pull Request'} /></div>
            }
        </div>
    );
}

export default React.memo(PullRequestList);