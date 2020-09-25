import React, {HTMLAttributes, useCallback, useEffect, useMemo, useState} from 'react';
import View from './View';
import {useHistory, useRouteMatch} from 'react-router-dom';
import {CodeComment, Commit} from '../../../../../../Class';
import {CodeComment as CodeCommentApi, RepositoryInfo} from '../../../../../../Api';
import {Interface as RouterInterface} from '../../../../../../Router';
import {DrawerProps} from 'antd/lib/drawer';
import eventEmitter, {EVENT} from './Event';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../../../CONFIG/ROUTER';
import {File} from '../../../../../../Function';
import {basename} from 'path';

function FileReader()
{
    // 可展示文件的最大大小
    const TEXT_FILE_MAX_SIZE = 128 * 1024;
    const BINARY_FILE_MAX_SIZE = 5 * 1024 * 1024;

    const [isOversize, setIsOversize] = useState(false);
    const [lastCommit, setLastCommit] = useState(new Commit('', '', '', 0, '', ''));
    const [lastCommitLoaded, setLastCommitLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fileType, setFileType] = useState('text');   // 初始值认为是 text 类型，修复闪过二进制的问题
    const [fileContent, setFileContent] = useState(new Blob());
    const [fileSize, setFileSize] = useState(0);
    const [codeComments, setCodeComments] = useState<CodeComment[]>([]);

    const [drawerVisible, setDrawerVisible] = useState<DrawerProps['visible']>(false);
    const [drawerCode, setDrawerCode] = useState('');
    const [drawerLineNumber, setDrawerLineNumber] = useState(0);

    const {params: {username, repositoryName, path, commitHash}} = useRouteMatch<RouterInterface.IRepositoryCode>();

    const history = useHistory();

    const hasCommentLineNumbers = useMemo(() => codeComments.map(({columnNumber}) => columnNumber), [codeComments]);

    const loadCodeComments = useMemo(() => async () =>
    {
        setLoading(true);
        const {commitHash} = lastCommit;
        const codeCommentsWrapper = await CodeCommentApi.get({
            repositoryUsername: username,
            repositoryName,
            filePath: path!,
        }, commitHash);
        if (codeCommentsWrapper !== null)
        {
            const {codeComments} = codeCommentsWrapper;
            setCodeComments(codeComments);
        }
        setLoading(false);
    }, [lastCommit, username, repositoryName, path]);

    // 代码批注事件监听器
    useEffect(() =>
    {
        const onCodeCommentChange = async () =>
        {
            await loadCodeComments();
        };

        eventEmitter.on(EVENT.CODE_COMMENT_CHANGE, onCodeCommentChange);
        return () => {eventEmitter.removeListener(EVENT.CODE_COMMENT_CHANGE, onCodeCommentChange);};
    }, [loadCodeComments]);

    // loadLastCommit
    useEffect(() =>
    {
        const loadLastCommit = async () =>
        {
            const lastCommit = await RepositoryInfo.lastBranchCommit({username}, {name: repositoryName}, commitHash!, path);
            if (lastCommit !== null)
            {
                setLastCommit(lastCommit);
            }
        };

        setLoading(true);
        setLastCommitLoaded(false);
        loadLastCommit()
            .then(() => setLastCommitLoaded(true))
            .finally(() => setLoading(false));
    }, [username, repositoryName, path, commitHash]);

    // loadFileInfo
    useEffect(() =>
    {
        const loadFileInfo = async () =>
        {
            const {commitHash} = lastCommit;
            const fileInfo = await RepositoryInfo.fileInfo({username}, {name: repositoryName}, path!, commitHash);
            if (fileInfo !== null)
            {
                const {fileType, objectType, fileSize} = fileInfo;
                if (objectType === null)
                {
                    return history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
                }
                else
                {
                    setFileSize(fileSize!);
                    setFileType(fileType!);
                    const isText = fileType!.toLowerCase().includes('text');
                    const isOversize = isText
                        ? fileSize! > TEXT_FILE_MAX_SIZE
                        : fileSize! > BINARY_FILE_MAX_SIZE;
                    setIsOversize(isOversize);
                }
            }
        };

        if (lastCommitLoaded)
        {
            setLoading(true);
            loadFileInfo()
                .finally(() => setLoading(false));
        }
    }, [lastCommit, username, repositoryName, path, history, lastCommitLoaded, BINARY_FILE_MAX_SIZE, TEXT_FILE_MAX_SIZE]);

    // loadCodeComments
    useEffect(() =>
    {
        if (lastCommitLoaded)
        {
            setLoading(true);
            loadCodeComments()
                .finally(() => setLoading(false));
        }
    }, [loadCodeComments, lastCommitLoaded]);

    // loadFileContent
    useEffect(() =>
    {
        const loadFileContent = async () =>
        {
            const {commitHash} = lastCommit;
            const rawFile = await RepositoryInfo.rawFile({username}, {name: repositoryName}, path!, commitHash);
            if (rawFile !== null)
            {
                setFileContent(rawFile);
            }
        };

        if (!isOversize && lastCommitLoaded)
        {
            setLoading(true);
            loadFileContent()
                .finally(() => setLoading(false));
        }

    }, [isOversize, username, repositoryName, path, lastCommit, lastCommitLoaded]);

    const onCodeLineClickFactory: (lineNumber: number) => HTMLAttributes<HTMLTableRowElement>['onClick'] = useCallback(
        lineNumber =>
        {
            return async () =>
            {
                setDrawerLineNumber(lineNumber);
                const codeLines = (await File.transformBlobToString(fileContent)).split('\n');
                setDrawerCode(codeLines[lineNumber - 1].trim());
                setDrawerVisible(true);
            };
        }, [fileContent]);

    const onDrawerClose: DrawerProps['onClose'] = () =>
    {
        setDrawerVisible(false);
    };

    const fileName = basename(path!);
    return (
        <View fileSize={fileSize}
              fileContent={fileContent} fileType={fileType} fileName={fileName}
              isOversize={isOversize}
              lastCommit={lastCommit}
              loading={loading}
              hasCommentLineNumbers={hasCommentLineNumbers}
              onCodeLineClickFactory={onCodeLineClickFactory}
              drawerCode={drawerCode}
              drawerLineNumber={drawerLineNumber}
              drawerVisible={drawerVisible} onDrawerClose={onDrawerClose} />);
}

export default React.memo(FileReader);