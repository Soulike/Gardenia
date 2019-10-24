import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../../Router';

interface IState
{
    to: string
}

interface IProps extends RouteComponentProps<RouterInterface.RepositoryCode> {}

class PreviousFolderItem extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            to: '',
        };
    }

    componentDidMount()
    {
        this.setPreviousFolderPath();
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {path}}} = this.props;
        const {match: {params: {path: prevPath}}} = prevProps;
        if (path !== prevPath)
        {
            this.setPreviousFolderPath();
        }
    }

    setPreviousFolderPath = () =>
    {
        const {match: {params: {path}}, location: {pathname}} = this.props;
        if (path === undefined)
        {
            this.setState({
                to: pathname,
            });
        }
        else
        {
            const lastSlashIndex = pathname.lastIndexOf('/');
            this.setState({
                to: pathname.slice(0, lastSlashIndex),
            });
        }
    };

    render()
    {
        const {to} = this.state;
        return (<View to={to} />);
    }
}

export default withRouter(PreviousFolderItem);