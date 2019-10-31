import React, {DOMAttributes, PureComponent} from 'react';
import View from './View';
import {InputProps} from 'antd/lib/input';
import {notification} from 'antd';
import {Group as GroupApi} from '../../Api';

interface IProps
{

}

interface IState
{
    name: string,
    submitting: boolean,
}

class CreateGroup extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
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
        document.title = '创建小组 - Git Demo';
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
        if (name.length === 0)
        {
            notification.warn({message: '请输入小组名'});
            return false;
        }
        return true;
    };

    submitForm = async () =>
    {
        const {name} = this.state;
        this.setState({submitting: true});
        const result = await GroupApi.add({name});
        this.setState({submitting: false});
        if (result !== null)
        {
            // TODO: 跳转到新建仓库的页面
            notification.success({message: '仓库创建成功'});
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

export default CreateGroup;