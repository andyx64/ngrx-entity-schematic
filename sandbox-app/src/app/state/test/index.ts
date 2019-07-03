import { createFeatureSelector } from '@ngrx/store';

import {
  testAdapter,
} from './test.reducer';
import { TestState } from './test.reducer';

export const getTestState = createFeatureSelector<TestState>('test');

export const {
  selectIds: testIds,
  selectEntities: testEntities,
  selectAll: test,
  selectTotal: testCount
} = testAdapter.getSelectors(getTestState);

