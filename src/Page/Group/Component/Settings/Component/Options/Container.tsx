import React, {PureComponent} from 'react';
import View from './View';

interface IProps {}

interface IState {}

class Options extends PureComponent<Readonly<IProps>, IState>
{
    render()
    {
        return (<View />);
    }
}

export default Options;