import React, {PureComponent} from 'react';
import View from './View';
import {Tag} from '../../../../Class';
import {promisify} from 'util';
import {RepositoryInfo as RepositoryInfoApi} from '../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {ButtonProps} from 'antd/lib/button';
import {notification} from 'antd';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryTags> {}

interface IState
{
    tags: Tag[],
    loading: boolean,
    nextLoadOffset: number,    // 当前已加载列表的最后位置
    allTagsLoaded: boolean,
}

class Tags extends PureComponent<IProps, IState>
{
    private TAG_AMOUNT_PER_PAGE = 10;
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            tags: [],
            loading: false,
            nextLoadOffset: 0,
            allTagsLoaded: false,
        };
    }

    async componentDidMount()
    {
        await this.loadMoreTags();
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {match: {params: {username, repositoryName}}} = this.props;
        const {
            match: {
                params: {
                    username: prevUsername, repositoryName: prevRepository,
                },
            },
        } = this.props;
        if (username !== prevUsername || repositoryName !== prevRepository)
        {
            await this.setStatePromise({nextLoadOffset: 0});
            await this.componentDidMount();
        }
    }

    loadTags = async (offset: number, limit: number) =>
    {
        const {match: {params: {username, repositoryName}}} = this.props;
        await this.setStatePromise({loading: true});
        const tagsWrapper = await RepositoryInfoApi.tags(
            {username, name: repositoryName}, offset, limit);
        if (tagsWrapper !== null)
        {
            if (tagsWrapper.tags.length < this.TAG_AMOUNT_PER_PAGE)
            {
                await this.setStatePromise({allTagsLoaded: true});
            }
            const {tags} = this.state;
            await this.setStatePromise({tags: [...tags, ...tagsWrapper.tags]});
        }
        await this.setStatePromise({loading: false});
    };

    loadMoreTags = async () =>
    {
        const {nextLoadOffset} = this.state;
        await Promise.all([
            this.loadTags(nextLoadOffset, this.TAG_AMOUNT_PER_PAGE),
            this.setStatePromise({
                nextLoadOffset: nextLoadOffset + this.TAG_AMOUNT_PER_PAGE,
            }),
        ]);
    };

    onLoadMoreButtonClick: ButtonProps['onClick'] = async () =>
    {
        const {allTagsLoaded} = this.state;
        if (allTagsLoaded)
        {
            notification.success({message: '已加载所有标签'});
        }
        else
        {
            await this.loadMoreTags();
        }
    };

    render()
    {
        const {tags, loading} = this.state;
        return (<View tags={tags} loading={loading}
                      onLoadMoreButtonClick={this.onLoadMoreButtonClick} />);
    }
}

export default withRouter(Tags);