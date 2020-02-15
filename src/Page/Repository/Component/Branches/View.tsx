import React from 'react';
import Style from './Style.module.scss';
import {Branch} from '../../../../Class';
import BranchItem from './Component/BranchItem';
import {Spin} from 'antd';

interface IProps
{
    branches: Readonly<Branch[]>;
    loading: boolean;
}

function Branches(props: IProps)
{
    const {branches, loading} = props;
    return (
        <div className={Style.Branches}>
            <Spin spinning={loading}>
                {
                    branches.map(branch =>
                        <div className={Style.branchItemWrapper} key={branch.name}>
                            <BranchItem branch={branch} />
                        </div>)
                }
            </Spin>
        </div>
    );
}

export default React.memo(Branches);