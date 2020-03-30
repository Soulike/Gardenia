import React from 'react';
import Avatar from '../Avatar';

function DefaultAvatar()
{
    return (<Avatar avatar={''} />);
}

export default React.memo(DefaultAvatar);