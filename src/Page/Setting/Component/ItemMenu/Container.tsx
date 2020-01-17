import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';

interface IProps extends RouteComponentProps {}

interface IState {}

class ItemMenu extends PureComponent<IProps, IState>
{
    render()
    {
        const {location: {pathname}} = this.props;
        return (<View currentPageRoute={pathname} />);
    }
}

export default withRouter(ItemMenu);