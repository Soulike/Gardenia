import React from 'react';
import Style from './Style.module.scss';
import {Commit} from '../../../../../../Class';
import {Date} from '../../../../../../Function';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../../../../../Router';
import {ObjectType} from '../../../../../../CONSTANT';
import {Button} from 'antd';
import PersonalCenterLink from '../../../../../../Component/PersonalCenterLink';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCommit>
{
    commit: Commit;
}

function CommitInfoCard(props: IProps)
{
    const {
        commit: {message, body, committerName, timestamp, commitHash, committerEmail},
        match: {params: {username, repository: repositoryName}},
    } = props;
    return (
        <div className={Style.CommitInfoCard}>
            <div className={Style.messageWrapper}>
                <div className={Style.message}>{message}</div>
                {
                    body.length ? <pre className={Style.body}>{body}</pre> : null
                }
            </div>
            <div className={Style.infoWrapper}>
                <div className={Style.info}>
                    <div className={Style.committerWrapper}>
                        <PersonalCenterLink committerEmail={committerEmail} committerName={committerName} />
                    </div>
                    在 {Date.parseTimestampToDifference(timestamp)}提交
                </div>
                <div className={Style.hashWrapper}>
                    <Link className={Style.hash}
                          to={RouterFunction.generateRepositoryCodeRoute({
                              username,
                              repository: repositoryName,
                              branch: commitHash,
                              objectType: ObjectType.TREE,
                          })}>
                        <Button size={'small'}>
                            <code>{commitHash}</code>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>);
}

export default withRouter(React.memo(CommitInfoCard));