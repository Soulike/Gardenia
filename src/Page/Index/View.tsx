import React from 'react';
import Style from './Style.module.scss';
import {Repository} from '../../Class';
import InfiniteScroll from 'react-infinite-scroller';
import RepositoryList from '../../Component/RepositoryList';
import {Alert} from 'antd';
import NewTabAnchor from '../../Component/NewTabAnchor';
import aqua from '../../Static/minato-aqua.jpg';

interface IProps
{
    repositoryList: Readonly<Array<Readonly<Repository>>>,
    loadMore: () => any,
    loading: boolean,
    hasMore: boolean,
}

function IndexView(props: Readonly<IProps>)
{
    const {repositoryList, loadMore, loading, hasMore} = props;
    return (
        <div className={Style.Index}>
            <div className={Style.alertWrapper}>
                <Alert type={'warning'} message={'项目仍在开发中'} closable={true}
                       description={<div className={Style.description}>
                           <div className={Style.text}>
                               <div>本项目仅由<strong> 1 个</strong>练习时长两年半干啥啥不行吃饭第一名的前端开发，且后端运行在每月仅需 9.5 人民币的辣鸡服务器上。</div>
                               <div><strong>请大家备份好自己的代码</strong>，出现 BUG
                                                                请<NewTabAnchor href={'https://github.com/Soulike/Gardenia/issues'}>提
                                                                                                                                   Issue</NewTabAnchor>。
                               </div>
                               <div>请各位多担待，用正常的姿势使用本平台，不胜感谢😀。</div>
                           </div>
                           <div className={Style.memeWrapper}>
                               <img src={aqua} alt={'meme'} className={Style.meme} />
                           </div>
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
            <InfiniteScroll loadMore={loadMore} initialLoad={false} hasMore={hasMore}>
                <RepositoryList repositories={repositoryList} loading={loading} showUsername={true} />
            </InfiniteScroll>
        </div>);
}

export default IndexView;   // 列表会动态更新，不能是 memo 组件