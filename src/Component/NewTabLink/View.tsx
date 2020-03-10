import React from 'react';
import {Link, LinkProps} from 'react-router-dom';


interface IProps extends Omit<LinkProps, 'target' | 'rel'> {}

function NewTabLink(props: IProps)
{
    return (
        <Link {...props} target={'_blank'} rel={'noopener norefferrer'} />
    );
}

export default React.memo(NewTabLink);