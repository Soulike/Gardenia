import axios, {AxiosResponse} from 'axios';
import {ResponseBody} from '../Class';
import {errorHandler} from './Function';
import {notification} from 'antd';

/**
 * @description axios 全局配置
 * */

axios.defaults.validateStatus = status => status >= 100 && status < 500; // 不会因为代码不是 2xx 就 Reject Promise
axios.interceptors.response.use((value: AxiosResponse<ResponseBody<unknown> | Blob>) =>
{
    const {data} = value;
    if (!(data instanceof Blob))
    {
        const {isSuccessful, message} = data;
        if (!isSuccessful)
        {
            notification.warn({
                message,
                key: 'response-warn',
            });
        }
    }
    return value;
}, e =>
{
    errorHandler(e);
    throw e;
});