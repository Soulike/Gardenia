import React, {PureComponent} from 'react';
import View from './View';
import {Branch} from '../../../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {RepositoryInfo} from '../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryBranches> {}

interface IState
{
    branches: Readonly<Branch[]>;
    loading: boolean;
}

class Branches extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            branches: [],
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.loadBranches();
        this.setState({loading: false});
    }

    async loadBranches()
    {
        const {match: {params: {username, repositoryName}}} = this.props;
        const result = await RepositoryInfo.branches({username, name: repositoryName});
        if (result !== null)
        {
            const {branches} = result;
            this.setState({branches});
        }
    }

    render()
    {
        const {branches, loading} = this.state;
        return (<View branches={branches} loading={loading} />);
    }
}

export default withRouter(Branches);