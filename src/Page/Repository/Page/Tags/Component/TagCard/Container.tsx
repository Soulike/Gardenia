import React, {PureComponent} from 'react';
import View from './View';
import {Tag} from '../../../../../../Class';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    tag: Tag,
}

interface IState
{
    showBody: boolean,
}

class TagCard extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            showBody: false,
        };
    }

    onShowBodyButtonClick: ButtonProps['onClick'] = () =>
    {
        const {showBody} = this.state;
        this.setState({showBody: !showBody});
    };

    render()
    {
        const {tag} = this.props;
        const {showBody} = this.state;
        return (<View tag={tag} showBody={showBody}
                      onShowBodyButtonClick={this.onShowBodyButtonClick} />);
    }
}

export default TagCard;