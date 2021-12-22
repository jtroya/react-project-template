export interface AppState {
  userName: string;
}

export enum AppTypes {
  SET_USERNAME = 'SET_USERNAME',
}

export interface AppActionTypes {
  type: AppTypes;
  payload: string;
}
