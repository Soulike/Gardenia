import React, {DOMAttributes, PureComponent} from 'react';
import View from './View';
import {InputProps} from 'antd/lib/input';
import {SwitchProps} from 'antd/lib/switch';
import {notification} from 'antd';
import {Profile} from '../../Api/Profile';
import {Repository as RepositoryApi} from '../../Api';
import {Repository as RepositoryClass} from '../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Function as RouterFunction} from '../../Router';

interface IProps extends RouteComponentProps {}

interface IState
{
    username: string,
    name: string,
    description: string,
    isPublic: boolean,
    submitting: boolean,
    loading: boolean,
}

class CreateRepository extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            username: '',
            name: '',
            description: '',
            isPublic: true,
            submitting: false,
            loading: true,
        };
    }

    async componentDidMount()
    {
        this.setTitle();
        this.setState({loading: true});
        await this.loadUsername();
        this.setState({loading: false});
    }

    setTitle = () =>
    {
        document.title = '创建仓库 - Git Demo';
    };

    loadUsername = async () =>
    {
        const profile = await Profile.get();
        if (profile !== null)
        {
            const {username} = profile;
            this.setState({username});
        }
    };

    onNameInputChange: InputProps['onChange'] = e =>
    {
        this.setState({
            name: e.target.value,
        });
    };

    onDescriptionInputChange: InputProps['onChange'] = e =>
    {
        this.setState({
            description: e.target.value,
        });
    };

    onIsPublicSwitchChange: SwitchProps['onChange'] = checked =>
    {
        this.setState({
            isPublic: checked,
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
            notification.warn({message: '请输入仓库名'});
            return false;
        }
        return true;
    };

    submitForm = async () =>
    {
        const {username, name, description, isPublic} = this.state;
        this.setState({submitting: true});
        const result = await RepositoryApi.create(new RepositoryClass(
            username,
            name,
            description,
            isPublic,
        ));
        this.setState({submitting: false});
        if (result !== null)
        {
            const {history} = this.props;
            notification.success({message: '仓库创建成功'});
            history.push(RouterFunction.generateRepositoryRoute({username, repository: name}));
        }
    };

    render()
    {
        const {username, name, description, isPublic, submitting, loading} = this.state;
        return (
            <View
                username={username}
                name={name}
                description={description}
                isPublic={isPublic}
                submitting={submitting} loading={loading}
                onNameInputChange={this.onNameInputChange}
                onDescriptionInputChange={this.onDescriptionInputChange}
                onIsPublicSwitchChange={this.onIsPublicSwitchChange}
                onSubmit={this.onSubmit} />
        );
    }
}

export default withRouter(CreateRepository);