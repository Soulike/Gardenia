import React from 'react';
import Style from './Style.module.scss';
import {Repository as RepositoryClass} from '../../../../Class';
import {ButtonProps} from 'antd/lib/button';
import {Button, Card, List} from 'antd';
import Repository from '../../../../Component/Repository';

interface IProps
{
    loading: boolean,
    allLoaded: boolean,
    repositories: Readonly<RepositoryClass>[],
    onNextPageButtonClick: ButtonProps['onClick'],
}

function RepositoryList(props: IProps)
{
    const {repositories, loading, allLoaded, onNextPageButtonClick} = props;
    return (
        <div className={Style.RepositoryList}>
            <Card title={'找到的仓库'}>
                <List loading={loading}
                      loadMore={
                          <div className={Style.loadMoreButtonWrapper}>
                              <Button loading={loading} disabled={loading || allLoaded}
                                      onClick={onNextPageButtonClick}>
                                  加载更多
                              </Button>
                          </div>} dataSource={repositories}
                      renderItem={repository => <Repository repository={repository} showUsername={true} />} />
            </Card>
        </div>);
}

export default React.memo(RepositoryList);