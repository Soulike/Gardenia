import React, {PureComponent} from 'react';
import View from './View';
import {InputProps} from 'antd/lib/input';
import {ButtonProps} from 'antd/lib/button';
import {ERROR_MESSAGE, Function as ValidatorFunction} from '../../Validator';
import {notification} from 'antd';
import {Collaborator as CollaboratorApi} from '../../Api';

interface IProps
{

}

interface IState
{
    code: string,
    loading: boolean,
}

class AddCollaboration extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            code: '',
            loading: false,
        };
    }


    onCodeInputChange: InputProps['onChange'] = e =>
    {
        this.setState({code: e.target.value});
    };

    onSubmitButtonClick: ButtonProps['onClick'] = async () =>
    {
        const {code} = this.state;
        if (!ValidatorFunction.Collaborator.code(code))
        {
            notification.warn({message: ERROR_MESSAGE.Collaborator.CODE});
        }
        else
        {
            this.setState({loading: true});
            const result = await CollaboratorApi.add(code);
            this.setState({loading: false});
            if (result !== null)
            {
                notification.success({message: '加入仓库合作者成功'});
                this.setState({code: ''});
            }
        }
    };

    render()
    {
        const {code, loading} = this.state;
        return (<View code={code}
                      loading={loading}
                      onCodeInputChange={this.onCodeInputChange}
                      onSubmitButtonClick={this.onSubmitButtonClick} />);
    }
}

export default AddCollaboration;