import * as  Status from './status';
import { FETCH_SUCCESS, FETCH_FAILURE, FETCH_STARTED } from './actionTypes'
type IAction = Readonly<{
    type: string;
    result:any;
    error?: string;
}>
const initState = { status: Status.LOADING };

export default (state = initState, action: IAction) => {
    switch (action.type) {
        case FETCH_STARTED:
            return { status: Status.LOADING }
        case FETCH_SUCCESS:
            console.log(action.result,'action result');
            return { ...state, status: Status.SUCCESS, ...action.result }
        case FETCH_FAILURE:
            return { status: Status.FAILURE }
        default:
            return  state
    }
}