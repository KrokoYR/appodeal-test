import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { authReducer, IAuthState } from '../shared/auth';

export interface ICoreState {
  auth: IAuthState;
}

export const appReducers: ActionReducerMap<ICoreState> = {
  auth: authReducer
};

export const metaReducers: MetaReducer<ICoreState>[] = [];
