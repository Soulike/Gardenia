import React from 'react';
import Style from './Style.module.scss';
import {Menu} from 'antd';
import {SEARCH_TYPE} from '../../CONSTANT';
import {MenuProps} from 'antd/lib/menu';

interface IProps
{
    currentSearchType: SEARCH_TYPE,
    onMenuItemClick: MenuProps['onClick'],
}

function Search(props: IProps)
{
    const {currentSearchType, onMenuItemClick} = props;
    return (
        <div className={Style.Search}>
            <div className={Style.left}>
                <nav className={Style.menuWrapper}>
                    <Menu selectable={true} mode={'vertical'} title={'类别'}
                          selectedKeys={[currentSearchType]} onClick={onMenuItemClick}>
                        <Menu.Item key={SEARCH_TYPE.PROFILE}>用户</Menu.Item>
                        <Menu.Item key={SEARCH_TYPE.REPOSITORY}>仓库</Menu.Item>
                    </Menu>
                </nav>
            </div>
            <div className={Style.right}>

            </div>
        </div>
    );
}

export default React.memo(Search);