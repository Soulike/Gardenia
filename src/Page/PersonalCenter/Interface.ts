import {ReactNode} from 'react';

export interface Tab
{
    readonly key: string,
    readonly title: string,
    readonly component: ReactNode
}