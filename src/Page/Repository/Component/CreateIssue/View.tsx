import React from 'react';
import Style from './Style.module.scss';
import TopicPoster from '../TopicPoster';
import {InputProps, TextAreaProps} from 'antd/lib/input';
import {TabsProps} from 'antd/lib/tabs';
import {ButtonProps} from 'antd/lib/button';
import PageTitle from '../../../../Component/PageTitle';

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
}

function CreateIssue(props: IProps)
{
    const {title, submitting, content, contentToPreview, onContentChange, onSubmitButtonClick, onTabChange, onTitleChange} = props;
    return (
        <div className={Style.CreateIssue}>
            <PageTitle>创建 Issue</PageTitle>
            <TopicPoster title={title}
                         content={content}
                         contentToPreview={contentToPreview}
                         onContentChange={onContentChange}
                         onSubmitButtonClick={onSubmitButtonClick}
                         onTabChange={onTabChange}
                         onTitleChange={onTitleChange}
                         submitting={submitting} buttonText={'创建 Issue'} />
        </div>
    );
}

export default React.memo(CreateIssue);