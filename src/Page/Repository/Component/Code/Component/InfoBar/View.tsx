import React from 'react';
import Style from './Style.module.scss';
import {Icon} from 'antd';

interface IProps
{
    commitCount: number,
    branchCount: number,
}

function InfoBar(props: Readonly<IProps>)
{
    const {commitCount, branchCount} = props;
    return (
        <div className={Style.InfoBar}>
            <div className={Style.info}>
                <Icon type="clock-circle" /> {commitCount} 次提交
            </div>
            <div className={Style.info}>
                <Icon type="branches" /> {branchCount} 个分支
            </div>
        </div>
    );
}

export default React.memo(InfoBar);