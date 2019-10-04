import React, {DOMAttributes, PureComponent} from 'react';
import View from './View';
import {InputProps} from 'antd/lib/input';
import {SwitchProps} from 'antd/lib/switch';
import {notification} from 'antd';
import {Profile} from '../../Api/Profile';
import {Repository as RepositoryApi} from '../../Api';
import {Repository as RepositoryClass} from '../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE_GENERATOR} from '../../Router';

interface Props extends RouteComponentProps {}

interface State
{
    username: string,
    name: string,
    description: string,
    isPublic: boolean,
    submitting: boolean,
    loading: boolean,
}

class CreateRepository extends PureComponent<Props, State>
{
    constructor(props: Props)
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
        const profile = await Profile.get();
        if (profile !== null)
        {
            const {username} = profile;
            this.setState({loading: false, username});
        }
    }

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
        const {username, name, description, isPublic} = this.state;
        if (name.length === 0)
        {
            notification.warn({message: '请输入仓库名'});
            return;
        }
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
            history.push(PAGE_ID_TO_ROUTE_GENERATOR[PAGE_ID.REPOSITORY](username, name));
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