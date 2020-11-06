import React, {useEffect, useState} from 'react';
import View from './View';
import {useHistory, useParams} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../../Router';
import {PullRequest as PullRequestApi} from '../../../../Api';
import {IPullRequestState, IState as StoreState} from '../../../../Store';
import {loadedAction, loadingAction} from './Action/Action';
import {useDispatch, useSelector} from 'react-redux';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../CONFIG';

function PullRequest()
{
    const [commitAmount, setCommitAmount] = useState(0);
    const [fileDiffAmount, setFileDiffAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const {no: noString, repositoryName, username} = useParams<RouterInterface.IRepositoryPullRequest>();
    const dispatch = useDispatch();
    const {pullRequest, loading: pullRequestIsLoading} = useSelector<StoreState, IPullRequestState>(state => state['PullRequest']);

    useEffect(() =>
    {
        const loadPullRequest = async () =>
        {
            const no = Number.parseInt(noString);
            if (Number.isNaN(no) || no <= 0)
            {
                return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
            }
            dispatch(loadingAction());
            const pullRequest = await PullRequestApi.get({username, name: repositoryName}, {no});
            if (pullRequest !== null)
            {
                dispatch(loadedAction(pullRequest));
            }
            else
            {
                return history.push(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
            }
        };

        setLoading(true);
        loadPullRequest().finally(() => setLoading(false));
    }, [noString, history, username, repositoryName, dispatch]);

    useEffect(() =>
    {
        const loadCommitAmount = async () =>
        {
            const {id} = pullRequest;
            const commitAmountWrapper = await PullRequestApi.getCommitAmount({id});
            if (commitAmountWrapper !== null)
            {
                const {commitAmount} = commitAmountWrapper;
                setCommitAmount(commitAmount);
            }
        };

        if (!pullRequestIsLoading)
        {
            setLoading(true);
            loadCommitAmount().finally(() => setLoading(false));
        }
    }, [pullRequest, pullRequestIsLoading]);

    useEffect(() =>
    {
        const loadFileDiffAmount = async () =>
        {
            const {id} = pullRequest;
            const fileDiffAmountWrapper = await PullRequestApi.getFileDiffAmount({id});
            if (fileDiffAmountWrapper !== null)
            {
                const {amount} = fileDiffAmountWrapper;
                setFileDiffAmount(amount);
            }
        };

        if (!pullRequestIsLoading)
        {
            setLoading(true);
            loadFileDiffAmount().finally(() => setLoading(false));
        }
    }, [pullRequest, pullRequestIsLoading]);

    return (<View loading={loading || pullRequestIsLoading}
                  pullRequest={pullRequest}
                  commitAmount={commitAmount}
                  fileDiffAmount={fileDiffAmount} />);
}

export default React.memo(PullRequest);