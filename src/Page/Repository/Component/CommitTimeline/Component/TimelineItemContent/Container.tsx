import React, {PureComponent} from 'react';
import View from './View';
import {Commit, Repository} from '../../../../../../Class';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    repository: Pick<Repository, 'username' | 'name'>;
    commit: Commit;
}

interface IState
{
    showBody: boolean;
}

class TimelineItemContent extends PureComponent<IProps, IState>
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
        const {showBody} = this.state;
        const {repository, commit} = this.props;
        return (<View repository={repository}
                      commit={commit}
                      showBody={showBody}
                      onShowBodyButtonClick={this.onShowBodyButtonClick} />);
    }
}

export default React.memo(TimelineItemContent);