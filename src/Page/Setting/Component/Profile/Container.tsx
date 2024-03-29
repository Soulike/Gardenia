import React, {PureComponent} from 'react';
import View from './View';
import {Profile as ProfileApi} from '../../../../Api';

import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Profile as ProfileClass} from '../../../../Class';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';

interface IProps extends RouteComponentProps {}

interface IState
{
    currentProfile: ProfileClass,
    loading: boolean,
}

class Profile extends PureComponent<IProps, IState>
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
            currentProfile: new ProfileClass('', '', '', ''),
            loading: false,
        };
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        await this.loadProfile();
        await this.setStatePromise({loading: false});
    }

    loadProfile = async () =>
    {
        const result = await ProfileApi.get();
        if (result !== null)
        {
            await this.setStatePromise({currentProfile: result});
        }
        else
        {
            const {history} = this.props;
            return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    };

    render()
    {
        const {currentProfile: {nickname, email}, loading} = this.state;
        return (<View defaultNickname={nickname}
                      defaultEmail={email}
                      loading={loading} />);
    }
}

export default withRouter(Profile);