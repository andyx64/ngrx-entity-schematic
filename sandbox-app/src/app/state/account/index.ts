import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  accountAdapter,
} from './account.reducer';
import { AccountState } from './account.reducer';

export const getAccountState = createFeatureSelector<AccountState>('account');

export const {
  selectIds: accountIds,
  selectEntities: accountEntities,
  selectAll: account,
  selectTotal: accountCount
} = accountAdapter.getSelectors(getAccountState);

export const getAccountById = (id) => createSelector(
  accountEntities,
  (accounts) => accounts[id]
);
