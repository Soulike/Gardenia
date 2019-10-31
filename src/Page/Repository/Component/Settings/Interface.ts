import {ReactNode} from 'react';

export interface IMenuItem
{
    icon?: ReactNode,
    key: string,
    to: string,
    title: string,
}