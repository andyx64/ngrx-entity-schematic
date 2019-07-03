import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Test } from './test.model';

export enum TestActionTypes {

  QueryTest = '[Test] Query',
  QueryTestAdded = '[Test] added',
  QueryTestModified = '[Test] modified',
  QueryTestRemoved = '[Test] removed',
  QueryTestFail = '[Test] Query Fail',

  CreateTest = '[Test] Create',
  CreateTestSuccess = '[Test] Insert Success',
  CreateTestFail = '[Test] Insert Fail',

  UpdateTest = '[Test] Update',
  UpdateTestSuccess = '[Test] Update Success',
  UpdateTestFail = '[Test] Update Fail',

  DeleteTestById = '[Test] Delete By ID',
  DeleteTestByIdSuccess = '[Test] Delete Success',
  DeleteTestByIdFail = '[Test] Delete Fail',

}


  // ========================================= QUERY
  export class QueryTest implements Action {
    readonly type = TestActionTypes.QueryTest;
    constructor() {}
  }

  export class QueryTestAdded implements Action {
    readonly type = TestActionTypes.QueryTestAdded;
    constructor(public payload: Test) {}
  }

  export class QueryTestModified implements Action {
    readonly type = TestActionTypes.QueryTestModified;
    constructor(public payload: Test) {}
  }

  export class QueryTestRemoved implements Action {
    readonly type = TestActionTypes.QueryTestRemoved;
    constructor(public payload: Test) {}
  }

  export class QueryTestFail implements Action {
    readonly type = TestActionTypes.QueryTestFail;
    constructor(public payload: { error: string }) {}
  }

// ========================================= CREATE
export class CreateTest implements Action {
  readonly type = TestActionTypes.CreateTest;
  constructor(public payload: { test: Test }) {}
}

export class CreateTestSuccess implements Action {
  readonly type = TestActionTypes.CreateTestSuccess;
  constructor(public payload: { result: Test }) {}
}

export class CreateTestFail implements Action {
  readonly type = TestActionTypes.CreateTestFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= UPDATE

export class UpdateTest implements Action {
  readonly type = TestActionTypes.UpdateTest;
  constructor(public payload: { test: Test }) {}
}

export class UpdateTestSuccess implements Action {
  readonly type = TestActionTypes.UpdateTestSuccess;
  constructor(public payload: { update: Update<Test> }) {}
}

export class UpdateTestFail implements Action {
  readonly type = TestActionTypes.UpdateTestFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= DELETE

export class DeleteTestById implements Action {
  readonly type = TestActionTypes.DeleteTestById;
  constructor(public payload: { id: string }) {}
}

export class DeleteTestByIdSuccess implements Action {
  readonly type = TestActionTypes.DeleteTestByIdSuccess;
  constructor(public payload: { id: string }) {}
}

export class DeleteTestByIdFail implements Action {
  readonly type = TestActionTypes.DeleteTestByIdFail;
  constructor(public payload: { error: string }) {}
}



export type TestActions =

    QueryTest
  | QueryTestAdded
  | QueryTestModified
  | QueryTestRemoved
  | QueryTestFail

  | CreateTest
  | CreateTestSuccess
  | CreateTestFail

  | UpdateTest
  | UpdateTestSuccess
  | UpdateTestFail

  | DeleteTestById
  | DeleteTestByIdSuccess
  | DeleteTestByIdFail;
