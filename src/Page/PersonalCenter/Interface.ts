import {ReactNode} from 'react';

export interface Tab
{
    key: string,
    title: string,
    component: ReactNode
}