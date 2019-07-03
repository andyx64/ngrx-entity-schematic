import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  hammerAdapter,
} from './hammer.reducer';
import { HammerState } from './hammer.reducer';

export const getHammerState = createFeatureSelector<HammerState>('hammer');

export const {
  selectIds: hammerIds,
  selectEntities: hammerEntities,
  selectAll: hammer,
  selectTotal: hammerCount
} = hammerAdapter.getSelectors(getHammerState);

export const getHammerById = (id) => createSelector(
  hammerEntities,
  (hammers) => hammers[id]
);
