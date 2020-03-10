import React, {ReactNode} from 'react';
import Style from './Style.module.scss';
import {Alert, Button, Card, Input, Tabs} from 'antd';
import {TextAreaProps} from 'antd/lib/input';
import {TabsProps} from 'antd/lib/tabs';
import MarkdownPreviewer from '../../../../Component/MarkdownPreviewer';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    content: string;
    onContentChange: TextAreaProps['onChange'];
    onTabChange: TabsProps['onChange'];
    contentToPreview: string;
    onSubmitButtonClick: ButtonProps['onClick'];
    submitting: boolean;
    buttonText?: ReactNode;
    placeholder?: TextAreaProps['placeholder']
}

function CommentPoster(props: IProps)
{
    const {
        content, onContentChange, onTabChange, contentToPreview, submitting, onSubmitButtonClick, buttonText, placeholder,
    } = props;
    return (
        <Card size={'small'}>
            <div className={Style.CommentPoster}>
                <div className={Style.contentWrapper}>
                    <Tabs defaultActiveKey={'write'} type={'card'} onChange={onTabChange}>
                        <Tabs.TabPane key={'write'} tab={'编辑'}>
                            <Input.TextArea disabled={submitting}
                                            className={Style.content}
                                            value={content}
                                            onChange={onContentChange} placeholder={placeholder} />
                            <div className={Style.tipWrapper}>
                                <Alert type={'info'} message={'支持 Markdown 语法。'} showIcon={true} />
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
                            onClick={onSubmitButtonClick}>{buttonText ? buttonText : '提交'}</Button>
                </div>
            </div>
        </Card>
    );
}

export default React.memo(CommentPoster);