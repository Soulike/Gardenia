import React, {PureComponent} from 'react';
import View from '../../../../Component/StarButton';
import {ButtonProps} from 'antd/lib/button';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {Star as StarApi} from '../../../../Api';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCode>
{

}

interface IState
{
    hasStared: boolean,
    starAmount: number,
    loading: boolean,
}

class StarButton extends PureComponent<IProps, IState>
{
    private setStatePromise = (state: any) =>
    {
        return new Promise<void>(resolve =>
        {
            this.setState(state, () =>
            {
                resolve();
            });
        });
    };

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            hasStared: false,
            starAmount: 0,
            loading: false,
        };
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        await Promise.all([
            this.loadHasStared(),
            this.loadStarAmount(),
        ]);
        await this.setStatePromise({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username, repositoryName}}} = this.props;
        const {match: {params: {username: prevUsername, repositoryName: prevRepositoryName}}} = prevProps;
        if (username !== prevUsername || repositoryName !== prevRepositoryName)
        {
            await this.componentDidMount();
        }
    }

    loadHasStared = async () =>
    {
        const {match: {params: {username, repositoryName}}} = this.props;
        const hasStaredWrapper = await StarApi.isStaredRepository({username, name: repositoryName});
        if (hasStaredWrapper !== null)
        {
            const {isStared} = hasStaredWrapper;
            await this.setStatePromise({hasStared: isStared});
        }
    };

    loadStarAmount = async () =>
    {
        const {match: {params: {username, repositoryName}}} = this.props;
        const starAmountWrapper = await StarApi.getRepositoryStarAmount({username, name: repositoryName});
        if (starAmountWrapper !== null)
        {
            const {amount} = starAmountWrapper;
            await this.setStatePromise({starAmount: amount});
        }
    };

    onClick: ButtonProps['onClick'] = async () =>
    {
        const {hasStared, starAmount} = this.state;
        const {match: {params: {username, repositoryName}}} = this.props;
        await this.setStatePromise({loading: true});
        if (hasStared)
        {
            const result = await StarApi.remove({username, name: repositoryName});
            if (result !== null)
            {
                await this.setStatePromise({hasStared: false, starAmount: starAmount - 1});
            }
        }
        else
        {
            const result = await StarApi.add({username, name: repositoryName});
            if (result !== null)
            {
                await this.setStatePromise({hasStared: true, starAmount: starAmount + 1});
            }
        }
        await this.setStatePromise({loading: false});
    };

    render()
    {
        const {hasStared, loading, starAmount} = this.state;
        return (<View hasStared={hasStared}
                      loading={loading}
                      starAmount={starAmount}
                      onClick={this.onClick} />);
    }
}

export default withRouter(StarButton);