import React, {ReactNode} from 'react';
import Style from './Style.module.scss';
import {Card, Input} from 'antd';
import {InputProps, TextAreaProps} from 'antd/lib/input';
import {TabsProps} from 'antd/lib/tabs';
import {ButtonProps} from 'antd/lib/button';
import CommentPoster from '../CommentPoster';

interface IProps
{
    title: string;
    onTitleChange: InputProps['onChange'];
    content: string;
    onContentChange: TextAreaProps['onChange'];
    onTabChange: TabsProps['onChange'];
    contentToPreview: string;
    onSubmitButtonClick: ButtonProps['onClick'];
    submitting: boolean;
    buttonText?: ReactNode;
}

function TopicPoster(props: IProps)
{
    const {
        title, onTitleChange,
        content, onContentChange, onTabChange, contentToPreview, submitting, onSubmitButtonClick, buttonText,
    } = props;
    return (
        <Card size={'small'}>
            <div className={Style.TopicPoster}>
                <div className={Style.titleWrapper}>
                    <Input placeholder={'标题（必填）'} size={'large'} autoFocus={true}
                           value={title} onChange={onTitleChange} disabled={submitting} maxLength={255} />
                </div>
                <div className={Style.commentPosterWrapper}>
                    <CommentPoster placeholder={'补充说明（选填）'}
                                   content={content}
                                   buttonText={buttonText}
                                   onContentChange={onContentChange}
                                   onSubmitButtonClick={onSubmitButtonClick}
                                   onTabChange={onTabChange}
                                   submitting={submitting}
                                   contentToPreview={contentToPreview} />
                </div>
            </div>
        </Card>
    );
}

export default React.memo(TopicPoster);