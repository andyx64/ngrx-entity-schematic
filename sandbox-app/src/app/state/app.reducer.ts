import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';

import { AppState } from './app.interfaces';
import { environment } from '../../environments/environment';
import { testReducer } from './test/test.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  test: testReducer,
  router: routerReducer
};

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
