import React, {PureComponent} from 'react';
import View from './View';
import {Repository} from '../../../../Class';
import {ButtonProps} from 'antd/lib/button';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {promisify} from 'util';
import {Star as StarApi} from '../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IPersonalCenter> {}

interface IState
{
    loading: boolean,
    repositories: Repository[],
    repositoryAmount: number,
    pageNumber: number,
}

class Stars extends PureComponent<IProps, IState>
{
    private static AMOUNT_PER_PAGE = 20;
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            loading: false,
            repositories: [],
            repositoryAmount: 0,
            pageNumber: 0,
        };
    }

    async componentDidMount()
    {
        await this.init();
        await this.setStatePromise({loading: true});
        await Promise.all([
            this.loadRepositoryAmount(),
            this.loadMoreRepositories(),
        ]);
        await this.setStatePromise({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username}}} = this.props;
        const {match: {params: {username: prevUsername}}} = this.props;
        if (username !== prevUsername)
        {
            await this.componentDidMount();
        }
    }

    init = async () =>
    {
        await this.setStatePromise({
            loading: false,
            repositories: [],
            repositoryAmount: 0,
            pageNumber: 0,
        });
    };

    loadRepositoryAmount = async () =>
    {
        const {match: {params: {username}}} = this.props;
        const repositoryAmountWrapper = await StarApi.getStaredRepositoriesAmount({username});
        if (repositoryAmountWrapper !== null)
        {
            const {amount} = repositoryAmountWrapper;
            await this.setStatePromise({repositoryAmount: amount});
        }
    };

    onLoadMoreButtonClick: ButtonProps['onClick'] = async () =>
    {
        await this.setStatePromise({loading: true});
        await this.loadMoreRepositories();
        await this.setStatePromise({loading: false});
    };

    loadMoreRepositories = async () =>
    {
        const {pageNumber} = this.state;
        const {match: {params: {username}}} = this.props;
        const repositoriesWrapper = await StarApi.getStaredRepositories({username}, pageNumber * Stars.AMOUNT_PER_PAGE, Stars.AMOUNT_PER_PAGE);
        if (repositoriesWrapper !== null)
        {
            const {repositories} = this.state;
            const {repositories: moreRepositories} = repositoriesWrapper;
            await this.setStatePromise({
                repositories: [...repositories, ...moreRepositories],
                pageNumber: pageNumber + 1,
            });
        }
    };

    render()
    {
        const {loading, repositoryAmount, repositories} = this.state;
        return (<View repositoryAmount={repositoryAmount}
                      loading={loading}
                      repositories={repositories}
                      onLoadMoreButtonClick={this.onLoadMoreButtonClick} />);
    }
}

export default withRouter(Stars);