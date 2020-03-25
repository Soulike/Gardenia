import React, {PureComponent} from 'react';
import View from './View';
import {ButtonProps} from 'antd/lib/button';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {promisify} from 'util';
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
    private setStatePromise = promisify(this.setState);

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
        const {match: {params: {username, repository}}} = this.props;
        const {match: {params: {username: prevUsername, repository: prevRepository}}} = prevProps;
        if (username !== prevUsername || repository !== prevRepository)
        {
            await this.componentDidMount();
        }
    }

    loadHasStared = async () =>
    {
        const {match: {params: {username, repository}}} = this.props;
        const hasStaredWrapper = await StarApi.isStaredRepository({username, name: repository});
        if (hasStaredWrapper !== null)
        {
            const {isStared} = hasStaredWrapper;
            await this.setStatePromise({hasStared: isStared});
        }
    };

    loadStarAmount = async () =>
    {
        const {match: {params: {username, repository}}} = this.props;
        const starAmountWrapper = await StarApi.getRepositoryStarAmount({username, name: repository});
        if (starAmountWrapper !== null)
        {
            const {amount} = starAmountWrapper;
            await this.setStatePromise({starAmount: amount});
        }
    };

    onClick: ButtonProps['onClick'] = async () =>
    {
        const {hasStared, starAmount} = this.state;
        const {match: {params: {username, repository}}} = this.props;
        await this.setStatePromise({loading: true});
        if (hasStared)
        {
            const result = await StarApi.remove({username, name: repository});
            if (result !== null)
            {
                await this.setStatePromise({hasStared: false, starAmount: starAmount - 1});
            }
        }
        else
        {
            const result = await StarApi.add({username, name: repository});
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