import React, {PureComponent} from 'react';
import View from './View';
import {ButtonProps} from 'antd/lib/button';
import {Interface as RouterInterface} from '../../../../../../../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings> {}

interface IState
{

}

class DeleteRepositoryItem extends PureComponent<Readonly<IProps>, IState>
{
    onButtonClick: ButtonProps['onClick'] = async () =>
    {

    };

    render()
    {
        return (<View onButtonClick={this.onButtonClick} />);
    }
}

export default withRouter(DeleteRepositoryItem);