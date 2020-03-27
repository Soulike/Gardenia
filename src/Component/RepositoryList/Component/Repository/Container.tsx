import React, {PureComponent} from 'react';
import View from './View';
import {Repository as RepositoryClass} from '../../../../Class';

interface IProps
{
    repository: RepositoryClass,
    showUsername: boolean,
}

interface IState
{

}

class Repository extends PureComponent<IProps, IState>
{
    render()
    {
        const {repository, showUsername} = this.props;
        return (<View repository={repository} showUsername={showUsername} />);
    }
}

export default Repository;