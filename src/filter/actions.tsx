import {SET_FILTER} from './actionTypes';
export const setFilter=(filterType:any)=>({
    type:SET_FILTER,
    filter:filterType
})