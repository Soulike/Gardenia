import React from 'react';
import Style from './Style.module.scss';
import {Select} from 'antd';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../../../Router';
import {SelectProps} from 'antd/lib/select';
import {Repository} from '../../../../../../../../Class';
import {ArrowLeftOutlined} from '@ant-design/icons';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare>
{
    sourceRepositoryBranchNames: string[];
    targetRepositoryBranchNames: string[];
    targetRepositories: Pick<Repository, 'username' | 'name'>[];
    onTargetRepositorySelectorChange: SelectProps<string>['onChange'];
    onSourceRepositoryBranchSelectorChange: SelectProps<string>['onChange'];
    onTargetRepositoryBranchSelectorChange: SelectProps<string>['onChange'];
    loading: boolean;
}

function RepositoriesSelector(props: IProps)
{
    const {
        sourceRepositoryBranchNames, targetRepositoryBranchNames,
        onSourceRepositoryBranchSelectorChange, onTargetRepositoryBranchSelectorChange,
        loading, targetRepositories, onTargetRepositorySelectorChange,
        match: {
            params: {
                sourceRepositoryUsername, sourceRepositoryName,
                sourceRepositoryBranch, targetRepositoryBranch,
                username: targetRepositoryUsername, repository: targetRepositoryName,
            },
        },
    } = props;
    return (
        <div className={Style.RepositoriesSelector}>
            <div className={Style.target}>
                <div className={Style.targetRepositorySelectWrapper}>
                    <Select loading={loading} disabled={loading}
                            onChange={onTargetRepositorySelectorChange}
                            value={`${targetRepositoryUsername}/${targetRepositoryName}`}>
                        {
                            targetRepositories.map(({username, name}) =>
                                <Select.Option value={`${username}/${name}`}
                                               key={`${username}/${name}`}>{username} / {name}
                                </Select.Option>)
                        }
                    </Select>
                </div>
                <Select loading={loading} disabled={loading}
                        onChange={onTargetRepositoryBranchSelectorChange}
                        value={targetRepositoryBranch}>
                    {
                        targetRepositoryBranchNames.map(branchName =>
                            <Select.Option value={branchName} key={branchName}>{branchName}</Select.Option>)
                    }
                </Select>
            </div>
            <div className={Style.arrow}>
                <ArrowLeftOutlined />
            </div>
            <div className={Style.source}>
                <div className={Style.sourceRepository}>
                    {sourceRepositoryUsername} / {sourceRepositoryName}
                </div>
                <Select loading={loading} disabled={loading}
                        onChange={onSourceRepositoryBranchSelectorChange}
                        value={sourceRepositoryBranch}>
                    {
                        sourceRepositoryBranchNames.map(branchName =>
                            <Select.Option value={branchName} key={branchName}>{branchName}</Select.Option>)
                    }
                </Select>
            </div>
        </div>
    );
}

export default withRouter(React.memo(RepositoriesSelector));