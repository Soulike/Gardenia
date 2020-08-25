import React from 'react';
import Style from './Style.module.scss';
import {Commit, Repository} from '../../../../../../Class';
import {Button, Space} from 'antd';
import {Function as RouterFunction} from '../../../../../../Router';
import CopyToClipboard from 'react-copy-to-clipboard';
import {ObjectType} from '../../../../../../CONSTANT';
import {ButtonProps} from 'antd/lib/button';
import {Date} from '../../../../../../Function';
import {CodeOutlined, CopyOutlined} from '@ant-design/icons';
import PersonalCenterLink from '../../../../../../Component/PersonalCenterLink';
import NewTabLink from '../../../../../../Component/NewTabLink';

interface IProps
{
    repository: Pick<Repository, 'username' | 'name'>;
    commit: Commit;
    showBody: boolean;
    onShowBodyButtonClick: ButtonProps['onClick'];
}

function TimelineItemContent(props: IProps)
{
    const {
        showBody, onShowBodyButtonClick,
        commit: {commitHash, committerName, message, body, timestamp, committerEmail},
        repository: {username, name: repositoryName},
    } = props;
    return (
        <div className={Style.TimelineItemContent}>
            <div className={Style.left}>
                <div className={Style.messageWrapper}>
                    <div className={Style.message} title={message}>{message}</div>
                    {body.trim() ? <Button size={'small'} onClick={onShowBodyButtonClick}>...</Button> : null}
                </div>
                <div className={Style.commitInfo}>
                    <div className={Style.committer}>
                        <PersonalCenterLink committerEmail={committerEmail} committerName={committerName} />
                    </div>
                    <div className={Style.commitTime}>
                        在 {Date.parseTimestampToDate(timestamp)} 提交
                    </div>
                </div>
                <pre className={Style.body} style={{display: showBody ? 'block' : 'none'}}>
                    {body}
                </pre>
            </div>
            <div className={Style.right}>
                <Space className={Style.commitHash} size={-1}>
                    <CopyToClipboard text={commitHash}>
                        <Button><CopyOutlined /></Button>
                    </CopyToClipboard>
                    <Button>
                        <NewTabLink to={RouterFunction.generateRepositoryCommitRoute({
                            username,
                            repositoryName,
                            commitHash,
                        })}>
                            <code>{commitHash.slice(0, 7)}</code>
                        </NewTabLink>
                    </Button>
                </Space>
                <NewTabLink to={RouterFunction.generateRepositoryCodeRoute({
                    username,
                    repositoryName,
                    commitHash,
                    objectType: ObjectType.TREE,
                })}>
                    <Button><CodeOutlined /></Button>
                </NewTabLink>
            </div>
        </div>
    );
}

export default React.memo(TimelineItemContent);