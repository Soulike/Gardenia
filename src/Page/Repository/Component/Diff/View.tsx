import React from 'react';
import Style from './Style.module.scss';
import {FileDiff as FileDiffClass} from '../../../../Class';
import FileDiff from './Component/FileDiff';
import {DiffOutlined} from '@ant-design/icons';

interface IProps
{
    fileDiffAmount: number,
    fileDiffs: FileDiffClass[];
}

function Diff(props: IProps)
{
    const {fileDiffs, fileDiffAmount} = props;
    return (
        <div className={Style.Diff}>
            <div className={Style.diffInfo}>
                <DiffOutlined />
                共有 <strong>{fileDiffAmount} 个文件</strong>被修改。
            </div>
            <div className={Style.fileDiffsWrapper}>
                {
                    fileDiffs.map(fileDiff =>
                        <div className={Style.fileDiffWrapper} key={fileDiff.path}>
                            <FileDiff fileDiff={fileDiff} />
                        </div>)
                }
            </div>
        </div>
    );
}

export default React.memo(Diff);