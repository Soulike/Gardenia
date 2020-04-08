import React, {PureComponent} from 'react';
import View from './View';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import {CodeComment} from '../../../../../../../../../../../../../../Class';
import {promisify} from 'util';
import {CodeComment as CodeCommentApi} from '../../../../../../../../../../../../../../Api';
import {notification} from 'antd';
import eventEmitter, {EVENT} from '../../../../../../Event';

interface IProps
{
    id: CodeComment['id'];
}

interface IState
{
    loading: boolean;
}

class CardBottom extends PureComponent<IProps, IState>
{
    private setStatePromise = promisify(this.setState);

    constructor(props: IProps)
    {
        super(props);
        this.state = {
            loading: false,
        };
    }

    onDeleteButtonClick: PopconfirmProps['onConfirm'] = async () =>
    {
        const {id} = this.props;
        await this.setStatePromise({loading: true});
        const result = await CodeCommentApi.del({id});
        if (result !== null)
        {
            notification.success({message: '删除标注成功'});
            eventEmitter.emit(EVENT.REFRESH);
        }
        await this.setStatePromise({loading: false});
    };


    render()
    {
        const {loading} = this.state;
        return (<View loading={loading} onDeleteButtonClick={this.onDeleteButtonClick} />);
    }
}

export default CardBottom;