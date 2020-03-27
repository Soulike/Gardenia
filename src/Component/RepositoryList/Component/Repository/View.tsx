import React from 'react';
import Style from './Style.module.scss';
import {Function as RouterFunction} from '../../../../Router';
import {Card} from 'antd';
import AccessibilityTag from '../../../AccessibilityTag/View';
import NewTabLink from '../../../NewTabLink/View';
import {Repository as RepositoryClass} from '../../../../Class';

interface IProps
{
    repository: RepositoryClass,
    showUsername: boolean,
}

function Repository(props: IProps)
{
    const {repository: {username, name, isPublic, description}, showUsername} = props;
    return (
        <div className={Style.Repository}>
            <NewTabLink to={RouterFunction.generateRepositoryCodeRoute({username, repository: name})}>
                <Card className={Style.repository}>
                    <Card.Meta title={
                        <React.Fragment>
                            <div className={Style.tag}>
                                <AccessibilityTag isPublic={isPublic} />
                            </div>
                            {
                                showUsername ? `${username}/` : ''
                            }
                            {name}
                        </React.Fragment>
                    } description={
                        <div>
                            {description.length === 0 ? <i>没有描述</i> : description}
                        </div>} />
                </Card>
            </NewTabLink>
        </div>
    );
}

export default React.memo(Repository);