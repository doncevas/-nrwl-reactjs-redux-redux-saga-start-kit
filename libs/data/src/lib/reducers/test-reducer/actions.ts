import { action } from 'typesafe-actions';
import ActionTypes from './constants';

export function changeUsername(name: string){ 
    return action(
        ActionTypes.CHANGE_USERNAME, 
        name
    );
}
export function changeUsernameSuccess(name: string){ 
    return action(
        ActionTypes.CHANGE_USERNAME_SUCCESS, 
        name
    );
}