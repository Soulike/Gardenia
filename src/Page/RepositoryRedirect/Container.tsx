import React, {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Function as RouterFunction, Interface as RouterInterface} from '../../Router';

function RepositoryRedirect()
{
    const {username, repositoryName} = useParams<RouterInterface.IRepository>();
    const history = useHistory();
    useEffect(() =>
    {
        history.replace(RouterFunction.generateRepositoryCodeRoute({username, repositoryName}));
    }, [username, repositoryName, history]);

    return (<span />);
}

export default React.memo(RepositoryRedirect);