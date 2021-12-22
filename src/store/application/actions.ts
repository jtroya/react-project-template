import { AppTypes, AppActionTypes } from './types';

export const setUsername = (userName: string): AppActionTypes => ({
  type: AppTypes.SET_USERNAME,
  payload: userName,
});
