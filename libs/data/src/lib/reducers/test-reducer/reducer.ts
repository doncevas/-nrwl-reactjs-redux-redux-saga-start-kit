import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  username: null,
};

export function homeReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {  
  switch (action.type) {
    case ActionTypes.CHANGE_USERNAME:
    return {
        username: action.payload,
      };
    case ActionTypes.CHANGE_USERNAME_SUCCESS:        
    return {
        username: action.payload,
      };
    default:
      return state;
  }
}

export default homeReducer;