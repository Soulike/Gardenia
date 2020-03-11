import React from 'react';

interface IProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> {}

function NewTabAnchor(props: IProps)
{
    return (
        <a {...props} target={'_blank'} rel={'noopener norefferrer'} />
    );
}

export default React.memo(NewTabAnchor);