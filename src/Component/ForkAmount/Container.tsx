import React, {PureComponent} from 'react';
import View from './View';
import {Repository} from '../../Class';
import {promisify} from 'util';
import {RepositoryInfo} from '../../Api/RepositoryInfo';

interface IProps
{
    repository: Readonly<Pick<Repository, 'username' | 'name'>>
}

interface IState
{
    forkAmount: number,
    loading: boolean,
}

class ForkAmount extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            forkAmount: 0,
            loading: false,
        };
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        await this.loadForkAmount();
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

    loadForkAmount = async () =>
    {
        const {repository: {username, name}} = this.props;
        const forkAmountWrapper = await RepositoryInfo.forkAmount({username, name});
        if (forkAmountWrapper !== null)
        {
            const {amount} = forkAmountWrapper;
            await this.setStatePromise({forkAmount: amount});
        }
    };

    render()
    {
        const {forkAmount, loading} = this.state;
        return (<View loading={loading} forkAmount={forkAmount} />);
    }
}

export default ForkAmount;