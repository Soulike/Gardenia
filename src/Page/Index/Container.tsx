import React, {HTMLAttributes, PureComponent} from 'react';
import {Repository as RepositoryApi} from '../../Api';
import {Repository} from '../../Class';
import View from './View';
import * as CONFIG from '../../CONFIG';
import path from 'path';
import {promisify} from 'util';

interface IProps {}

interface IState
{
    repositories: Array<Repository>,
    loading: boolean,
    hasMore: boolean,
    showMeme: boolean,
}

class Index extends PureComponent<Readonly<IProps>, IState>
{
    private static PAGE_SIZE = 10;  // 每一页有几条
    private setStatePromise = promisify(this.setState);
    private forceUpdatePromise = promisify(this.forceUpdate);

    constructor(props: Readonly<IProps>)
    {
        super(props);
        this.state = {
            repositories: [],
            loading: true,
            hasMore: true,
            showMeme: true,
        };
    }

    async componentDidMount()
    {
        this.setTitle();
        await this.loadMoreRepositories(1);
    }

    setTitle = () =>
    {
        document.title = CONFIG.NAME;
    };

    loadMoreRepositories: (page: number) => void = async page =>
    {
        const {repositories} = this.state;
        this.setState({loading: true});
        const repositoriesFromServer = await RepositoryApi.getRepositories((page - 1) * Index.PAGE_SIZE, page * Index.PAGE_SIZE);
        this.setState({loading: false});
        if (repositoriesFromServer !== null)
        {
            repositories.push(...repositoriesFromServer);
            if (repositoriesFromServer.length < Index.PAGE_SIZE)
            {
                await this.setStatePromise({
                    hasMore: false,
                });
            }
            await this.forceUpdatePromise();
        }
    };

    onMemeDoubleClickFactory: () => HTMLAttributes<HTMLDivElement>['onDoubleClick'] = () =>
    {
        let time = 0;
        const rikairikai = new Audio(path.join(process.env.PUBLIC_URL, 'mp3', 'rikairikai.mp3'));
        const subeteorikaishidawa = new Audio(path.join(process.env.PUBLIC_URL, 'mp3', 'subeteorikaishidawa.mp3'));
        const arikairikairikairikairikai = new Audio(path.join(process.env.PUBLIC_URL, 'mp3', 'arikairikairikairikairikai.mp3'));
        const wurusaiwurusaiwurusai = new Audio(path.join(process.env.PUBLIC_URL, 'mp3', 'wurusaiwurusaiwurusai.mp3'));
        const damaraseteitadakimasu = new Audio(path.join(process.env.PUBLIC_URL, 'mp3', 'damaraseteitadakimasu.mp3'));

        return async () =>
        {
            if (time === 1)
            {
                await rikairikai.play();
            }
            else if (time === 2)
            {
                await subeteorikaishidawa.play();
            }
            else if (time === 3)
            {
                await arikairikairikairikairikai.play();
            }
            else if (time > 3 && time < 6)
            {
                await wurusaiwurusaiwurusai.play();
            }
            else if (time === 6)
            {
                await damaraseteitadakimasu.play();
                damaraseteitadakimasu.onended = () =>
                    this.setState({showMeme: false});
            }
            time++;
        };
    };

    render()
    {
        const {repositories, hasMore, loading, showMeme} = this.state;
        return (<View onMemeDoubleClick={this.onMemeDoubleClickFactory()}
                      repositoryList={repositories}
                      loadMore={this.loadMoreRepositories}
                      hasMore={hasMore}
                      loading={loading} showMeme={showMeme} />);
    }
}

export default Index;