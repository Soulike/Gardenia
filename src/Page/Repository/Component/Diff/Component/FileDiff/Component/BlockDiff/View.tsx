import React from 'react';
import Style from './Style.module.scss';
import Code from './Component/Code';
import {BlockDiff as BlockDiffClass} from '../../../../../../../../Class';
import {notification} from 'antd';

interface IProps
{
    blockDiff: BlockDiffClass;
}

function BlockDiff(props: IProps)
{
    const {blockDiff: {info, code}} = props;
    const {prevStartLineNumber, afterStartLineNumber} = decodeInfoString(info);
    return (
        <div className={Style.BlockDiff}>
            <div className={Style.infoWrapper}>
                {info}
            </div>
            <div className={Style.codeWrapper}>
                <Code code={code}
                      prevStartLineNumber={prevStartLineNumber}
                      afterStartLineNumber={afterStartLineNumber} />
            </div>
        </div>
    );
}

function decodeInfoString(info: string): { prevStartLineNumber: number, afterStartLineNumber: number }
{
    const REGEX = /^(@@\s-(\d+)(?:,\d+)?\s\+(\d+)(?:,\d+)?\s@@)(?:.+)?$/;
    const result = REGEX.exec(info);
    if (result !== null)
    {
        const [, , prevStartLineNumber, afterStartLineNumber] = result;
        return {
            prevStartLineNumber: Number.parseInt(prevStartLineNumber),
            afterStartLineNumber: Number.parseInt(afterStartLineNumber),
        };
    }
    else
    {
        notification.error({message: '代码差分信息错误'});
        throw new Error('代码差分信息错误');
    }
}

export default React.memo(BlockDiff);