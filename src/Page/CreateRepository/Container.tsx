import React, {DOMAttributes, PureComponent} from 'react';
import View from './View';
import {InputProps} from 'antd/lib/input';
import {SwitchProps} from 'antd/lib/switch';
import {notification} from 'antd';
import {Profile} from '../../Api/Profile';
import {Repository as RepositoryApi} from '../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CONFIG as ROUTER_CONFIG, Function as RouterFunction} from '../../Router';
import CONFIG from '../../CONFIG';
import {ERROR_MESSAGE, Function as ValidatorFunction, HINT} from '../../Validator';
import {promisify} from 'util';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = ROUTER_CONFIG;

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

class CreateRepository extends PureComponent<Readonly<IProps>, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: Readonly<IProps>)
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
        await this.setStatePromise({loading: true});
        await this.loadUsername();
        await this.setStatePromise({loading: false});
    }

    setTitle = () =>
    {
        document.title = `创建仓库 - ${CONFIG.NAME}`;
    };

    loadUsername = async () =>
    {
        const profile = await Profile.get();
        if (profile !== null)
        {
            const {username} = profile;
            await this.setStatePromise({username});
        }
        else
        {
            const {history} = this.props;
            return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.LOGIN]);
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
        if (!ValidatorFunction.Repository.name(name))
        {
            notification.warn({
                message: ERROR_MESSAGE.Repository.NAME,
                description: HINT.Repository.NAME,
            });
            return false;
        }
        return true;
    };

    submitForm = async () =>
    {
        const {username, name, description, isPublic} = this.state;
        this.setState({submitting: true});
        const result = await RepositoryApi.create({
            name,
            description,
            isPublic,
        });
        this.setState({submitting: false});
        if (result !== null)
        {
            const {history} = this.props;
            notification.success({message: '仓库创建成功'});
            return history.push(RouterFunction.generateRepositoryCodeRoute({username, repository: name}));
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