import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

interface IProps extends RouteComponentProps {}

class Test extends Component<IProps>
{
    render()
    {
        const {match} = this.props;
        return (
            <div>
                {JSON.stringify(match)}
            </div>
        );
    }
}

export default withRouter(Test);