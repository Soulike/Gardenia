import React from 'react';

interface IProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> {}

function NewTabAnchor(props: IProps)
{
    const {children, ...rest} = props;
    return (
        <a {...rest} target={'_blank'} rel={'noopener norefferrer'}>
            {children}
        </a>
    );
}

export default React.memo(NewTabAnchor);