import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { <%= classify(name) %> } from './<%= dasherize(name) %>.model';

export enum <%= classify(name) %>ActionTypes {

  Query<%= classify(name) %> = '[<%= classify(name) %>] Query',
  Query<%= classify(name) %>Added = '[<%= classify(name) %>] added',
  Query<%= classify(name) %>Modified = '[<%= classify(name) %>] modified',
  Query<%= classify(name) %>Removed = '[<%= classify(name) %>] removed',
  Query<%= classify(name) %>Fail = '[<%= classify(name) %>] Query Fail',

  Create<%= classify(name) %> = '[<%= classify(name) %>] Create',
  Create<%= classify(name) %>Success = '[<%= classify(name) %>] Insert Success',
  Create<%= classify(name) %>Fail = '[<%= classify(name) %>] Insert Fail',

  Update<%= classify(name) %> = '[<%= classify(name) %>] Update',
  Update<%= classify(name) %>Success = '[<%= classify(name) %>] Update Success',
  Update<%= classify(name) %>Fail = '[<%= classify(name) %>] Update Fail',

  Delete<%= classify(name) %>ById = '[<%= classify(name) %>] Delete By ID',
  Delete<%= classify(name) %>ByIdSuccess = '[<%= classify(name) %>] Delete Success',
  Delete<%= classify(name) %>ByIdFail = '[<%= classify(name) %>] Delete Fail',

}


  // ========================================= QUERY
  export class Query<%= classify(name) %> implements Action {
    readonly type = <%= classify(name) %>ActionTypes.Query<%= classify(name) %>;
    constructor() {}
  }

  export class Query<%= classify(name) %>Added implements Action {
    readonly type = <%= classify(name) %>ActionTypes.Query<%= classify(name) %>Added;
    constructor(public payload: <%= classify(name) %>) {}
  }

  export class Query<%= classify(name) %>Modified implements Action {
    readonly type = <%= classify(name) %>ActionTypes.Query<%= classify(name) %>Modified;
    constructor(public payload: <%= classify(name) %>) {}
  }

  export class Query<%= classify(name) %>Removed implements Action {
    readonly type = <%= classify(name) %>ActionTypes.Query<%= classify(name) %>Removed;
    constructor(public payload: <%= classify(name) %>) {}
  }

  export class Query<%= classify(name) %>Fail implements Action {
    readonly type = <%= classify(name) %>ActionTypes.Query<%= classify(name) %>Fail;
    constructor(public payload: { error: string }) {}
  }

// ========================================= CREATE
export class Create<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Create<%= classify(name) %>;
  constructor(public payload: { <%= name %>: <%= classify(name) %> }) {}
}

export class Create<%= classify(name) %>Success implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Create<%= classify(name) %>Success;
  constructor(public payload: { result: <%= classify(name) %> }) {}
}

export class Create<%= classify(name) %>Fail implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Create<%= classify(name) %>Fail;
  constructor(public payload: { error: string }) {}
}

// ========================================= UPDATE

export class Update<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Update<%= classify(name) %>;
  constructor(public payload: { <%= name %>: <%= classify(name) %> }) {}
}

export class Update<%= classify(name) %>Success implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Update<%= classify(name) %>Success;
  constructor(public payload: { update: Update<<%= classify(name) %>> }) {}
}

export class Update<%= classify(name) %>Fail implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Update<%= classify(name) %>Fail;
  constructor(public payload: { error: string }) {}
}

// ========================================= DELETE

export class Delete<%= classify(name) %>ById implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>ById;
  constructor(public payload: { id: string }) {}
}

export class Delete<%= classify(name) %>ByIdSuccess implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>ByIdSuccess;
  constructor(public payload: { id: string }) {}
}

export class Delete<%= classify(name) %>ByIdFail implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Delete<%= classify(name) %>ByIdFail;
  constructor(public payload: { error: string }) {}
}



export type <%= classify(name) %>Actions =

    Query<%= classify(name) %>
  | Query<%= classify(name) %>Added
  | Query<%= classify(name) %>Modified
  | Query<%= classify(name) %>Removed
  | Query<%= classify(name) %>Fail

  | Create<%= classify(name) %>
  | Create<%= classify(name) %>Success
  | Create<%= classify(name) %>Fail

  | Update<%= classify(name) %>
  | Update<%= classify(name) %>Success
  | Update<%= classify(name) %>Fail

  | Delete<%= classify(name) %>ById
  | Delete<%= classify(name) %>ByIdSuccess
  | Delete<%= classify(name) %>ByIdFail;
