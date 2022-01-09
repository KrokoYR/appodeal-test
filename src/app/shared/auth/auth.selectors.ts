import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from './auth.state';

export const selectAuth = createFeatureSelector<IAuthState>('auth');

export const selectIsLoggedIn = createSelector(
  selectAuth,
  (state: IAuthState) => {
    return state.isLoggedIn;
  }
);
