import React, {PureComponent} from 'react';
import View from '../../../StarButton';
import {ButtonProps} from 'antd/lib/button';
import {promisify} from 'util';
import {Star as StarApi} from '../../../../Api';
import {Repository} from '../../../../Class';

interface IProps
{
    repository: Readonly<Pick<Repository, 'username' | 'name'>>
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
        const {repository} = this.props;
        const {repository: prevRepository} = prevProps;
        if (repository !== prevRepository)
        {
            await this.componentDidMount();
        }
    }

    loadHasStared = async () =>
    {
        const {repository: {username, name}} = this.props;
        const hasStaredWrapper = await StarApi.isStaredRepository({username, name});
        if (hasStaredWrapper !== null)
        {
            const {isStared} = hasStaredWrapper;
            await this.setStatePromise({hasStared: isStared});
        }
    };

    loadStarAmount = async () =>
    {
        const {repository: {username, name}} = this.props;
        const starAmountWrapper = await StarApi.getRepositoryStarAmount({username, name});
        if (starAmountWrapper !== null)
        {
            const {amount} = starAmountWrapper;
            await this.setStatePromise({starAmount: amount});
        }
    };

    onClick: ButtonProps['onClick'] = async () =>
    {
        const {hasStared, starAmount} = this.state;
        const {repository: {username, name}} = this.props;
        await this.setStatePromise({loading: true});
        if (hasStared)
        {
            const result = await StarApi.remove({username, name});
            if (result !== null)
            {
                await this.setStatePromise({hasStared: false, starAmount: starAmount - 1});
            }
        }
        else
        {
            const result = await StarApi.add({username, name});
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

export default StarButton;