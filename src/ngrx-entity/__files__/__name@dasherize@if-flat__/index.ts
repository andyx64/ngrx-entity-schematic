import { createSelector, createFeatureSelector } from '@ngrx/store';

import {
  <%= name %>Adapter,
} from './<%= dasherize(name) %>.reducer';
import { <%= classify(name) %>State } from './<%= dasherize(name) %>.reducer';

export const get<%= classify(name) %>State = createFeatureSelector<<%= classify(name) %>State>('<%= name %>');

export const {
  selectIds: <%= name %>Ids,
  selectEntities: <%= name %>Entities,
  selectAll: <%= name %>,
  selectTotal: <%= name %>Count
} = <%= name %>Adapter.getSelectors(get<%= classify(name) %>State);

