import React from 'react';
import Style from '../../Style.module.scss';
import {Card, Menu} from 'antd';
import {SEARCH_TYPE} from '../../../../CONSTANT';
import {CodeOutlined, UserOutlined} from '@ant-design/icons';
import {MenuProps} from 'antd/lib/menu';

interface IProps
{
    currentSearchType: SEARCH_TYPE,
    onMenuItemClick: MenuProps['onClick'],
}

function TypeMenu(props: IProps)
{
    const {currentSearchType, onMenuItemClick} = props;
    return (
        <nav className={Style.menuWrapper}>
            <Card size={'small'} title={'类别'}>
                <Menu style={{border: 'none'}}
                      selectable={true} mode={'vertical'} title={'类别'}
                      selectedKeys={[currentSearchType]} onClick={onMenuItemClick}>
                    <Menu.Item key={SEARCH_TYPE.PROFILE}>
                        <span className={Style.icon}><UserOutlined /></span>
                        用户
                    </Menu.Item>
                    <Menu.Item key={SEARCH_TYPE.REPOSITORY}>
                        <span className={Style.icon}><CodeOutlined /></span>
                        仓库
                    </Menu.Item>
                </Menu>
            </Card>
        </nav>
    );
}

export default React.memo(TypeMenu);