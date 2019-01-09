export const TOGGLE_TODO='TODO/TOGGLE'
export const ADD_TODO='TODO/ADD';
export const REMOVE_TODO='TODO/REMOVE';

export type IData=Readonly<{
    id:number;
    text:string;
    completed:boolean;
}>;