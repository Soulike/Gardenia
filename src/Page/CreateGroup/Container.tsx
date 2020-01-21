import React, {DOMAttributes, PureComponent} from 'react';
import View from './View';
import {InputProps} from 'antd/lib/input';
import {notification} from 'antd';
import {Group as GroupApi} from '../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction} from '../../Router';
import CONFIG from '../../CONFIG';
import {ERROR_MESSAGE, Function as ValidatorFunction, HINT} from '../../Validator';

interface IProps extends RouteComponentProps<void> {}

interface IState
{
    name: string,
    submitting: boolean,
}

class CreateGroup extends PureComponent<Readonly<IProps>, IState>
{
    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            name: '',
            submitting: false,
        };
    }


    async componentDidMount()
    {
        this.setTitle();
    }

    setTitle = () =>
    {
        document.title = `创建小组 - ${CONFIG.NAME}`;
    };

    onNameInputChange: InputProps['onChange'] = e =>
    {
        this.setState({
            name: e.target.value,
        });
    };

    onSubmit: DOMAttributes<HTMLFormElement>['onSubmit'] = async e =>
    {
        e.preventDefault();
        if (this.validateFormInput())
        {
            await this.submitForm();
        }
    };

    validateFormInput = () =>
    {
        const {name} = this.state;
        if (!ValidatorFunction.Group.name(name))
        {
            notification.warn({
                message: ERROR_MESSAGE.Group.NAME,
                description: HINT.Group.NAME,
            });
            return false;
        }
        return true;
    };

    submitForm = async () =>
    {
        const {name} = this.state;
        const {history} = this.props;
        this.setState({submitting: true});
        const result = await GroupApi.add({name});
        this.setState({submitting: false});
        if (result !== null)
        {
            const {id} = result;
            notification.success({
                message: '小组创建成功',
                description: '您已自动成为小组管理员，邀请更多成员进行协作吧！',
            });
            history.push(RouterFunction.generateGroupRoute({id: id.toString()}));
        }
    };

    render()
    {
        const {name, submitting} = this.state;
        return (<View name={name}
                      submitting={submitting}
                      onSubmit={this.onSubmit}
                      onNameInputChange={this.onNameInputChange} />);
    }
}

export default withRouter(CreateGroup);