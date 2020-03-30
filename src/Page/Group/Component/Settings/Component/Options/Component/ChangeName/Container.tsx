import React, {PureComponent} from 'react';
import View from './View';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG as ROUTER_CONFIG, Interface as RouterInterface} from '../../../../../../../../Router';
import {promisify} from 'util';
import {Group as GroupApi} from '../../../../../../../../Api';
import {ERROR_MESSAGE, Function as ValidatorFunction, HINT} from '../../../../../../../../Validator';
import {notification} from 'antd';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

export interface IChangeNameProps extends RouteComponentProps<RouterInterface.IGroupSettings> {}

export interface IState
{
    groupName: string,
    loading: boolean,
}

class ChangeName extends PureComponent<IChangeNameProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IChangeNameProps)
    {
        super(props);
        this.state = {
            groupName: '',
            loading: false,
        };
    }

    async componentDidMount()
    {
        await this.setStatePromise({loading: true});
        await this.loadGroupName();
        await this.setStatePromise({loading: false});
    }

    loadGroupName = async () =>
    {
        const {match: {params: {id}}, history} = this.props;
        const group = await GroupApi.info({id: Number.parseInt(id)});
        if (group !== null)
        {
            const {name} = group;
            await this.setStatePromise({groupName: name});
        }
        else
        {
            return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    };

    onGroupNameChange: InputProps['onChange'] = e =>
    {
        this.setState({groupName: e.target.value});
    };

    onButtonClick: ButtonProps['onClick'] = async () =>
    {
        const {match: {params: {id}}} = this.props;
        const {groupName} = this.state;
        if (!ValidatorFunction.Group.name(groupName))
        {
            notification.warn({
                message: ERROR_MESSAGE.Group.NAME,
                description: HINT.Group.NAME,
            });
        }
        else
        {
            await this.setStatePromise({loading: true});
            const result = await GroupApi.changeName({id: Number.parseInt(id), name: groupName});
            if (result !== null)
            {
                notification.success({message: `小组 #${id} 重命名成功`});
                setTimeout(() =>
                {
                    window.location.reload();
                }, 1000);
            }
            await this.setStatePromise({loading: false});
        }
    };

    render()
    {
        const {groupName, loading} = this.state;
        return (<View loading={loading}
                      groupName={groupName}
                      onButtonClick={this.onButtonClick}
                      onGroupNameChange={this.onGroupNameChange} />);
    }
}

export default withRouter(ChangeName);