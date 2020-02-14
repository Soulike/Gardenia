import React from 'react';
import Style from './Style.module.scss';
import {FileDiff as FileDiffClass} from '../../../../../../Class';
import BlockDiff from './Component/BlockDiff';
import {Button, Icon, Tag, Tooltip} from 'antd';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    fileDiff: FileDiffClass;
    showCode: boolean;
    onShowCodeButtonClick: ButtonProps['onClick'];
}

function FileDiff(props: IProps)
{
    const {
        fileDiff: {path, isNew, isDeleted, blockDiffs},
        showCode,
        onShowCodeButtonClick,
    } = props;
    return (
        <div className={Style.FileDiff}>
            <div className={Style.header} style={{borderBottom: showCode ? '1px solid #CCC' : ''}}>
                <div className={Style.showCodeButtonWrapper}>
                    <Button size={'small'} className={Style.showCodeButton} onClick={onShowCodeButtonClick}>
                        {showCode ? <Icon type="down" /> : <Icon type="right" />}
                    </Button>
                </div>
                <Tooltip title={path}>
                    <div className={Style.path}>{path}</div>
                </Tooltip>
                <div className={Style.tag}>
                    {
                        isNew ? <Tag color={'green'}>新文件</Tag> : null
                    }
                    {
                        isDeleted ? <Tag color={'red'}>已被删除</Tag> : null
                    }
                </div>
            </div>
            {
                showCode ? (
                    <div className={Style.blockDiffsWrapper}>
                        {
                            blockDiffs.map(blockDiff =>
                                <BlockDiff blockDiff={blockDiff} key={blockDiff.info} />)
                        }
                    </div>
                ) : null
            }
        </div>
    );
}

export default React.memo(FileDiff);