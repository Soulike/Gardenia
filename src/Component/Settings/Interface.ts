import {ReactNode} from 'react';

export interface MenuItem
{
    icon?: ReactNode,
    key: string,
    to: string,
    title: string,
}