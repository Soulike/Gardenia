import axios from 'axios';

/**
 * @description axios 全局配置
 * */

axios.defaults.timeout = 5000;  // 请求超时时间
axios.defaults.validateStatus = status => status >= 100 && status < 500; // 不会因为代码不是 2xx 就 Reject Promise