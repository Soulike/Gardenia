import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG, Interface as RouterInterface} from '../../../../Router';

const {PAGE_ID_TO_ROUTE, PAGE_ID} = CONFIG;

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCompare> {}

interface IState {}

class Compare extends PureComponent<IProps, IState>
{
    componentDidMount()
    {
        this.checkURLParameters();
    }

    checkURLParameters = () =>
    {
        const {
            match: {
                params: {
                    sourceRepositoryUsername, sourceRepositoryName,
                    sourceRepositoryBranch, targetRepositoryBranch,
                },
            },
            history,
        } = this.props;
        if (sourceRepositoryUsername === undefined || sourceRepositoryName === undefined
            || sourceRepositoryBranch === undefined || targetRepositoryBranch === undefined)
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    };

    render()
    {
        return (<View />);
    }
}

export default withRouter(Compare);