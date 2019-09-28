import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

interface Props extends RouteComponentProps {}

class Test extends Component<Props>
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