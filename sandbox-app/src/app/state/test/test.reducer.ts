import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Test } from './test.model';
import { TestActions, TestActionTypes } from './test.actions';

export interface TestState extends EntityState<Test> {
  // additional entities state properties
  loading: boolean;
  error: string;
}

export const testAdapter: EntityAdapter<Test> = createEntityAdapter<Test>();

export const initialTestState: TestState = testAdapter.getInitialState({
  // additional test state properties
  loading: false,
  error: '',
});

export function testReducer(state = initialTestState, action: TestActions): TestState {
  switch (action.type) {
    case TestActionTypes.QueryTestAdded:
      console.log(action)
      return testAdapter.addOne(action.payload, state);

    case TestActionTypes.QueryTestModified:
      return testAdapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state)

    case TestActionTypes.QueryTestRemoved:
      return testAdapter.removeOne(action.payload.id, state)

    case  TestActionTypes.QueryTestFail:
      return {
        ...state,
        loading: false,
        error: 'Test query failed: ' + action.payload.error
      };

    case TestActionTypes.CreateTest:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case TestActionTypes.CreateTestSuccess:
      return {
        ...state,
        loading: false,
        error: ''
      };

    case TestActionTypes.CreateTestFail:
      return {
        ...state,
        loading: false,
        error: 'Test create failed: ' + action.payload.error
      };

    case TestActionTypes.UpdateTest:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case TestActionTypes.UpdateTestSuccess:
      return {
        ...state,
        loading: false,
        error: ''
      };

    case TestActionTypes.UpdateTestFail:
      return {
        ...state,
        loading: false,
        error: 'Test update failed: ' + action.payload.error
      };

    case TestActionTypes.DeleteTestById:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case TestActionTypes.DeleteTestByIdSuccess:
        return {
        ...state,
        loading: false,
        error: ''
      };

    case TestActionTypes.DeleteTestByIdFail:
      return {
        ...state,
        loading: false,
        error: 'Test delete failed: ' + action.payload.error
      };


    default:
      return state;
  }
}

