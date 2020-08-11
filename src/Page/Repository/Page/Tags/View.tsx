import React from 'react';
import Style from './Style.module.scss';
import {Button, Card, Empty, Spin} from 'antd';
import {TagsOutlined} from '@ant-design/icons';
import {Tag} from '../../../../Class';
import TagCard from './Component/TagCard';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    tags: Tag[],
    loading: boolean,
    onLoadMoreButtonClick: ButtonProps['onClick'],
}

function Tags(props: IProps)
{
    const {tags, loading, onLoadMoreButtonClick} = props;
    return (
        <div className={Style.Tags}>
            <Card title={<span><TagsOutlined /> 标签（Tags）</span>}>
                <Spin spinning={loading}>
                    {
                        tags.length === 0 ? <Empty description={'当前仓库没有标签'} />
                            : (<>
                                <div className={Style.tagsWrapper}>
                                    {
                                        tags.map(tag => (
                                            <div className={Style.tagCardWrapper} key={tag.name}>
                                                <TagCard tag={tag} />
                                            </div>))
                                    }
                                </div>
                                <div className={Style.showMoreButtonWrapper}>
                                    <Button type={'primary'} loading={loading} disabled={loading}
                                            onClick={onLoadMoreButtonClick}>
                                        加载更多
                                    </Button>
                                </div>
                            </>)
                    }
                </Spin>
            </Card>
        </div>
    );
}

export default React.memo(Tags);