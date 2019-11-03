/**
 * @class
 * @description HTTP 响应体的标准格式对象
 * */
export class ResponseBody<TBody = void>
{
    public isSuccessful: Readonly<boolean>;
    public message?: string;
    public data?: Readonly<TBody>;

    /**
     * @constructor
     * @param isSuccessful - 本次请求是否成功
     * @param message - 如果请求失败，简要的原因
     * @param data - 如果请求成功，前端请求的数据
     * */
    constructor(isSuccessful: boolean, message?: string, data?: TBody)
    {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.data = Object.freeze(data);
    }
}
