import React, {PureComponent} from 'react';
import View from './View';
import nProgress from 'nprogress';

interface IProps {}

interface IState {}

class Loading extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        nProgress.start();
    }

    componentWillUnmount()
    {
        nProgress.done();
    }

    render()
    {
        return (<View />);
    }
}

export default Loading;