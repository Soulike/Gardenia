import React, {PureComponent} from 'react';
import View from './View';
import {Group} from '../../../../Class';
import {Interface as RouterInterface} from '../../../../Router';
import {RepositoryInfo as RepositoryInfoApi} from '../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';

interface IProps extends RouteComponentProps<RouterInterface.IRepositorySettings> {}

interface IState
{
    groups: Group[],
    loading: boolean,
}

class Groups extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            groups: [],
            loading: true,
        };
    }

    async componentDidMount()
    {
        await this.loadGroups();
    }

    loadGroups = async () =>
    {
        const {match: {params: {username, repository: name}}} = this.props;
        this.setState({loading: true});
        const groups = await RepositoryInfoApi.groups({username, name});
        if (groups !== null)
        {
            this.setState({groups});
        }
        this.setState({loading: false});
    };

    render()
    {
        const {groups, loading} = this.state;
        return (<View groups={groups} loading={loading} />);
    }
}

export default withRouter(Groups);