import React from 'react';
import Style from './Style.module.scss';
import {Function as RouterFunction} from '../../../../Router';
import {Card} from 'antd';
import AccessibilityTag from '../../../AccessibilityTag/View';
import NewTabLink from '../../../NewTabLink/View';
import {Repository as RepositoryClass} from '../../../../Class';
import StarButton from './Component/StarButton';
import ForkAmount from '../../../ForkAmount';
import LastUpdateInfo from './Component/LastUpdateInfo';

interface IProps
{
    repository: RepositoryClass,
    showUsername: boolean,
}

function Repository(props: IProps)
{
    const {repository, showUsername} = props;
    const {username, name, isPublic, description} = repository;
    return (
        <div className={Style.Repository}>
            <NewTabLink to={RouterFunction.generateRepositoryCodeRoute({username, repository: name})}>
                <Card className={Style.repository}>
                    <Card.Meta title={
                        <div className={Style.title}>
                            <div className={Style.infoWrapper}>
                                <div className={Style.tag}>
                                    <AccessibilityTag isPublic={isPublic} />
                                </div>
                                <div className={Style.name}>
                                    {
                                        showUsername ? `${username}/` : ''
                                    }
                                    {name}
                                </div>
                            </div>
                            <div className={Style.buttonWrapper}>
                                <StarButton repository={repository} />
                            </div>
                        </div>
                    } description={
                        <div>
                            {description.length === 0 ? <i>没有描述</i> : description}
                        </div>} />
                    <div className={Style.repositoryMoreInfo}>
                        <div className={Style.forkAmountWrapper}>
                            <ForkAmount repository={repository} />
                        </div>
                        <div className={Style.updateInfoWrapper}>
                            <LastUpdateInfo repository={repository} />
                        </div>
                    </div>
                </Card>
            </NewTabLink>
        </div>
    );
}

export default React.memo(Repository);