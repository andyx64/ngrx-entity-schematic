import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './state-utils';
import { TestState } from './test/test.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  test: TestState;
}

export type State = AppState;
