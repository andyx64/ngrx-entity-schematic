import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Hammer } from './hammer.model';

export enum HammerActionTypes {

  QueryHammer = '[Hammer] Query',
  QueryHammerAdded = '[Hammer] added',
  QueryHammerModified = '[Hammer] modified',
  QueryHammerRemoved = '[Hammer] removed',
  QueryHammerFail = '[Hammer] Query Fail',

  CreateHammer = '[Hammer] Create',
  CreateHammerSuccess = '[Hammer] Insert Success',
  CreateHammerFail = '[Hammer] Insert Fail',

  UpdateHammer = '[Hammer] Update',
  UpdateHammerSuccess = '[Hammer] Update Success',
  UpdateHammerFail = '[Hammer] Update Fail',

  DeleteHammerById = '[Hammer] Delete By ID',
  DeleteHammerByIdSuccess = '[Hammer] Delete Success',
  DeleteHammerByIdFail = '[Hammer] Delete Fail',

}


  // ========================================= QUERY
  export class QueryHammer implements Action {
    readonly type = HammerActionTypes.QueryHammer;
    constructor() {}
  }

  export class QueryHammerAdded implements Action {
    readonly type = HammerActionTypes.QueryHammerAdded;
    constructor(public payload: Hammer) {}
  }

  export class QueryHammerModified implements Action {
    readonly type = HammerActionTypes.QueryHammerModified;
    constructor(public payload: Hammer) {}
  }

  export class QueryHammerRemoved implements Action {
    readonly type = HammerActionTypes.QueryHammerRemoved;
    constructor(public payload: Hammer) {}
  }

  export class QueryHammerFail implements Action {
    readonly type = HammerActionTypes.QueryHammerFail;
    constructor(public payload: { error: string }) {}
  }

// ========================================= CREATE
export class CreateHammer implements Action {
  readonly type = HammerActionTypes.CreateHammer;
  constructor(public payload: { hammer: Hammer }) {}
}

export class CreateHammerSuccess implements Action {
  readonly type = HammerActionTypes.CreateHammerSuccess;
  constructor(public payload: { result: Hammer }) {}
}

export class CreateHammerFail implements Action {
  readonly type = HammerActionTypes.CreateHammerFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= UPDATE

export class UpdateHammer implements Action {
  readonly type = HammerActionTypes.UpdateHammer;
  constructor(public payload: { hammer: Hammer }) {}
}

export class UpdateHammerSuccess implements Action {
  readonly type = HammerActionTypes.UpdateHammerSuccess;
  constructor(public payload: { update: Update<Hammer> }) {}
}

export class UpdateHammerFail implements Action {
  readonly type = HammerActionTypes.UpdateHammerFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= DELETE

export class DeleteHammerById implements Action {
  readonly type = HammerActionTypes.DeleteHammerById;
  constructor(public payload: { id: string }) {}
}

export class DeleteHammerByIdSuccess implements Action {
  readonly type = HammerActionTypes.DeleteHammerByIdSuccess;
  constructor(public payload: { id: string }) {}
}

export class DeleteHammerByIdFail implements Action {
  readonly type = HammerActionTypes.DeleteHammerByIdFail;
  constructor(public payload: { error: string }) {}
}



export type HammerActions =

    QueryHammer
  | QueryHammerAdded
  | QueryHammerModified
  | QueryHammerRemoved
  | QueryHammerFail

  | CreateHammer
  | CreateHammerSuccess
  | CreateHammerFail

  | UpdateHammer
  | UpdateHammerSuccess
  | UpdateHammerFail

  | DeleteHammerById
  | DeleteHammerByIdSuccess
  | DeleteHammerByIdFail;
