import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {RouteComponentProps} from 'react-router-dom';
import CONFIG from '../../CONFIG';

interface IProps extends RouteComponentProps<{}>
{
    children: ReactNode,
}

interface IState
{

}

class Setting extends PureComponent<IProps, IState>
{
    componentDidMount()
    {
        this.setTitle();
    }

    setTitle = () =>
    {
        document.title = `个人资料编辑 - ${CONFIG.NAME}`;
    };

    render()
    {
        const {children} = this.props;
        return (<View>{children}</View>);
    }
}

export default Setting;