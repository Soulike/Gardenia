import React, {Component} from 'react';

interface IProps {}

interface IState
{

}

class Test extends Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return <div>

        </div>;
    }
}

export default Test;