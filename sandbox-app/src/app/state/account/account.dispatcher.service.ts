import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {Account} from './account.model';
import {CreateAccount, DeleteAccountById, QueryAccount, UpdateAccount} from './account.actions';

@Injectable({
  providedIn: 'root'
})
export class AccountDispatcherService {

  constructor(private _store: Store<Account>) { }

  QueryAccount (): void {
    this._store.dispatch(new QueryAccount());
  }

  CreateAccount (account: Account): void {
    this._store.dispatch(new CreateAccount({account: account}));
  }

  UpdateAccount (account: Account): void {
    this._store.dispatch(new UpdateAccount({account: account}));
  }

  DeleteAccount(accountId: string): void {
    this._store.dispatch(new DeleteAccountById({id: accountId}));
  }
}
