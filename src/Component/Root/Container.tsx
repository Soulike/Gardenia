import React, {PureComponent, ReactNode} from 'react';
import View from './View';
import {connect} from 'react-redux';

interface Props
{
    children?: ReactNode,
    isLoggedIn: boolean,
}

interface State {}

class Root extends PureComponent<Props, State>
{
    render()
    {
        const {children, isLoggedIn} = this.props;
        return (
            <View isLoggedIn={isLoggedIn}>
                {children}
            </View>
        );
    }
}

const mapStateToProps = (state: any) =>
{
    const {Root: {isLoggedIn}} = state;
    return {
        isLoggedIn,
    };
};

export default connect(mapStateToProps)(Root);