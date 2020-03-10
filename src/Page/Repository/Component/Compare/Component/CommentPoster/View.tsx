import React from 'react';
import Style from './Style.module.scss';
import {Alert, Button, Card, Input, Tabs} from 'antd';
import {InputProps, TextAreaProps} from 'antd/lib/input';
import {TabsProps} from 'antd/lib/tabs';
import MarkdownPreviewer from '../../../../../../Component/MarkdownPreviewer';
import {ButtonProps} from 'antd/lib/button';

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

function CommentPoster(props: IProps)
{
    const {
        title, onTitleChange,
        content, onContentChange, onTabChange, contentToPreview, submitting, onSubmitButtonClick,
    } = props;
    return (
        <Card size={'small'}>
            <div className={Style.CommentPoster}>
                <div className={Style.titleWrapper}>
                    <Input placeholder={'标题（必填）'} size={'large'} autoFocus={true}
                           value={title} onChange={onTitleChange} disabled={submitting} />
                </div>
                <div className={Style.contentWrapper}>
                    <Tabs defaultActiveKey={'write'} type={'card'} onChange={onTabChange}>
                        <Tabs.TabPane key={'write'} tab={'编辑'}>
                            <Input.TextArea placeholder={'补充说明（选填）'} disabled={submitting}
                                            className={Style.content}
                                            value={content}
                                            onChange={onContentChange} />
                            <div className={Style.tipWrapper}>
                                <Alert type={'info'} message={'补充说明支持 Markdown 语法。'} showIcon={true} />
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane key={'preview'} tab={'预览'}>
                            <div className={Style.previewWrapper}>
                                <MarkdownPreviewer markdown={contentToPreview} loading={submitting} />
                            </div>
                        </Tabs.TabPane>
                    </Tabs>
                </div>
                <div className={Style.buttonWrapper}>
                    <Button loading={submitting}
                            disabled={submitting}
                            size={'large'}
                            type={'primary'}
                            onClick={onSubmitButtonClick}>创建 Pull
                                                          Request</Button>
                </div>
            </div>
        </Card>
    );
}

export default React.memo(CommentPoster);