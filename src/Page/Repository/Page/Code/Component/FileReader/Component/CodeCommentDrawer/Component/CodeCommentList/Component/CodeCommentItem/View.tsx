import React from 'react';
import {Card} from 'antd';
import {CodeComment} from '../../../../../../../../../../../../Class';
import CardTitle from './Component/CardTitle';
import Style from './Style.module.scss';
import CardBottom from './Component/CardBottom';

interface IProps
{
    codeComment: CodeComment
}

function CodeCommentItem(props: IProps)
{
    const {codeComment: {creatorUsername, modificationTimestamp, content, id}} = props;
    return (
        <div className={Style.CodeCommentItem}>
            <Card
                title={<CardTitle creatorUsername={creatorUsername} modificationTimestamp={modificationTimestamp} />}>
                <div className={Style.contentWrapper}>{content}</div>
                <div className={Style.bottomWrapper}>
                    <CardBottom id={id} />
                </div>
            </Card>
        </div>
    );
}

export default React.memo(CodeCommentItem);