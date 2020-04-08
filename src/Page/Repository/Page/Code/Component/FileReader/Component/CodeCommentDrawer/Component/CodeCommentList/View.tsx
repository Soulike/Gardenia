import React from 'react';
import Style from './Style.module.scss';
import {CodeComment} from '../../../../../../../../../../Class';
import {Empty, List} from 'antd';
import CodeCommentItem from './Component/CodeCommentItem';

interface IProps
{
    codeComments: CodeComment[];
    loading: boolean;
}

function CodeCommentList(props: IProps)
{
    const {codeComments, loading} = props;
    return (
        <div className={Style.CodeCommentList}>
            <List loading={loading}
                  locale={{emptyText: <Empty description={'没有批注'} />}}
                  dataSource={codeComments}
                  renderItem={codeComment => (
                      <div className={Style.itemWrapper} key={codeComment.id}>
                          <CodeCommentItem codeComment={codeComment} />
                      </div>
                  )} />
        </div>
    );
}

export default React.memo(CodeCommentList);