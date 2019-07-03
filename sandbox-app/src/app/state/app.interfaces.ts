import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './state-utils';
import { AccountState } from './account/account.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  account: AccountState;
}

export type State = AppState;
