import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Hammer } from './hammer.model';
import { HammerActions, HammerActionTypes } from './hammer.actions';

export interface HammerState extends EntityState<Hammer> {
  // additional entities state properties
  loading: boolean;
  error: string;
}

export const hammerAdapter: EntityAdapter<Hammer> = createEntityAdapter<Hammer>();

export const initialHammerState: HammerState = hammerAdapter.getInitialState({
  // additional hammer state properties
  loading: false,
  error: '',
});

export function hammerReducer(state = initialHammerState, action: HammerActions): HammerState {
  switch (action.type) {
    case HammerActionTypes.QueryHammerAdded:
      console.log(action)
      return hammerAdapter.addOne(action.payload, state);

    case HammerActionTypes.QueryHammerModified:
      return hammerAdapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state)

    case HammerActionTypes.QueryHammerRemoved:
      return hammerAdapter.removeOne(action.payload.id, state)

    case  HammerActionTypes.QueryHammerFail:
      return {
        ...state,
        loading: false,
        error: 'Hammer query failed: ' + action.payload.error
      };

    case HammerActionTypes.CreateHammer:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case HammerActionTypes.CreateHammerSuccess:
      return {
        ...state,
        loading: false,
        error: ''
      };

    case HammerActionTypes.CreateHammerFail:
      return {
        ...state,
        loading: false,
        error: 'Hammer create failed: ' + action.payload.error
      };

    case HammerActionTypes.UpdateHammer:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case HammerActionTypes.UpdateHammerSuccess:
      return {
        ...state,
        loading: false,
        error: ''
      };

    case HammerActionTypes.UpdateHammerFail:
      return {
        ...state,
        loading: false,
        error: 'Hammer update failed: ' + action.payload.error
      };

    case HammerActionTypes.DeleteHammerById:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case HammerActionTypes.DeleteHammerByIdSuccess:
        return {
        ...state,
        loading: false,
        error: ''
      };

    case HammerActionTypes.DeleteHammerByIdFail:
      return {
        ...state,
        loading: false,
        error: 'Hammer delete failed: ' + action.payload.error
      };


    default:
      return state;
  }
}

