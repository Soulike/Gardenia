import React, {PureComponent} from 'react';
import View from './View';
import CONFIG from '../../CONFIG';

interface IProps {}

interface IState {}

class NotFound extends PureComponent<IProps, IState>
{
    componentDidMount()
    {
        document.title = `找不到页面 - ${CONFIG.NAME}`;
    }

    render()
    {
        return (<View />);
    }
}

export default NotFound;