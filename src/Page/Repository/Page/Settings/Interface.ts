import {ReactNode} from 'react';

export interface IMenuItem
{
    readonly icon?: ReactNode,
    readonly key: string,
    readonly to: string,
    readonly title: string,
}