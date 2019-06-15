import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { <%= classify(name) %> } from './<%= dasherize(name) %>.model';
import { <%= classify(name) %>Actions, <%= classify(name) %>ActionTypes } from './<%= dasherize(name) %>.actions';

export interface <%= classify(name) %>State extends EntityState<<%= classify(name) %>> {
  // additional entities state properties
  selectedId: string;
  loading: boolean;
  error: string;
  query: <%= classify(name) %>SearchQuery;
}

export const <%= name %>Adapter: EntityAdapter<<%= classify(name) %>> = createEntityAdapter<<%= classify(name) %>>();

export const initial<%= classify(name)%>State: <%= classify(name) %>State = <%= name %>Adapter.getInitialState({
  // additional <%= name %> state properties
  loading: false,
  error: '',
});

export function <%= name %>Reducer(state = initial<%= classify(name)%>State, action: <%= classify(name) %>Actions): <%= classify(name) %>State {
  switch (action.type) {
    <% if (firestore) { %>
    case <%= classify(name) %>ActionTypes.Query<%= classify(name) %>Added:
      console.log(action)
      return <%= name %>Adapter.addOne(action.payload, state);

    case <%= classify(name) %>ActionTypes.Query<%= classify(name) %>Modified:
      return <%= name %>Adapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state)

    case <%= classify(name) %>ActionTypes.Query<%= classify(name) %>Removed:
      return <%= name %>Adapter.removeOne(action.payload.id, state)

    case  <%= classify(name) %>ActionTypes.Query<%= classify(name) %>Fail:
      return {
        ...state,
        loading: false,
        error: '<%= classify(name) %> query failed: ' + action.payload.error
      };
    <% } %>

    case <%= classify(name) %>ActionTypes.Create<%= classify(name) %>:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case <%= classify(name) %>ActionTypes.Create<%= classify(name) %>Success:
      return {
        ...state,
        loading: false,
        error: ''
      };

    case <%= classify(name) %>ActionTypes.Create<%= classify(name) %>Fail:
      return {
        ...state,
        loading: false,
        error: '<%= classify(name) %> create failed: ' + action.payload.error
      };

    case <%= classify(name) %>ActionTypes.Update<%= classify(name) %>:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case <%= classify(name) %>ActionTypes.Update<%= classify(name) %>Success:
      return {
        ...state,
        loading: false,
        error: ''
      };

    case <%= classify(name) %>ActionTypes.Update<%= classify(name) %>Fail:
      return {
        ...state,
        loading: false,
        error: '<%= classify(name) %> update failed: ' + action.payload.error
      };

    case <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>ById:
      return {
        ...state,
        selectedId: action.payload.id,
        loading: true,
        error: ''
      };

    case <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>ByIdSuccess:
        return {
        ...state,
        ...<%= name %>Adapter.removeOne(action.payload.id, state),
        loading: false,
        error: ''
      };

    case <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>ByIdFail:
      return {
        ...state,
        loading: false,
        error: '<%= classify(name) %> delete failed: ' + action.payload.error
      };


    default:
      return state;
  }
}

