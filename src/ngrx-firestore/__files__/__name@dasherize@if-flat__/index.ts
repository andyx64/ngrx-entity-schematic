import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  <%= name %>Adapter,
} from './<%= name %>.reducer';
import { <%= classify(name) %>State } from './<%= name %>.reducer';

export const get<%= classify(name) %>State = createFeatureSelector<<%= classify(name) %>State>('<%= name %>');

export const {
  selectIds: <%= name %>Ids,
  selectEntities: <%= name %>Entities,
  selectAll: <%= name %>,
  selectTotal: <%= name %>Count
} = <%= name %>Adapter.getSelectors(get<%= classify(name) %>State);

export const get<%= classify(name) %>ById = (id) => createSelector(
  <%= name %>Entities,
  (<%= name %>s) => <%= name %>s[id]
);
