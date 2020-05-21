import React, {Component} from 'react';
import {Button} from 'antd';

interface IProps {}

interface IState
{
    loading: boolean;
}

class Test extends Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount(): void
    {
        setTimeout(() =>
        {
            const {loading} = this.state;
            this.setState({
                loading: !loading,
            });
        }, 100);
    }


    render()
    {
        const {loading} = this.state;
        return (
            <div>
                <Button size={'small'} loading={loading}>测试</Button>
            </div>
        );
    }
}

export default Test;