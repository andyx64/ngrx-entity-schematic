import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Account } from './account.model';
import { AccountActions, AccountActionTypes } from './account.actions';

export interface AccountState extends EntityState<Account> {
  // additional entities state properties
  loading: boolean;
  error: string;
}

export const accountAdapter: EntityAdapter<Account> = createEntityAdapter<Account>();

export const initialAccountState: AccountState = accountAdapter.getInitialState({
  // additional account state properties
  loading: false,
  error: '',
});

export function accountReducer(state = initialAccountState, action: AccountActions): AccountState {
  switch (action.type) {
    case AccountActionTypes.QueryAccountAdded:
      console.log(action)
      return accountAdapter.addOne(action.payload, state);

    case AccountActionTypes.QueryAccountModified:
      return accountAdapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state)

    case AccountActionTypes.QueryAccountRemoved:
      return accountAdapter.removeOne(action.payload.id, state)

    case  AccountActionTypes.QueryAccountFail:
      return {
        ...state,
        loading: false,
        error: 'Account query failed: ' + action.payload.error
      };

    case AccountActionTypes.CreateAccount:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case AccountActionTypes.CreateAccountSuccess:
      return {
        ...state,
        loading: false,
        error: ''
      };

    case AccountActionTypes.CreateAccountFail:
      return {
        ...state,
        loading: false,
        error: 'Account create failed: ' + action.payload.error
      };

    case AccountActionTypes.UpdateAccount:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case AccountActionTypes.UpdateAccountSuccess:
      return {
        ...state,
        loading: false,
        error: ''
      };

    case AccountActionTypes.UpdateAccountFail:
      return {
        ...state,
        loading: false,
        error: 'Account update failed: ' + action.payload.error
      };

    case AccountActionTypes.DeleteAccountById:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case AccountActionTypes.DeleteAccountByIdSuccess:
        return {
        ...state,
        loading: false,
        error: ''
      };

    case AccountActionTypes.DeleteAccountByIdFail:
      return {
        ...state,
        loading: false,
        error: 'Account delete failed: ' + action.payload.error
      };


    default:
      return state;
  }
}

