import React, {PureComponent} from 'react';
import View from './View';
import {Repository} from '../../../../Class';
import {Interface as RouterInterface} from '../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Repository as RepositoryApi} from '../../../../Api';
import {ButtonProps} from 'antd/lib/button';

interface IProps extends RouteComponentProps<RouterInterface.IPersonalCenter> {}

interface IState
{
    repositories: Repository[],
    loading: boolean,
    pageNumber: number,
    hasNextPage: boolean,
    hasPrevPage: boolean,
}

class Repositories extends PureComponent<Readonly<IProps>, IState>
{
    private static PAGE_SIZE = 10;

    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            repositories: [],
            loading: true,
            pageNumber: 1,
            hasNextPage: true,
            hasPrevPage: false,
        };
    }

    async componentDidMount()
    {
        await this.loadRepositories();
        const {repositories} = this.state;
        if (repositories.length < Repositories.PAGE_SIZE)
        {
            this.setState({hasNextPage: false});
        }
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username}}} = this.props;
        const {match: {params: {username: prevUsername}}} = prevProps;
        if (username !== prevUsername)
        {
            await this.componentDidMount();
        }
    }

    loadRepositories = async () =>
    {
        const {match: {params: {username}}} = this.props;
        const {pageNumber} = this.state;
        this.setState({loading: true});
        const repositories = await RepositoryApi.getRepositories(
            (pageNumber - 1) * Repositories.PAGE_SIZE,
            pageNumber * Repositories.PAGE_SIZE,
            username);
        if (repositories !== null)
        {
            this.setState({repositories: [...repositories]});
        }
        this.setState({loading: false});
    };

    onNextPageButtonClick: ButtonProps['onClick'] = async () =>
    {
        const {repositories: prevRepositories, hasNextPage} = this.state;
        if (hasNextPage && prevRepositories.length === Repositories.PAGE_SIZE)
        {
            await this.setToNextPage();
            await this.loadRepositories();
        }
        const {repositories} = this.state;
        if (repositories.length < Repositories.PAGE_SIZE)
        {
            this.setState({hasNextPage: false});
        }

        if (repositories.length === 0)
        {
            this.setState({repositories: prevRepositories});
            await this.setToPrevPage();
        }
        else
        {
            this.setState({hasPrevPage: true});
            this.scrollToTop();
        }
    };

    onPrevPageButtonClick: ButtonProps['onClick'] = async () =>
    {
        const {pageNumber} = this.state;
        if (pageNumber > 1)
        {
            await this.setToPrevPage();
            await this.loadRepositories();
            this.setState({hasNextPage: true});
            this.scrollToTop();
        }

        if (pageNumber === 2)
        {
            this.setState({hasPrevPage: false});
        }
    };

    setToNextPage = async () =>
    {
        return new Promise(resolve =>
        {
            const {pageNumber} = this.state;
            this.setState({pageNumber: pageNumber + 1}, resolve);
        });
    };

    setToPrevPage = async () =>
    {
        return new Promise(resolve =>
        {
            const {pageNumber} = this.state;
            if (pageNumber > 0)
            {
                this.setState({pageNumber: pageNumber - 1}, resolve);
            }
            else
            {
                resolve();
            }
        });
    };

    scrollToTop = () =>
    {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    render()
    {
        const {repositories, loading, hasNextPage, hasPrevPage} = this.state;
        return (<View repositories={repositories}
                      loading={loading}
                      onPrevPageButtonClick={this.onPrevPageButtonClick}
                      onNextPageButtonClick={this.onNextPageButtonClick}
                      hasNextPage={hasNextPage}
                      hasPrevPage={hasPrevPage} />);
    }
}

export default withRouter(Repositories);