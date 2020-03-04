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
        fileDiff: {path, isNew, isDeleted, isBinary, blockDiffs},
        showCode,
        onShowCodeButtonClick,
    } = props;
    return (
        <div className={Style.FileDiff}>
            <div className={Style.header} style={showCode ? {} : {borderRadius: '5px'}}>
                <div className={Style.showCodeButtonWrapper}>
                    <Button disabled={isBinary}
                            size={'small'}
                            className={Style.showCodeButton}
                            onClick={onShowCodeButtonClick}>
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
                    {
                        isBinary ? <Tag color={'blue'}>二进制文件</Tag> : null
                    }
                </div>
            </div>
            <div className={Style.blockDiffsWrapper} style={showCode ? {} : {position: 'fixed', top: '99999999px'}}>
                {
                    blockDiffs.map(blockDiff =>
                        <BlockDiff blockDiff={blockDiff} key={blockDiff.info} />)
                }
            </div>
        </div>
    );
}

export default React.memo(FileDiff);