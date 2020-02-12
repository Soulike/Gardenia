import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../../../Router';
import {Commit} from '../../../../../../Class';
import {ButtonProps} from 'antd/lib/button';

interface IProps extends RouteComponentProps<RouterInterface.IRepositoryCommits>
{
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
        return (<View {...this.props}
                      showBody={showBody}
                      onShowBodyButtonClick={this.onShowBodyButtonClick} />);
    }
}

export default withRouter(React.memo(TimelineItemContent));