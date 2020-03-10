import React from 'react';
import Style from './Style.module.scss';
import {Issue as IssueClass} from '../../../../../../Class';
import Issue from './Component/Issue';
import {Empty} from 'antd';

interface IProps
{
    issues: IssueClass[];
}

function IssueList(props: IProps)
{
    const {issues} = props;
    return (
        <div className={Style.IssueList}>
            {
                issues.length > 0 ?
                    issues.map(issue => <Issue issue={issue} key={issue.id} />) :
                    <div className={Style.emptyWrapper}><Empty description={'没有符合条件的 Issue'} /></div>
            }
        </div>);
}

export default React.memo(IssueList);