import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Account } from './account.model';

export enum AccountActionTypes {

  QueryAccount = '[Account] Query',
  QueryAccountAdded = '[Account] added',
  QueryAccountModified = '[Account] modified',
  QueryAccountRemoved = '[Account] removed',
  QueryAccountFail = '[Account] Query Fail',

  CreateAccount = '[Account] Create',
  CreateAccountSuccess = '[Account] Insert Success',
  CreateAccountFail = '[Account] Insert Fail',

  UpdateAccount = '[Account] Update',
  UpdateAccountSuccess = '[Account] Update Success',
  UpdateAccountFail = '[Account] Update Fail',

  DeleteAccountById = '[Account] Delete By ID',
  DeleteAccountByIdSuccess = '[Account] Delete Success',
  DeleteAccountByIdFail = '[Account] Delete Fail',

}


  // ========================================= QUERY
  export class QueryAccount implements Action {
    readonly type = AccountActionTypes.QueryAccount;
    constructor() {}
  }

  export class QueryAccountAdded implements Action {
    readonly type = AccountActionTypes.QueryAccountAdded;
    constructor(public payload: Account) {}
  }

  export class QueryAccountModified implements Action {
    readonly type = AccountActionTypes.QueryAccountModified;
    constructor(public payload: Account) {}
  }

  export class QueryAccountRemoved implements Action {
    readonly type = AccountActionTypes.QueryAccountRemoved;
    constructor(public payload: Account) {}
  }

  export class QueryAccountFail implements Action {
    readonly type = AccountActionTypes.QueryAccountFail;
    constructor(public payload: { error: string }) {}
  }

// ========================================= CREATE
export class CreateAccount implements Action {
  readonly type = AccountActionTypes.CreateAccount;
  constructor(public payload: { account: Account }) {}
}

export class CreateAccountSuccess implements Action {
  readonly type = AccountActionTypes.CreateAccountSuccess;
  constructor(public payload: { result: Account }) {}
}

export class CreateAccountFail implements Action {
  readonly type = AccountActionTypes.CreateAccountFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= UPDATE

export class UpdateAccount implements Action {
  readonly type = AccountActionTypes.UpdateAccount;
  constructor(public payload: { account: Account }) {}
}

export class UpdateAccountSuccess implements Action {
  readonly type = AccountActionTypes.UpdateAccountSuccess;
  constructor(public payload: { update: Update<Account> }) {}
}

export class UpdateAccountFail implements Action {
  readonly type = AccountActionTypes.UpdateAccountFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= DELETE

export class DeleteAccountById implements Action {
  readonly type = AccountActionTypes.DeleteAccountById;
  constructor(public payload: { id: string }) {}
}

export class DeleteAccountByIdSuccess implements Action {
  readonly type = AccountActionTypes.DeleteAccountByIdSuccess;
  constructor(public payload: { id: string }) {}
}

export class DeleteAccountByIdFail implements Action {
  readonly type = AccountActionTypes.DeleteAccountByIdFail;
  constructor(public payload: { error: string }) {}
}



export type AccountActions =

    QueryAccount
  | QueryAccountAdded
  | QueryAccountModified
  | QueryAccountRemoved
  | QueryAccountFail

  | CreateAccount
  | CreateAccountSuccess
  | CreateAccountFail

  | UpdateAccount
  | UpdateAccountSuccess
  | UpdateAccountFail

  | DeleteAccountById
  | DeleteAccountByIdSuccess
  | DeleteAccountByIdFail;
