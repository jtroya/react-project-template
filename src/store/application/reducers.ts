import { AppState, AppTypes, AppActionTypes } from './types';

export const appInitialState: AppState = {
  userName: '',
};

export function appReducer(
  state = appInitialState,
  action: AppActionTypes,
): AppState {
  switch (action.type) {
    case AppTypes.SET_USERNAME:
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
}
