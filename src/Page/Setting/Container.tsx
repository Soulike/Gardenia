import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {RouteComponentProps} from 'react-router-dom';
import * as CONFIG from '../../CONFIG';
import {IState as StoreState} from '../../Store';
import {connect} from 'react-redux';

interface IProps extends RouteComponentProps
{
    children: ReactNode,
    isLoggedIn: boolean,
}

interface IState {}

class Setting extends PureComponent<IProps, IState>
{
    componentDidMount()
    {
        this.setTitle();
    }

    setTitle = () =>
    {
        document.title = `设置 - ${CONFIG.NAME}`;
    };

    render()
    {
        const {children} = this.props;
        return (<View>{children}</View>);
    }
}

const mapStateToProps = (state: StoreState) =>
{
    const {Root: {isLoggedIn}} = state;
    return {isLoggedIn};
};

export default connect(mapStateToProps)(Setting);