import React from 'react';
import Style from './Style.module.scss';
import {Commit} from '../../../../../../Class';
import {Button, Icon} from 'antd';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import CopyToClipboard from 'react-copy-to-clipboard';
import {ObjectType} from '../../../../../../CONSTANT';
import {ButtonProps} from 'antd/lib/button';
import {Date} from '../../../../../../Function';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCommits>
{
    commit: Commit;
    showBody: boolean;
    onShowBodyButtonClick: ButtonProps['onClick'];
}

function TimelineItemContent(props: IProps)
{
    const {showBody, onShowBodyButtonClick, commit: {commitHash, committerName, message, body, timestamp}, match: {params: {username, repository: repositoryName}}} = props;
    return (
        <div className={Style.TimelineItemContent}>
            <div className={Style.left}>
                <div className={Style.messageWrapper}>
                    <div className={Style.message} title={message}>{message}</div>
                    {body.trim() ? <Button size={'small'} onClick={onShowBodyButtonClick}>...</Button> : null}
                </div>
                <div className={Style.commitInfo}>
                    <div className={Style.committer}>
                        <Link to={RouterFunction.generatePersonalCenterRoute({username: committerName})}>{committerName}</Link>
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
                <Button.Group className={Style.commitHash}>
                    <CopyToClipboard text={commitHash}>
                        <Button><Icon type="copy" /></Button>
                    </CopyToClipboard>
                    <Button><code>{commitHash.slice(0, 7)}</code></Button>
                </Button.Group>
                <Link to={RouterFunction.generateRepositoryCodeRoute({
                    username,
                    repository: repositoryName,
                    branch: commitHash,
                    objectType: ObjectType.TREE,
                })}>
                    <Button><Icon type="code" /></Button>
                </Link>
            </div>
        </div>
    );
}

export default React.memo(TimelineItemContent);