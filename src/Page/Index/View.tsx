import React, {HTMLAttributes} from 'react';
import Style from './Style.module.scss';
import {Repository} from '../../Class';
import InfiniteScroll from 'react-infinite-scroller';
import RepositoryList from '../../Component/RepositoryList';
import {Alert} from 'antd';
import NewTabAnchor from '../../Component/NewTabAnchor';
import meme from '../../Static/Index/alice_mana.png';

interface IProps
{
    repositoryList: Readonly<Array<Readonly<Repository>>>,
    loadMore: (page: number) => void,
    loading: boolean,
    hasMore: boolean,
    onMemeDoubleClick: HTMLAttributes<HTMLDivElement>['onDoubleClick'];
    showMeme: boolean;
}

function IndexView(props: Readonly<IProps>)
{
    const {repositoryList, loadMore, loading, hasMore, onMemeDoubleClick, showMeme} = props;
    return (
        <div className={Style.Index}>
            <div className={Style.alertWrapper}>
                <Alert type={'warning'} message={'项目仍在开发中'} closable={true}
                       description={<div className={Style.description}>
                           <div className={Style.text}>
                               <div>本项目由练习时长两年半干啥啥不行吃饭第一名的前端开发，且后端运行在每月仅需 9.5 元人民币的辣鸡服务器上。</div>
                               <div><strong>请大家备份好自己的代码</strong>，出现 BUG
                                                                请<NewTabAnchor href={'https://github.com/Soulike/Gardenia/issues'}>提
                                                                                                                                   Issue</NewTabAnchor>。
                               </div>
                               <div>由于仍处于开发状态，因此可能会出现不兼容更改。<strong>出现问题请先尝试清除缓存刷新页面</strong>。</div>
                               <div>请各位多担待，用正常的姿势使用本平台，不胜感谢<span role={'img'}
                                                                 aria-label={'emoji'}
                                                                 aria-labelledby={'emoji'}>😀</span>。
                               </div>
                           </div>
                           {
                               showMeme ? <div className={Style.memeWrapper} onDoubleClick={onMemeDoubleClick}>
                                   <img src={meme}
                                        alt={'meme'}
                                        className={Style.meme} />
                               </div> : <div className={Style.memeWrapper} />
                           }
                       </div>} banner={true} />
                <Alert type={'info'} message={'Git 自动保存密码的方法'} description={
                    <div className={Style.text}>
                        <div>在命令行执行以下命令可自动保存密码，免去每次输入密码的麻烦。</div>
                        <code>
                            git config --global credential.helper cache && git config --global credential.helper 'cache
                            --timeout=31556926'
                        </code>
                        <div>SSH 连接方式仍在开发中，给大家带来的不便深表歉意。</div>
                    </div>
                } banner={true} />
            </div>
            <InfiniteScroll loadMore={loadMore} initialLoad={false} pageStart={1} hasMore={hasMore}>
                <RepositoryList repositories={repositoryList} loading={loading} showUsername={true} />
            </InfiniteScroll>
        </div>);
}

export default IndexView;   // 列表会动态更新，不能是 memo 组件