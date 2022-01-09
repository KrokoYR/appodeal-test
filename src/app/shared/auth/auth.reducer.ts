import { Action, createReducer, on } from '@ngrx/store';

import { IAuthState, defaultAuthState } from './auth.state';
import { loginAction, logoutAction } from './auth.action';

const reducer = createReducer<IAuthState>(
  defaultAuthState,

  on(loginAction, (state) => ({
    ...state,
    isLoggedIn: true
  })),

  on(logoutAction, (state) => ({
    ...state,
    isLoggedIn: false
  }))
);

export function authReducer(state: IAuthState | undefined, action: Action) {
  return reducer(state, action);
}
