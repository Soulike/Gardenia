import React, {PureComponent} from 'react';
import View from './View';
import {PopconfirmProps} from 'antd/lib/popconfirm';
import {CodeComment} from '../../../../../../../../../../../../../../Class';

import {CodeComment as CodeCommentApi} from '../../../../../../../../../../../../../../Api';
import {notification} from 'antd';
import eventEmitter, {EVENT} from '../../../../../../../../Event';

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
    private setStatePromise = (state: any) =>
    {
        return new Promise<void>(resolve =>
        {
            this.setState(state, () =>
            {
                resolve();
            });
        });
    };

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
            eventEmitter.emit(EVENT.CODE_COMMENT_CHANGE);
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