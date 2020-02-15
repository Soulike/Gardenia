import React, {PureComponent} from 'react';
import View from './View';
import {FileDiff as FileDiffClass} from '../../../../../../Class';
import {ButtonProps} from 'antd/lib/button';

interface IProps
{
    fileDiff: FileDiffClass;
}

interface IState
{
    showCode: boolean;
}

class FileDiff extends PureComponent<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            showCode: true,
        };
    }

    componentDidMount()
    {
        const {fileDiff: {isDeleted, isBinary}} = this.props;
        if (isDeleted || isBinary)
        {
            this.setState({showCode: false});
        }
    }

    onShowCodeButtonClick: ButtonProps['onClick'] = () =>
    {
        const {showCode} = this.state;
        this.setState({showCode: !showCode});
    };

    render()
    {
        const {fileDiff} = this.props;
        const {showCode} = this.state;
        return (<View fileDiff={fileDiff}
                      showCode={showCode}
                      onShowCodeButtonClick={this.onShowCodeButtonClick} />);
    }
}

export default FileDiff;