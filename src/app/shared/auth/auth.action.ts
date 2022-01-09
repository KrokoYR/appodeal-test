import { createAction } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login Action',
  Logout = '[Auth] Logout Action'
}

export const loginAction = createAction(AuthActionTypes.Login);
export const logoutAction = createAction(AuthActionTypes.Logout);
